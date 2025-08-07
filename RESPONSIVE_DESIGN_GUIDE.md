# Руководство по адаптивному дизайну

## Обзор системы адаптивности

Проект использует расширенную систему breakpoints для обеспечения оптимального отображения на всех устройствах:

### Breakpoints
- **xs**: < 640px (мобильные телефоны)
- **sm**: 640px - 768px (большие телефоны)
- **md**: 768px - 1024px (планшеты)
- **lg**: 1024px - 1280px (малые десктопы)
- **xl**: 1280px - 1440px (средние десктопы)
- **2xl**: > 1440px (большие десктопы)

## Ключевые принципы

### 1. Mobile-First подход
- Начинаем с мобильной версии
- Добавляем стили для больших экранов
- Используем прогрессивное улучшение

### 2. Touch-Friendly элементы
- Минимальный размер 44px для интерактивных элементов
- Достаточные отступы между элементами
- Оптимизация для пальцевого ввода

### 3. Responsive типографика
- Адаптивные размеры шрифтов
- Оптимальная высота строк
- Читаемость на всех устройствах

## Компоненты и утилиты

### Контейнеры
```css
.container-responsive {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16;
}

.container-narrow {
  @apply max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12;
}
```

### Отступы секций
```css
.section-padding {
  @apply py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40;
}

.section-padding-sm {
  @apply py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32;
}
```

### Типографика
```css
.text-hero {
  @apply text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl;
}

.text-heading {
  @apply text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl;
}

.text-body {
  @apply text-sm sm:text-base md:text-lg lg:text-xl;
}
```

### Сетки
```css
.grid-responsive {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}

.grid-responsive-2 {
  @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3;
}
```

### Touch-friendly отступы
```css
.touch-spacing {
  @apply p-3 sm:p-4 md:p-6;
}

.touch-spacing-sm {
  @apply p-2 sm:p-3 md:p-4;
}
```

## Рекомендации по реализации

### 1. Использование компонентов
- Применяйте готовые responsive классы
- Избегайте хардкода размеров
- Используйте семантические имена классов

### 2. Оптимизация изображений
- Используйте `srcset` для разных размеров
- Оптимизируйте форматы (WebP, AVIF)
- Применяйте lazy loading

### 3. Производительность
- Минимизируйте количество медиа-запросов
- Используйте CSS Grid и Flexbox
- Оптимизируйте анимации для мобильных

### 4. Доступность
- Обеспечьте достаточный контраст
- Используйте семантическую разметку
- Поддерживайте навигацию с клавиатуры

## Тестирование

### Устройства для тестирования
- iPhone SE (375px)
- iPhone 12/13 (390px)
- Samsung Galaxy (360px)
- iPad (768px)
- iPad Pro (1024px)
- MacBook (1280px)
- iMac (1440px)
- Ultra-wide (1920px+)

### Инструменты
- Chrome DevTools
- Firefox Responsive Design Mode
- BrowserStack
- LambdaTest

## Примеры использования

### Hero секция
```tsx
<div className="container-responsive text-center">
  <h1 className="text-hero font-bold text-primary-dark">
    Заголовок
  </h1>
  <p className="text-body text-gray-600 max-w-2xl mx-auto">
    Описание
  </p>
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
    <Button className="w-full sm:w-auto touch-spacing">
      Кнопка
    </Button>
  </div>
</div>
```

### Карточки
```tsx
<div className="grid-responsive gap-6 sm:gap-8">
  {items.map(item => (
    <Card className="touch-spacing">
      <h3 className="text-heading">{item.title}</h3>
      <p className="text-body">{item.description}</p>
    </Card>
  ))}
</div>
```

## Чек-лист адаптивности

### Мобильные устройства
- [ ] Все элементы доступны для касания (44px+)
- [ ] Текст читаем без зума
- [ ] Навигация оптимизирована
- [ ] Формы удобны для заполнения
- [ ] Изображения адаптивны

### Планшеты
- [ ] Эффективное использование пространства
- [ ] Оптимальная сетка (2-3 колонки)
- [ ] Удобная навигация
- [ ] Читаемые размеры шрифтов

### Десктопы
- [ ] Максимальная ширина контента
- [ ] Оптимальные отступы
- [ ] Эффективная сетка
- [ ] Hover эффекты

### Большие экраны
- [ ] Контент не растягивается
- [ ] Оптимальные размеры элементов
- [ ] Эффективное использование пространства
- [ ] Читаемость сохранена

## Полезные ресурсы

- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Mobile-First Design](https://www.lukew.com/ff/entry.asp?933)
