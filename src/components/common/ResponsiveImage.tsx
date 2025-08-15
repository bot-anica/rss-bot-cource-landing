import type { FC } from 'react';

export interface ResponsiveImageProps {
  /** Базовое изображение (обязательно) */
  src: string;
  /** Альтернативный текст */
  alt: string;
  /** CSS классы */
  className?: string;
  /** Изображение для мобильных устройств (до 768px) */
  mobileSrc?: string;
  /** Изображение для планшетов (768px - 1024px) */
  tabletSrc?: string;
  /** Изображение для десктопа (от 1024px) */
  desktopSrc?: string;
  /** Изображение высокого разрешения для Retina дисплеев */
  retinaDesktopSrc?: string;
  /** Ленивая загрузка */
  loading?: 'lazy' | 'eager';
  /** Размеры изображения для оптимизации загрузки */
  sizes?: string;
}

/**
 * Компонент для адаптивных изображений с использованием тега <picture>
 * 
 * Преимущества тега <picture>:
 * 1. Автоматический выбор оптимального изображения для текущего экрана
 * 2. Поддержка разных форматов (WebP, AVIF, JPEG)
 * 3. Экономия трафика на мобильных устройствах
 * 4. Улучшение производительности
 * 5. Поддержка Retina дисплеев
 */
const ResponsiveImage: FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  mobileSrc,
  tabletSrc,
  desktopSrc,
  retinaDesktopSrc,
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
}) => {
  return (
    <picture className={className}>
      {/* Изображение для больших экранов с поддержкой Retina */}
      {retinaDesktopSrc && (
        <source
          media="(min-width: 1280px)"
          srcSet={retinaDesktopSrc}
          // sizes={sizes}
        />
      )}
      
      {/* Изображение для десктопа (от 1024px) */}
      {desktopSrc && (
        <source
          media="(min-width: 1024px) and (max-width: 1279px)"
          srcSet={desktopSrc}
          // sizes={sizes}
        />
      )}
      
      {/* Изображение для планшетов (768px - 1024px) */}
      {tabletSrc && (
        <source
          media="(min-width: 768px) and (max-width: 1023px)"
          srcSet={tabletSrc}
          // sizes={sizes}
        />
      )}
      
      {/* Изображение для мобильных устройств (до 768px) */}
      {mobileSrc && (
        <source
          media="(max-width: 767px)"
          srcSet={mobileSrc}
          // sizes={sizes}
        />
      )}
      
      {/* Fallback изображение (обязательно) */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        // sizes={sizes}
      />
    </picture>
  );
};

export default ResponsiveImage;