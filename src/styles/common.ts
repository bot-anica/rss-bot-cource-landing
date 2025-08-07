// Общие стили для переиспользования
export const commonStyles = {
  // Градиенты
  gradients: {
    primary: 'bg-gradient-to-r from-primary-pink to-primary-blue',
    secondary: 'bg-gradient-to-br from-primary-pink/5 via-primary-blue/5 to-primary-pink/5',
    card: 'bg-gradient-to-br from-white to-gray-50',
  },
  
  // Отступы
  spacing: {
    section: 'py-32',
    container: 'px-4 sm:px-6 lg:px-8',
    card: 'p-6 md:p-8',
  },
  
  // Размеры контейнеров
  containers: {
    default: 'max-w-7xl mx-auto',
    narrow: 'max-w-4xl mx-auto',
    wide: 'max-w-7xl mx-auto',
  },
  
  // Анимации
  animations: {
    fadeIn: 'transition-all duration-300',
    hover: 'hover:scale-105 transition-transform duration-300',
    smooth: 'transition-all duration-500 ease-in-out',
  },
  
  // Цвета
  colors: {
    text: {
      primary: 'text-primary-dark',
      secondary: 'text-gray-600',
      muted: 'text-gray-500',
      white: 'text-white',
    },
    background: {
      primary: 'bg-white',
      secondary: 'bg-gray-50',
      dark: 'bg-primary-dark',
    },
    border: {
      light: 'border-gray-200',
      medium: 'border-gray-300',
      accent: 'border-primary-pink/20',
    },
  },
  
  // Тени
  shadows: {
    light: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
    none: 'shadow-none',
  },
  
  // Скругления
  borderRadius: {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    full: 'rounded-full',
  },
} as const;

// Типы для стилей
export type CommonStyles = typeof commonStyles; 