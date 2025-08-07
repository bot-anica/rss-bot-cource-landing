import { useRef } from 'react';
import { LESSONS } from '../utils/constants';
import { 
  Rocket, Bot, FileText, Database, Keyboard, Bell, 
  Shield, Server, BarChart, Zap, Settings, CheckCircle 
} from 'lucide-react';

export interface Lesson {
  id: number;
  title: string;
  description: string;
  result: string;
  icon: string;
}

export const useCourseProgram = () => {
  const swiperRef = useRef<any>(null);

  // Иконки для каждого урока
  const lessonIcons = [
    Rocket,      // 1. Подготовка окружения
    Bot,         // 2. Создание Telegram бота
    FileText,    // 3. Парсинг RSS лент
    Database,    // 4. Интеграция с базой данных
    Keyboard,    // 5. Обработка команд пользователя
    Bell,        // 6. Отправка уведомлений
    Shield,      // 7. Обработка ошибок и логирование
    Server,      // 8. Деплой на сервер
    BarChart,    // 9. Мониторинг и метрики
    Zap,         // 10. Оптимизация и масштабирование
    Settings,    // 11. Дополнительные функции
    CheckCircle  // 12. Финальная доработка
  ];

  const lessons = LESSONS as Lesson[];

  const breakpoints = {
    320: {
      spaceBetween: 16,
    },
    640: {
      spaceBetween: 20,
    },
    1024: {
      spaceBetween: 24,
    },
  };

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const setSwiperRef = (swiper: any) => {
    swiperRef.current = swiper;
  };

  return {
    lessons,
    lessonIcons,
    breakpoints,
    swiperRef,
    handlePrevSlide,
    handleNextSlide,
    setSwiperRef,
  };
}; 