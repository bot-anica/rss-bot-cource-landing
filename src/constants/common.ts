import { PartialSectionBGImagesProps } from "../core/types/sections";

// BACKGROUND IMAGES
import HeroBGExtraLarge from '../assets/images/heroBG/HeroBG-ExtraLarge.png';
import HeroBGLarge from '../assets/images/heroBG/HeroBG-Large.png';
import HeroBGMediumHorizontal from '../assets/images/heroBG/HeroBG-MediumHorizontal.png';
import HeroBGMediumVertical from '../assets/images/heroBG/HeroBG-MediumVertical.png';
import HeroBGSmallHorizontal from '../assets/images/heroBG/HeroBG-SmallHorizontal.png';
import HeroBGSmallVertical from '../assets/images/heroBG/HeroBG-SmallVertical.png';
import LeftSideBGExtraLarge from "../assets/images/leftSideBG/LeftSideBG-ExtraLarge.jpg"
import LeftSideBGLarge from "../assets/images/leftSideBG/LeftSideBG-Large.jpg"
import LeftSideBGMedium from "../assets/images/leftSideBG/LeftSideBG-Medium.jpg"
import LeftSideBGSmall from "../assets/images/leftSideBG/LeftSideBG-Small.jpg"
import RightSideBGExtraLarge from "../assets/images/rightSideBG/RightSideBG-ExtraLarge.jpg"
import RightSideBGLarge from "../assets/images/rightSideBG/RightSideBG-Large.jpg"
import RightSideBGMedium from "../assets/images/rightSideBG/RightSideBG-Medium.jpg"
import RightSideBGSmall from "../assets/images/rightSideBG/RightSideBG-Small.jpg"
import CourseProgramBGLarge from "../assets/images/courseProgramBG/CourseProgramBG-Large.jpg"
import CourseProgramBGMedium from "../assets/images/courseProgramBG/CourseProgramBG-Medium.jpg"
import CourseProgramBGSmall from "../assets/images/courseProgramBG/CourseProgramBG-Small.jpg"

export const SECTION_HEADERS = {
  whySpecial: {
    title: "Почему наш курс особенный?",
    subtitle: "Мы не просто учим создавать ботов — мы формируем профессиональное мышление разработчика",
  },
  features: {
    title: "Что вы получите",
    subtitle: "Комплексный подход к обучению, который даст вам все необходимые навыки",
  },
  pathToSuccess: {
    title: 'Как стать профессионалом в Telegram-ботах',
    subtitle: 'Следуйте нашему пути от идеи до продакшена',
  },
  problemSolution: {
    title: "Проблемы и решения",
    subtitle: "Большинство разработчиков сталкиваются с этими вызовами. Мы знаем, как их решить.",
  },
  successStories: {
    title: "Истории успеха наших студентов",
    subtitle: "Реальные результаты людей, которые прошли курс и применили знания на практике",
  },
  courseProgram: {
    title: "Программа курса",
    // subtitle: "12 практических уроков от создания бота до деплоя в продакшен",
    subtitle: "12 практических уроков, каждый из которых приводит к конкретному результату",
  },
  faq: {
    title: "Частые вопросы",
    subtitle: "Ответы на самые популярные вопросы о курсе",
  },
  pricingPlans: {
    title: "Выберите свой пакет",
    subtitle: "Все материалы предоставляются с доступом навсегда. Никаких подписок или скрытых платежей.",
  }
};

export const SECTION_BG_IMAGES: Record<string, PartialSectionBGImagesProps> = {
  hero: {
    topRight: {
      extraLarge: HeroBGExtraLarge,
      large: HeroBGLarge,
      medium: HeroBGMediumHorizontal,
      mediumVertical: HeroBGMediumVertical,
      small: HeroBGSmallHorizontal,
      smallVertical: HeroBGSmallVertical,
    },
  },
  problemSolution: {
    left: {
      small: LeftSideBGSmall,
      medium: LeftSideBGMedium,
      large: LeftSideBGLarge,
      extraLarge: LeftSideBGExtraLarge,
    },
    right: {
      small: RightSideBGSmall,
      medium: RightSideBGMedium,
      large: RightSideBGLarge,
      extraLarge: RightSideBGExtraLarge,
    }
  },
  whySpecial: {
    left: {
      small: LeftSideBGSmall,
      medium: LeftSideBGMedium,
      large: LeftSideBGLarge,
      extraLarge: LeftSideBGExtraLarge,
    },
    right: {
      small: RightSideBGSmall,
      medium: RightSideBGMedium,
      large: RightSideBGLarge,
      extraLarge: RightSideBGExtraLarge,
    }
  },
  courseProgram: {
    bottom: {
      small: CourseProgramBGSmall,
      medium: CourseProgramBGMedium,
      large: CourseProgramBGLarge,
    } 
  },
  popularCard: {
    bottom: {
      small: CourseProgramBGSmall,
    },
    topRight: {
      smallVertical: HeroBGSmallVertical,
    },
  }
};

// Глобальные настройки SEO для сайта
export const DEFAULT_SEO_CONFIG = {
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
export const PAGE_SEO_CONFIGS = {
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
