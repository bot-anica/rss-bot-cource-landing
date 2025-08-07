import { FileText, Package, Video } from 'lucide-react';

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  tagline: string;
  icon: React.ComponentType<any>;
  features: string[];
  buttonText: string;
  buttonStyle: 'primary' | 'secondary';
  popular: boolean;
  originalPrice?: string;
}

export const PRICING_PLANS: PricingPlan[] = [
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
    buttonStyle: "secondary",
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
    buttonStyle: "primary",
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
    buttonStyle: "secondary",
    popular: false
  }
];