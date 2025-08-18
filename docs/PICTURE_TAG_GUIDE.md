# Руководство по использованию тега `<picture>` для адаптивных изображений

## Что такое тег `<picture>`?

Тег `<picture>` - это HTML5 элемент, который позволяет предоставить несколько источников изображений для разных условий отображения. Браузер автоматически выбирает наиболее подходящее изображение на основе размера экрана, плотности пикселей и поддерживаемых форматов.

## Основные преимущества

### 🚀 Производительность
- **Экономия трафика**: Мобильные устройства загружают меньшие изображения
- **Быстрая загрузка**: Оптимальный размер для каждого устройства
- **Современные форматы**: Поддержка WebP, AVIF с fallback на JPEG/PNG

### 📱 Адаптивность
- **Responsive design**: Разные изображения для разных экранов
- **Art direction**: Различная композиция для мобильных и десктопа
- **Retina поддержка**: Четкие изображения на высокоплотных дисплеях

### 🎯 UX улучшения
- **Автоматический выбор**: Браузер сам выбирает лучший вариант
- **Graceful degradation**: Fallback для старых браузеров
- **Lazy loading**: Отложенная загрузка изображений

## Базовая структура

```html
<picture>
  <!-- Источники в порядке приоритета -->
  <source media="(условие)" srcset="изображение" type="тип">
  <source media="(условие)" srcset="изображение" type="тип">
  
  <!-- Обязательный fallback -->
  <img src="fallback.jpg" alt="Описание">
</picture>
```

## Практические примеры

### 1. Адаптивные размеры

```tsx
// Разные размеры для разных экранов
<picture>
  <source 
    media="(min-width: 1024px)" 
    srcSet="/images/hero-large.webp" 
  />
  <source 
    media="(min-width: 768px)" 
    srcSet="/images/hero-medium.webp" 
  />
  <source 
    media="(max-width: 767px)" 
    srcSet="/images/hero-small.webp" 
  />
  <img src="/images/hero-fallback.jpg" alt="Главное изображение" />
</picture>
```

### 2. Поддержка форматов

```tsx
// Современные форматы с fallback
<picture>
  {/* AVIF - самый современный формат */}
  <source srcSet="image.avif" type="image/avif" />
  
  {/* WebP - хорошая поддержка */}
  <source srcSet="image.webp" type="image/webp" />
  
  {/* JPEG - универсальный fallback */}
  <img src="image.jpg" alt="Описание" />
</picture>
```

### 3. Retina дисплеи

```tsx
// Поддержка высокой плотности пикселей
<picture>
  <source 
    media="(min-width: 1024px)" 
    srcSet="desktop.webp 1x, desktop@2x.webp 2x" 
  />
  <source 
    media="(max-width: 767px)" 
    srcSet="mobile.webp 1x, mobile@2x.webp 2x" 
  />
  <img src="fallback.jpg" alt="Изображение" />
</picture>
```

### 4. Art Direction

```tsx
// Разная композиция для разных экранов
<picture>
  {/* Горизонтальное изображение для десктопа */}
  <source 
    media="(min-width: 1024px)" 
    srcSet="banner-horizontal.webp" 
  />
  
  {/* Квадратное для планшетов */}
  <source 
    media="(min-width: 768px)" 
    srcSet="banner-square.webp" 
  />
  
  {/* Вертикальное для мобильных */}
  <source 
    media="(max-width: 767px)" 
    srcSet="banner-vertical.webp" 
  />
  
  <img src="banner-default.jpg" alt="Баннер" />
</picture>
```

## React компонент ResponsiveImage

В проекте создан компонент `ResponsiveImage`, который упрощает использование тега `<picture>`:

```tsx
import ResponsiveImage from '../components/common/ResponsiveImage';

// Простое использование
<ResponsiveImage
  src="fallback.jpg"
  alt="Описание изображения"
  className="w-full h-auto"
/>

// Полная конфигурация
<ResponsiveImage
  src="fallback.jpg"
  mobileSrc="mobile.webp"
  tabletSrc="tablet.webp"
  desktopSrc="desktop.webp"
  retinaDesktopSrc="desktop@2x.webp"
  alt="Адаптивное изображение"
  className="w-full h-auto rounded-lg"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

## Атрибуты и их значения

### `media`
Определяет условия, при которых используется источник:
- `(max-width: 767px)` - мобильные устройства
- `(min-width: 768px) and (max-width: 1023px)` - планшеты
- `(min-width: 1024px)` - десктоп
- `(-webkit-min-device-pixel-ratio: 2)` - Retina дисплеи

### `srcset`
Список изображений с их характеристиками:
- `image.webp 1x` - обычное разрешение
- `image@2x.webp 2x` - двойное разрешение
- `image-small.webp 480w` - ширина изображения

### `sizes`
Подсказка браузеру о размере изображения:
- `100vw` - на всю ширину viewport
- `50vw` - половина ширины viewport
- `(max-width: 768px) 100vw, 50vw` - условные размеры

### `type`
MIME-тип изображения:
- `image/avif` - AVIF формат
- `image/webp` - WebP формат
- `image/jpeg` - JPEG формат

## Лучшие практики

### 📏 Размеры изображений
```
Мобильные:  320px - 768px ширина
Планшеты:   768px - 1024px ширина
Десктоп:    1024px+ ширина
Retina:     2x от базового размера
```

### 🗂️ Структура файлов
```
/images/
  ├── hero/
  │   ├── hero-mobile.webp     (480px)
  │   ├── hero-mobile@2x.webp  (960px)
  │   ├── hero-tablet.webp     (768px)
  │   ├── hero-tablet@2x.webp  (1536px)
  │   ├── hero-desktop.webp    (1200px)
  │   ├── hero-desktop@2x.webp (2400px)
  │   └── hero-fallback.jpg    (1200px)
```

### ⚡ Оптимизация производительности

1. **Порядок источников**: От самого специфичного к общему
2. **Форматы**: AVIF → WebP → JPEG/PNG
3. **Lazy loading**: Используйте `loading="lazy"` для изображений вне viewport
4. **Preload**: Для критических изображений используйте `<link rel="preload">`
5. **Sizes**: Точно указывайте размеры для лучшего выбора изображения

### 🎨 Art Direction рекомендации

- **Мобильные**: Вертикальная ориентация, крупные элементы
- **Планшеты**: Квадратная или слегка горизонтальная
- **Десктоп**: Горизонтальная ориентация, детализированные изображения

### 🔧 Инструменты для оптимизации

- **Squoosh**: Онлайн сжатие изображений
- **ImageOptim**: Оптимизация для macOS
- **Sharp**: Node.js библиотека для обработки
- **Webpack**: Автоматическая оптимизация при сборке

## Поддержка браузерами

| Браузер | Поддержка |
|---------|----------|
| Chrome  | ✅ 38+   |
| Firefox | ✅ 38+   |
| Safari  | ✅ 9.1+  |
| Edge    | ✅ 13+   |
| IE      | ❌       |

## Fallback для старых браузеров

Для браузеров без поддержки `<picture>` используется тег `<img>` внутри `<picture>`. Также можно добавить polyfill:

```html
<script>
  // Простая проверка поддержки
  if (!window.HTMLPictureElement) {
    // Загрузить polyfill
    document.write('<script src="picturefill.min.js"><\/script>');
  }
</script>
```

## Примеры из проекта

В проекте тег `<picture>` используется в:

1. **Hero секция** (`src/components/sections/Hero/index.tsx`)
2. **Компонент ResponsiveImage** (`src/components/common/ResponsiveImage.tsx`)
3. **Примеры использования** (`src/examples/ResponsiveImageExample.tsx`)

## Заключение

Тег `<picture>` - мощный инструмент для создания адаптивных и производительных веб-приложений. Правильное использование позволяет:

- Сократить время загрузки на 30-50%
- Улучшить пользовательский опыт
- Поддержать все типы устройств
- Использовать современные форматы изображений

Используйте созданный компонент `ResponsiveImage` для упрощения работы с адаптивными изображениями в React приложениях.