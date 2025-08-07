# Telegram Bot Course Landing Page

Лендинг для продажи курса по созданию Telegram-бота для новостей. Проект построен на React + Vite с использованием TypeScript.

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр сборки
npm run preview
```

## Настройка оплаты

Проект использует связку n8n + NowPayments для обработки платежей. Для настройки:

1. Создайте файл `.env.local` на основе `.env.example`
2. Укажите URL вашего n8n webhook в переменной `VITE_N8N_WEBHOOK_URL`
3. Настройте n8n для работы с NowPayments API

### Настройка n8n

1. Установите и запустите [n8n](https://n8n.io/)
2. Создайте новый рабочий процесс (workflow)
3. Импортируйте пример конфигурации из файла `n8n-workflow-example.json`
4. Замените `YOUR_NOWPAYMENTS_API_KEY` на ваш API ключ от NowPayments
5. Настройте URL для обратных вызовов (callbacks)
6. Активируйте рабочий процесс

### Структура webhook для n8n

Webhook должен принимать параметр `tariff` и возвращать JSON с полем `invoice_url`:

```json
{
  "invoice_url": "https://nowpayments.io/payment/...",
  "invoice_id": "12345",
  "status": "success"
}
```

### Тарифы

В системе настроены следующие тарифы:

- `notes` - Конспект курса ($10)
- `full` - Видеокурс + Конспект ($15)
- `video` - Только видеокурс ($10)

## Технологии

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion для анимаций
- React Router для навигации
