ниже — «живая» инструкция по Betatransfer API v1, заточенная под твой флоу: Лендинг → n8n → Betatransfer → n8n (webhook) → Notion (выдать доступ). Я опираюсь на их публичные страницы с примером запросов и описанием параметров, где официальная спецификация неполная — а пробелы закрываю проверенной практикой интеграций.

---

# Что ты строишь (общая схема)

1. Пользователь кликает «Купить тариф» на лендинге → запрос в n8n `/pay/create?plan=…&email=…`.
2. n8n создаёт платёж в Betatransfer → получает `urlPayment`.
3. n8n отвечает 302 Redirect / или отдаёт ссылку → пользователь переходит на форму оплаты Betatransfer.
4. После оплаты Betatransfer шлёт серверный callback (IPN) на твой `urlResult`.
5. n8n валидирует подпись и статус → создаёт/обновляет запись в Notion и выдаёт доступ к материалам.
6. n8n отвечает `OK` на callback.

---

# Базовые сущности Betatransfer v1

## Ключи и окружение

* Нужны `public_api_key` и `secret_api_key`. Их выдают после регистрации в кабинете merchant.betatransfer.io. ([betatransfer-merchant.com][1])
* Официального «sandbox-домена» не задекларировано; тестовый доступ/проверка проекта происходит по договорённости c менеджерами. Для отладки можно:
  a) выслать на их стороне тестовые реквизиты/методы;
  b) прогонять минимальные суммы;
  c) эмулировать callback в n8n (см. ниже). ([Btr Kassa][2], [betatransfer-merchant.com][3])

## Эндпоинт создания платежа

```
POST https://merchant.betatransfer.io/api/payment?token=PUBLIC_KEY
Content-Type: application/x-www-form-urlencoded
```

Тело (основные поля):

* `amount` (например, `100.50`)
* `currency` (`USD|EUR|RUB|UAH` и др.)
* `orderId` (уникальный ID заказа)
* `paymentSystem` (конкретный провайдер; список — через менеджера)
* `urlResult` (URL твоего серверного обработчика n8n)
* `urlSuccess` (куда вернуть клиента после удачной оплаты)
* `urlFail` (куда вернуть клиента после неуспешной)
* `redirect` = `1` (если хочешь авто‑редирект)
* `fullCallback` = `1` (чтобы получать ВСЕ статусы, см. ниже)
* подпись `sign` (правила ниже)
  Подробности по параметрам и поведению `fullCallback` есть на их странице «API». ([Btr Kassa][4])

### Ответ при удаче (пример)

```json
{
  "status": "success",
  "id": 123456,
  "urlPayment": "https://.../checkout?token=....",
  "formPayment": "",
  "url": "https://.../checkout?token=...."
}
```

Любое из `urlPayment`/`url` годится для редиректа. ([merchant.betatransfer.io][5])

## Подписи (sign)

* При **создании платежа**: MD5 от конкатенации значений полей **в том порядке, как ты их добавил в тело**, плюс `secret`.
  Пример (PHP/Node) в их «API example»: `md5(implode('', $data) . $secret)` / `crypto.createHash('md5').update(concat + secret).digest('hex')`.
  Рекомендация: формируй массив полей в фиксированном порядке (например: `amount, currency, orderId, paymentSystem, urlResult, urlSuccess, urlFail, redirect, fullCallback`) перед расчётом подписи. ([merchant.betatransfer.io][5])
* В **callback’е об успешной оплате** валидируй: `md5(amount + orderId + secret)` и сопоставляй `orderId`, `amount` с данными заказа. ([merchant.betatransfer.io][5])

## Callback (IPN) статусы

Если при создании заказа ты задал `fullCallback=1`, в `urlResult` придут уведомления со статусами:

* `success` — успешная оплата
* `not_paid_timeout` — не успели оплатить (таймаут)
* `partial_payment` — частичная оплата
* (также могут приходить `cancel`, `error`, `not_paid`, `not_paid_unavailable_country`)
  Пример тел уведомлений и валидации подписи есть в их «API example»; на успешный разбор callback’a ответь просто `OK`. ([merchant.betatransfer.io][5], [Btr Kassa][4])

## Получить информацию по транзакции

```
POST https://merchant.betatransfer.io/api/info?token=PUBLIC_KEY
body: { id, sign=md5(id + secret) }
```

Возвращает `{"status": "processing" | ...}` и т.п. ([merchant.betatransfer.io][5])

> Есть ещё payout’ы и API споров `/v2/appeal/...` (HMAC‑SHA256 по `Timestamp` + заголовки `ApiKey`, `Signature`). Для приёма платежей это не нужно, но фиксирую, что оно существует. ([merchant.betatransfer.io][5])

---

# n8n: два сценария (готовые узлы и логика)

## 1) Создать платёж → вернуть ссылку/редирект

**Вход:** `POST /pay/create` с полями `plan`, `email`, опц. `name`.
**Шаги в n8n:**

1. **Webhook (POST)**

   * Path: `/pay/create`
   * Respond: «Last node» (мы ответим после HTTP‑запроса к Betatransfer).

2. **Set (или Function) — маппинг тарифов**

   * Внутри зашьём таблицу тарифов: `plan → {amount, currency, name}`.
   * Сгенерируй `orderId`, напр.: `{{ $json.plan }}-{{ Date.now() }}`.
   * Сформируй `urlResult` = публичный URL второго webhook’a (см. сценарий 2).
   * `urlSuccess`/`urlFail` = страницы на лендинге.

3. **Function — рассчёт подписи**

   * Собери объект в фиксированном порядке:
     `amount, currency, orderId, paymentSystem, urlResult, urlSuccess, urlFail, redirect=1, fullCallback=1`
   * Подпись: `md5(concat(values) + SECRET)`.

4. **HTTP Request (POST)** — Betatransfer «Создать платёж»

   * URL: `https://merchant.betatransfer.io/api/payment?token={{ $env.BT_PUBLIC }}`
   * Body: x‑www‑form‑urlencoded (поля из шага 3)
   * Возвратить весь JSON.

5. **IF — `status == success`**

   * Если да — взять `urlPayment` (fallback на `url`).

6а. **Respond to Webhook (вариант А — 302 Redirect)**

* Status: `302`
* Header: `Location: {{$json.urlPayment}}`
* Body пустой.

6б. **Либо Respond to Webhook (вариант Б — JSON)**

* Status: `200`
* Body: `{ "checkoutUrl": "..." }`
* На фронте сделай `window.location = checkoutUrl`.

## 2) Приём серверного callback от Betatransfer

**Вход:** `POST /pay/bt-callback` (это твой `urlResult`).
**Шаги в n8n:**

1. **Webhook (POST)**

   * Path: `/pay/bt-callback`
   * Включи «Response Code» = `200` и «Response Data» — **позже**, из отдельного узла.

2. **Function — валидация подписи**

   * Входные поля от BT (см. пример): как минимум `sign`, `amount`, `orderId`, может быть `status`, `paidAmount`, `currency`, `id`, `commission`, и т.д.
   * Считай локально `expected = md5(amount + orderId + SECRET)` и сравнивай.
   * Если не совпало — логируй и верни 400/«Invalid sign».

3. **IF по `status`**

   * `success` → доступ выдаём немедленно.
   * `partial_payment` → можешь пометить как «ожидает доплаты».
   * `not_paid_timeout`/`cancel`/`error` → закрываем заказ.

4. **Notion (Create Page / Update Page)**

   * База «Ученики/Заказы» (схему см. ниже).
   * Создай или обнови по `orderId` (для идемпотентности храни `orderId` в Notion).
   * Проставь поля: Email, Plan, Amount, Currency, Status, PaidAmount, TransactionId, AccessLink.

5. **Respond to Webhook — строкой `OK`**

   * **Важно:** Док‑пример ожидает буквальный `OK` для подтверждения получения. ([merchant.betatransfer.io][5])

---

# Примеры кода

## Создать платёж (cURL)

```bash
PUBLIC="your_public"
SECRET="your_secret"
URL="https://merchant.betatransfer.io/api/payment?token=$PUBLIC"

# фиксируем порядок полей!
AMOUNT="15.00"
CURRENCY="USD"
ORDER_ID="course_basic_$(date +%s)"
PAYMENT_SYSTEM="Pay"  # пример; уточняется с менеджером
URL_RESULT="https://<your-n8n-domain>/webhook/pay/bt-callback"
URL_SUCCESS="https://<your-landing>/success"
URL_FAIL="https://<your-landing>/fail"
REDIRECT="1"
FULL_CALLBACK="1"

TO_SIGN="${AMOUNT}${CURRENCY}${ORDER_ID}${PAYMENT_SYSTEM}${URL_RESULT}${URL_SUCCESS}${URL_FAIL}${REDIRECT}${FULL_CALLBACK}${SECRET}"
SIGN=$(printf "%s" "$TO_SIGN" | md5sum | awk '{print $1}')

curl -X POST "$URL" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode amount="$AMOUNT" \
  --data-urlencode currency="$CURRENCY" \
  --data-urlencode orderId="$ORDER_ID" \
  --data-urlencode paymentSystem="$PAYMENT_SYSTEM" \
  --data-urlencode urlResult="$URL_RESULT" \
  --data-urlencode urlSuccess="$URL_SUCCESS" \
  --data-urlencode urlFail="$URL_FAIL" \
  --data-urlencode redirect="$REDIRECT" \
  --data-urlencode fullCallback="$FULL_CALLBACK" \
  --data-urlencode sign="$SIGN"
```

(примерные поля и подпись — по их демо-странице «API example» + параметрам из «API». ([merchant.betatransfer.io][5], [Btr Kassa][4]))

## Валидация callback (Node.js-псевдокод)

```js
import crypto from "crypto";

function validateBtCallback({ amount, orderId, sign }, SECRET) {
  const expected = crypto
    .createHash("md5")
    .update(`${amount}${orderId}${SECRET}`)
    .digest("hex");
  return expected === sign;
}
```

(формула из их примера «Successful payment notification handler». ([merchant.betatransfer.io][5]))

---

# Схема БД в Notion (минимум)

Создай базу «Orders/Students» со столбцами:

* **Email** (email/text)
* **Order ID** (text, уникальный)
* **Plan** (select)
* **Amount** (number), **Currency** (select)
* **Status** (select: Pending, Paid, Partial, Expired, Canceled)
* **Paid Amount** (number) — если приходит
* **Transaction ID** (text)
* **Access Link** (url) — ссылка на материалы/Notion page/группа и т.п.

В n8n:

* Используй **Notion** node → «Create Page»/«Update Page», укажи Database ID, маппинг полей.
* Интеграцию Notion создай заранее (internal integration token), добавь права на базу.

---

# Тестирование без реальных оплат

1. **Эмуляция IPN**: просто отправь `POST` на свой `/pay/bt-callback` с телом, как у Betatransfer (включая корректный `sign`), чтобы протестировать логики Notion/идемпотентности/ответа `OK`. Это декларированно совместимо с их схемой callback. ([merchant.betatransfer.io][5])
2. **Минимальные суммы**: создай заказ на \$0.10–\$1 (если метод позволяет).
3. **Тестовые методы**: в их документации не опубликован отдельный «sandbox-домен», но процесс подключения включает тестовый доступ и проверку проекта — уточни у своего менеджера Betatransfer список тестовых `paymentSystem`/реквизитов. ([Btr Kassa][2], [betatransfer-merchant.com][3])

---

# Обработка кейсов статусов

* `success` → ставь **Paid** и немедленно выдавай доступ.
* `partial_payment` → ставь **Partial**, блокируй доступ, предложи доплату. ([merchant.betatransfer.io][5])
* `not_paid_timeout`/`not_paid` → ставь **Expired**/**Unpaid**, доступ не выдавать. ([Btr Kassa][4])
* Дублирующиеся callback’и → держи идемпотентность по `orderId`/`Transaction ID` (если запись уже **Paid** — просто отвечай `OK`).

---

# Безопасность

* Всегда валидируй подпись (и **сумму** с валютой) по данным твоего заказа. ([merchant.betatransfer.io][5])
* Отвечай ровно `OK` после успешной обработки — это «квитанция» для Betatransfer. ([merchant.betatransfer.io][5])
* Держи `secret_api_key` только на серверной стороне (в n8n — в Credentials/ENV).

---

# Готовые сниппеты для n8n (выдержки)

**Function (sign)**

```js
// In: JSON with prepared ordered fields
const secret = $env.BT_SECRET;
const data = {
  amount: $json.amount,
  currency: $json.currency,
  orderId: $json.orderId,
  paymentSystem: $json.paymentSystem,
  urlResult: $json.urlResult,
  urlSuccess: $json.urlSuccess,
  urlFail: $json.urlFail,
  redirect: '1',
  fullCallback: '1',
};
const concat = Object.values(data).join('') + secret;

const crypto = require('crypto');
const sign = crypto.createHash('md5').update(concat).digest('hex');

return [{ ...data, sign }];
```

**Function (validate callback)**

```js
const crypto = require('crypto');
const { sign, amount, orderId, status } = $json;
const expected = crypto.createHash('md5')
  .update(`${amount}${orderId}${$env.BT_SECRET}`)
  .digest('hex');

if (expected !== sign) {
  return [{ valid: false, msg: 'Invalid sign' }];
}
return [{ valid: true, status }];
```

**Respond to Webhook (OK)**

```json
{ "response": "OK" }
```

---

# Частые ошибки и как их поймать

* **Неверная подпись при создании**: чаще всего из‑за иного порядка полей/пробелов. Фиксируй порядок и не добавляй «пустые» поля в середину. ([merchant.betatransfer.io][5])
* **Не приходит IPN**: проверь, что `urlResult` публичен и доступен, а в заказе был `fullCallback=1`. ([Btr Kassa][4])
* **Дубль `orderId`**: API вернёт ошибку «уже существует». Генерируй уникальный `orderId`. ([merchant.betatransfer.io][5])

---

# Ссылки, на которые я опирался

* Примеры запросов/подписей/колбеков Betatransfer (PHP/Node, формула `md5` и тела IPN). ([merchant.betatransfer.io][5])
* Параметры создания платежа (`urlResult`, `redirect`, `fullCallback` и др.). ([Btr Kassa][4])
* Где взять ключи и как стартовать (FAQ). ([betatransfer-merchant.com][1])
* Про «тест»/проверку проекта перед подключением (нет отдельного sandbox-домена в публичных доках). ([Btr Kassa][2], [betatransfer-merchant.com][3])

---

Хочешь — могу сразу выдать минимальный **экспорт n8n workflow** (JSON), куда останется подставить твои `BT_PUBLIC`, `BT_SECRET`, `NOTION_DB_ID`, `NOTION_TOKEN` и URL‑ы.

[1]: https://betatransfer-merchant.com/en/faq-2/?utm_source=chatgpt.com "FAQ - BetaTransfer kassa - accepting payments will ..."
[2]: https://btr-kassa.net/en/terms-and-conditions?utm_source=chatgpt.com "Terms and Conditions - Betatransfer Kassa"
[3]: https://betatransfer-merchant.com/en/requirements/?utm_source=chatgpt.com "Requirements for the site"
[4]: https://btr-kassa.net/en/api "Betatransfer Kassa"
[5]: https://merchant.betatransfer.io/api/v-1-example "Betatransfer | "
