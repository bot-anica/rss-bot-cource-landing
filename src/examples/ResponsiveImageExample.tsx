import type { FC } from 'react';
import ResponsiveImage from '../components/common/ResponsiveImage';
import HeroPreview from '../assets/images/HeroPreview.gif';

/**
 * Пример использования ResponsiveImage компонента
 * 
 * Этот файл демонстрирует различные способы использования тега <picture>
 * для создания адаптивных изображений
 */

const ResponsiveImageExample: FC = () => {
  return (
    <div className="space-y-8 p-8">
      <h1 className="text-3xl font-bold mb-8">Примеры использования тега &lt;picture&gt;</h1>
      
      {/* Пример 1: Базовое использование */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Базовое использование</h2>
        <p className="text-gray-600 mb-4">
          Простейший случай - одно изображение с fallback
        </p>
        <ResponsiveImage
          src={HeroPreview}
          alt="Превью курса"
          className="w-64 h-auto rounded-lg shadow-md"
        />
      </section>

      {/* Пример 2: Разные изображения для разных экранов */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">2. Адаптивные изображения</h2>
        <p className="text-gray-600 mb-4">
          Разные изображения для мобильных, планшетов и десктопа
        </p>
        <ResponsiveImage
          src={HeroPreview} // fallback
          mobileSrc="/images/hero-mobile.webp" // для мобильных (до 768px)
          tabletSrc="/images/hero-tablet.webp" // для планшетов (768-1024px)
          desktopSrc="/images/hero-desktop.webp" // для десктопа (от 1024px)
          retinaDesktopSrc="/images/hero-desktop@2x.webp" // для Retina дисплеев
          alt="Адаптивное изображение курса"
          className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
        />
      </section>

      {/* Пример 3: Ручное использование тега picture */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">3. Ручное использование &lt;picture&gt;</h2>
        <p className="text-gray-600 mb-4">
          Прямое использование тега picture с полным контролем
        </p>
        <picture>
          {/* WebP формат для современных браузеров */}
          <source
            media="(min-width: 1024px)"
            srcSet="/images/hero-large.webp 1x, /images/hero-large@2x.webp 2x"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/hero-medium.webp 1x, /images/hero-medium@2x.webp 2x"
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/images/hero-small.webp 1x, /images/hero-small@2x.webp 2x"
            type="image/webp"
          />
          
          {/* JPEG fallback для старых браузеров */}
          <source
            media="(min-width: 1024px)"
            srcSet="/images/hero-large.jpg 1x, /images/hero-large@2x.jpg 2x"
            type="image/jpeg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/hero-medium.jpg 1x, /images/hero-medium@2x.jpg 2x"
            type="image/jpeg"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/images/hero-small.jpg 1x, /images/hero-small@2x.jpg 2x"
            type="image/jpeg"
          />
          
          {/* Fallback img тег */}
          <img
            src={HeroPreview}
            alt="Изображение с поддержкой разных форматов"
            className="w-full max-w-2xl h-auto rounded-lg shadow-md"
            loading="lazy"
          />
        </picture>
      </section>

      {/* Пример 4: Art Direction */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Art Direction (разная композиция)</h2>
        <p className="text-gray-600 mb-4">
          Разные изображения с разной композицией для разных экранов
        </p>
        <picture>
          {/* Горизонтальное изображение для десктопа */}
          <source
            media="(min-width: 1024px)"
            srcSet="/images/banner-horizontal.webp"
          />
          {/* Квадратное изображение для планшетов */}
          <source
            media="(min-width: 768px)"
            srcSet="/images/banner-square.webp"
          />
          {/* Вертикальное изображение для мобильных */}
          <source
            media="(max-width: 767px)"
            srcSet="/images/banner-vertical.webp"
          />
          <img
            src={HeroPreview}
            alt="Баннер с разной композицией"
            className="w-full h-auto rounded-lg shadow-md"
            loading="lazy"
          />
        </picture>
      </section>

      {/* Рекомендации */}
      <section className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">💡 Рекомендации по использованию</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>1. Размеры файлов:</strong> Мобильные изображения должны быть меньше по размеру</li>
          <li><strong>2. Форматы:</strong> Используйте WebP/AVIF для лучшего сжатия</li>
          <li><strong>3. Retina дисплеи:</strong> Предоставляйте изображения в 2x разрешении</li>
          <li><strong>4. Lazy loading:</strong> Используйте loading="lazy" для изображений вне viewport</li>
          <li><strong>5. Sizes атрибут:</strong> Помогает браузеру выбрать оптимальное изображение</li>
          <li><strong>6. Alt текст:</strong> Всегда добавляйте описательный alt текст</li>
          <li><strong>7. Fallback:</strong> Обязательно включайте img тег как fallback</li>
        </ul>
      </section>
    </div>
  );
};

export default ResponsiveImageExample;