import {
  Target,
  Building2,
  Wrench,
  BookOpen,
  Rocket,
  Briefcase,
  Clock,
  Laptop,
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Star,
  Heart,
  TrendingUp,
  Trophy,
  User,
  Microscope,
  Monitor,
  Bot,
  FileText,
  Database,
  Keyboard,
  Bell,
  Shield,
  Server,
  BarChart,
  Settings,
  CheckCircle,
  Video,
  Package,
} from "lucide-react";

import renderDashboard from '../assets/images/render-dashboard.png';
import telegramBot from '../assets/images/telegram-bot.png';
import { ButtonIconPosition, ButtonSize, ButtonVariant } from "../types/common";

export const CURRENCIES = {
  USD: { symbol: "$", name: "доллары США" },
  EUR: { symbol: "€", name: "евро" },
  RUB: { symbol: "₽", name: "рубли" },
  UAH: { symbol: "₴", name: "гривны" },
  USDT: { symbol: "", name: "USDT (TRC20)" },
};

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

export const PRICING_PLANS = [
  {
    id: "notes",
    title: "Конспект курса",
    price: "$10",
    tagline: "Подробные заметки и материалы",
    icon: FileText,
    features: [
      "Подробные заметки по всем 12 урокам",
      "Примеры кода и объяснения",
      "Чек-листы и задания",
      "Готовые файлы для скачивания",
      "Доступ навсегда"
    ],
    buttonText: "Купить конспект",
    buttonStyle: ButtonVariant.SECONDARY,
    popular: false
  },
  {
    id: "full",
    title: "Видеокурс + Конспект",
    price: "$15",
    originalPrice: "$20",
    tagline: "Полный пакет со скидкой $5",
    icon: Package,
    features: [
      "12 видеоуроков (~6 часов)",
      "Подробные конспекты",
      "Экранные записи всех процессов",
      "Пошаговые инструкции",
      "Готовый проект в конце",
      "Готовые файлы для скачивания",
      "Доступ навсегда"
    ],
    buttonText: "Начать обучение",
    buttonStyle: ButtonVariant.PRIMARY,
    popular: true
  },
  {
    id: "video",
    title: "Только видеокурс",
    price: "$10",
    tagline: "Видеоуроки с практикой",
    icon: Video,
    features: [
      "12 видеоуроков (~6 часов)",
      "Экранные записи всех процессов",
      "Пошаговые инструкции",
      "Готовый проект в конце",
      "Доступ навсегда"
    ],
    buttonText: "Купить видеокурс",
    buttonStyle: ButtonVariant.SECONDARY,
    popular: false
  }
];

export const LESSONS = [
  {
    id: 1,
    title: "Подготовка окружения и структуры проекта",
    description:
      "Создание виртуального окружения, настройка структуры проекта, управление зависимостями",
    result: "Готовое окружение для разработки",
    icon: Rocket,
  },
  {
    id: 2,
    title: "Создание Telegram бота и настройка webhook",
    description:
      "Регистрация бота в BotFather, настройка webhook для получения обновлений",
    result: "Работающий бот с webhook",
    icon: Bot,
  },
  {
    id: 3,
    title: "Парсинг RSS лент",
    description: "Работа с RSS лентами, извлечение данных, обработка ошибок",
    result: "Функция парсинга RSS",
    icon: FileText,
  },
  {
    id: 4,
    title: "Интеграция с базой данных",
    description: "Настройка SQLite, создание таблиц, CRUD операции",
    result: "База данных для хранения данных",
    icon: Database,
  },
  {
    id: 5,
    title: "Обработка команд пользователя",
    description: "Создание команд, обработка текстовых сообщений",
    result: "Интерактивный бот",
    icon: Keyboard,
  },
  {
    id: 6,
    title: "Отправка уведомлений",
    description: "Автоматическая отправка новых статей пользователям",
    result: "Система уведомлений",
    icon: Bell,
  },
  {
    id: 7,
    title: "Обработка ошибок и логирование",
    description: "Система логирования, обработка исключений",
    result: "Надежный бот",
    icon: Shield,
  },
  {
    id: 8,
    title: "Деплой на сервер",
    description: "Настройка сервера, развертывание приложения",
    result: "Бот в продакшене",
    icon: Server,
  },
  {
    id: 9,
    title: "Мониторинг и метрики",
    description: "Отслеживание производительности, метрики использования",
    result: "Мониторинг бота",
    icon: BarChart,
  },
  {
    id: 10,
    title: "Оптимизация и масштабирование",
    description: "Улучшение производительности, подготовка к росту",
    result: "Оптимизированный бот",
    icon: Zap,
  },
  {
    id: 11,
    title: "Дополнительные функции",
    description: "Фильтры, поиск, персонализация",
    result: "Расширенный функционал",
    icon: Settings,
  },
  {
    id: 12,
    title: "Финальная доработка и тестирование",
    description: "Тестирование, исправление багов, финальная полировка",
    result: "Готовый к продакшену бот",
    icon: CheckCircle,
  },
];

export const STEPS_TO_SUCCESS = [
  {
    id: 1,
    title: "Идея и планирование",
    description: "Определение целей и архитектуры проекта",
    result: "Четкий план разработки",
  },
  {
    id: 2,
    title: "Разработка MVP",
    description: "Создание базовой функциональности бота",
    result: "Работающий прототип",
  },
  {
    id: 3,
    title: "Тестирование и отладка",
    description: "Проверка работоспособности и исправление ошибок",
    result: "Стабильная версия",
  },
  {
    id: 4,
    title: "Деплой и запуск",
    description: "Размещение на сервере и настройка автоматизации",
    result: "Production-ready бот",
  },
];

export const WHY_SPECIAL_POINTS = [
  {
    icon: Target,
    color: "#EF4444",
    title: "Практический подход",
    description:
      "Каждый урок заканчивается рабочим результатом. Никакой воды — только практика и реальные навыки.",
    bullets: [
      "Реальный проект от идеи до продакшена",
      "Готовый код для портфолио",
      "Применимые навыки сразу после курса",
    ],
  },
  {
    icon: Building2,
    color: "#D97706",
    title: "Профессиональная архитектура",
    description:
      "Учитесь создавать не просто рабочий код, а масштабируемые решения по принципам SOLID.",
    bullets: [
      "Модульная структура проекта",
      "Поддержка множественных источников",
      "Легкое расширение функциональности",
    ],
  },
  {
    icon: Wrench,
    color: "#3272C8",
    title: "Современные технологии",
    description:
      "Работаем с актуальным стеком: Python 3.11+, PostgreSQL, Flask, GitHub Actions.",
    bullets: [
      "Последние версии библиотек",
      "Облачные сервисы (neon.tech, Render.com)",
      "CI/CD автоматизация",
    ],
  },
  {
    icon: BookOpen,
    color: "#22C55E",
    title: "Глубокое понимание",
    description:
      "Не просто копируете код, а понимаете каждое решение. Сравнения с альтернативными подходами.",
    bullets: [
      "Объяснение каждого решения",
      "Принципы чистой архитектуры",
      "Почему именно так, а не иначе",
    ],
  },
  {
    icon: Rocket,
    color: "#EF4444",
    title: "Готовность к продакшену",
    description:
      "От локальной разработки до работающего в облаке бота с мониторингом и автоматизацией.",
    bullets: [
      "Деплой в облаке 24/7",
      "Мониторинг и логирование",
      "Автоматические обновления",
    ],
  },
  {
    icon: Briefcase,
    color: "#D97706",
    title: "Портфолио и карьера",
    description:
      "Получите готовый проект с профессиональной архитектурой для демонстрации работодателям.",
    bullets: [
      "Реальный проект с GitHub",
      "Документация и тесты",
      "Применимые навыки для работы",
    ],
  },
];

export const STATS = [
  { number: "12", label: "Практических уроков" },
  { number: "6+", label: "Часов видеоконтента" },
  { number: "100+", label: "Примеров кода" },
  { number: "∞", label: "Доступ навсегда" },
];

export const FEATURES = [
  {
    icon: Rocket,
    iconColor: "text-red-600",
    title: "12 практических уроков",
    subtitle: "Пошаговое обучение",
    description: "От основ до продвинутых техник разработки Telegram-ботов",
  },
  {
    icon: Clock,
    iconColor: "text-blue-600",
    title: "6+ часов контента",
    subtitle: "Глубокое погружение",
    description: "Детальные объяснения и практические примеры",
  },
  {
    icon: Laptop,
    iconColor: "text-green-600",
    title: "Готовый проект",
    subtitle: "Для портфолио",
    description: "Полнофункциональный бот, готовый к деплою",
  },
];

export const HERO = {
  title: {
    main: 'Создайте профессионального новостного',
    highlight: 'Telegram-бота'
  },
  subtitle: 'Научитесь создавать профессиональные боты с нуля и получите готовый проект для портфолио',
  benefits: [
    'Доступ навсегда',
    'Готовые файлы',
    'Практические результаты'
  ],
  cta: {
    primary: {
      text: 'Начать обучение',
      link: '#pricing',
      buttonVariant: ButtonVariant.PRIMARY,
      buttonSize: ButtonSize.LG,
      buttonIcon: ArrowRight,
      buttonIconColor: 'white',
      buttonIconPosition: ButtonIconPosition.RIGHT,
    },
    secondary: {
      text: 'Смотреть программу',
      link: '#course',
      buttonVariant: ButtonVariant.SECONDARY,
      buttonSize: ButtonSize.LG,
      buttonIcon: Play,
      buttonIconColor: 'primary-blue/30',
      buttonIconPosition: ButtonIconPosition.LEFT,
    }
  }
}

export const PATH_TO_SUCCESS_IMAGES = {
  renderDashboard,
  telegramBot,
}

export const PROBLEM_SOLUTION_ITEMS = [
  {
    problem: "Сложная архитектура",
    solution: "Профессиональная архитектура",
    icon: Sparkles
  },
  {
    problem: "Отсутствие практики",
    solution: "Пошаговый подход",
    icon: Zap
  },
  {
    problem: "MVP-ловушка",
    solution: "Production-ready код",
    icon: Star
  },
  {
    problem: "Отсутствие интеграций",
    solution: "Современные технологии",
    icon: Heart
  }
]

export const PROBLEM_SOLUTION_CTA_BLOCK = {
  title: "Готовы решить эти проблемы?",
  subtitle: "Присоединяйтесь к курсу и создайте профессионального Telegram-бота",
  cta: {
    text: "Начать обучение",
    link: "#pricing",
    buttonVariant: ButtonVariant.SECONDARY,
    buttonSize: ButtonSize.SM,
    buttonIcon: ArrowRight,
    buttonIconPosition: ButtonIconPosition.RIGHT,
  }
}

export const STATISTIC = [
  {
    icon: TrendingUp,
    iconColor: '#EF4444',
    number: "500+",
    label: "Студентов прошли курс",
  },
  {
    icon: Briefcase,
    iconColor: '#D97706',
    number: "89%",
    label: "Нашли работу или заказы",
  },
  {
    icon: Star,
    iconColor: '#EAB308',
    number: "4.9/5",
    label: "Средняя оценка курса",
  },
  {
    icon: Rocket,
    iconColor: '#EF4444',
    number: "200+",
    label: "Созданных ботов",
  }
]

export const TESTIMONIALS = [
  {
    icon: User,
    iconColor: '#EAB308',
    name: "Алексей К.",
    role: "Junior Python Developer",
    quote: "Прошел курс за 2 месяца. Теперь у меня есть готовый проект в портфолио, который показываю на собеседованиях. Архитектура действительно профессиональная!",
    achievement: "Устроился Python разработчиком"
  },
  {
    icon: User,
    iconColor: '#EAB308',
    name: "Мария С.",
    role: "Студентка ВУЗа",
    quote: "Курс помог понять, как работать с API и базами данных на практике. Лучше любого университетского курса — все по делу, без воды.",
    achievement: "Создала 3 собственных бота"
  },
  {
    icon: Briefcase,
    iconColor: '#D97706',
    name: "Дмитрий Р.",
    role: "Фрилансер",
    quote: "Взял несколько заказов на создание Telegram-ботов после курса. Клиенты довольны качеством и скоростью разработки. Окупился за первый месяц!",
    achievement: "Увеличил доход на 40%"
  },
  {
    icon: Microscope,
    iconColor: '#3B82F6',
    name: "Елена Т.",
    role: "QA Engineer",
    quote: "Решила перейти в разработку. Курс дал четкое понимание архитектуры проектов. Сейчас работаю Python разработчиком в стартапе.",
    achievement: "Сменила профессию"
  },
  {
    icon: Monitor,
    iconColor: '#6B7280',
    name: "Игорь В.",
    role: "Системный администратор",
    quote: "Автоматизировал рабочие процессы с помощью ботов. Начальство довольно, получил повышение. Планирую создать еще несколько инструментов.",
    achievement: "Получил повышение"
  },
  {
    icon: User,
    iconColor: '#EAB308',
    name: "Анна М.",
    role: "Начинающий разработчик",
    quote: "Первый реальный проект в моей карьере. Видеоуроки очень понятные, каждый шаг объяснен. Чувствую себя увереннее как разработчик.",
    achievement: "Первый проект в портфолио"
  }
]

export const SUCCESS_STORIES_CTA_BLOCK = {
  text: "Проверено практикой",
  description: "Более 500 студентов уже создали своих ботов и применяют навыки в работе. Присоединяйтесь к сообществу успешных разработчиков!",
  icon: Trophy,
  iconColor: '#EAB308',
}
