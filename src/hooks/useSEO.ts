import { useMemo } from 'react';
import type { SEOHeadProps } from '../components/common/SEOHead';

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
}

// Глобальные настройки SEO для сайта
const DEFAULT_SEO_CONFIG = {
  title: undefined as string | undefined,
  siteName: 'Курс по созданию Telegram-ботов',
  description: 'Изучите создание Telegram-ботов с нуля. Практический курс с реальными проектами, автоматизацией и монетизацией. Получите навыки программирования и создайте своего первого бота.',
  keywords: 'telegram бот, курс программирования, python, автоматизация, чат-бот, разработка, обучение, программирование с нуля',
  image: '/og-cover.jpg',
  url: undefined as string | undefined,
  locale: 'ru_RU',
  twitterCard: 'summary_large_image' as const,
  type: 'website' as 'website' | 'article',
  noIndex: undefined as boolean | undefined
};

// Предустановленные конфигурации для разных страниц
const PAGE_SEO_CONFIGS = {
  home: {
    title: 'Создание Telegram-ботов с нуля',
    description: 'Изучите создание Telegram-ботов с нуля. Практический курс с реальными проектами, автоматизацией и монетизацией. Получите навыки программирования и создайте своего первого бота.',
    keywords: 'telegram бот, курс программирования, python, автоматизация, чат-бот, разработка, обучение, программирование с нуля'
  },
  payment: {
    title: 'Оплата курса',
    description: 'Выберите подходящий тариф и начните изучение создания Telegram-ботов. Безопасная оплата, мгновенный доступ к материалам.',
    keywords: 'оплата курса, telegram бот, тарифы, обучение программированию',
    noIndex: true // Скрываем страницу оплаты от индексации
  },
};

export const useSEO = (pageKey?: keyof typeof PAGE_SEO_CONFIGS, customConfig?: SEOConfig): SEOHeadProps => {
  return useMemo(() => {
    // Базовая конфигурация
    let config = { ...DEFAULT_SEO_CONFIG };
    
    // Применяем предустановленную конфигурацию для страницы
    if (pageKey && PAGE_SEO_CONFIGS[pageKey]) {
      config = { ...config, ...PAGE_SEO_CONFIGS[pageKey] };
    }
    
    // Применяем пользовательскую конфигурацию
    if (customConfig) {
      config = { ...config, ...customConfig };
    }
    
    return {
      title: config.title,
      description: config.description,
      keywords: config.keywords,
      image: config.image,
      url: config.url,
      type: config.type,
      siteName: config.siteName,
      locale: config.locale,
      twitterCard: config.twitterCard,
      noIndex: config.noIndex
    };
  }, [pageKey, customConfig]);
};

// Хук для динамического обновления метаданных
export const useDynamicSEO = () => {
  const updateSEO = (config: SEOConfig) => {
    // Эта функция может быть использована для динамического обновления SEO
    // в зависимости от состояния приложения
    return useSEO(undefined, config);
  };
  
  return { updateSEO };
};