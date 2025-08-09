import { TrendingUp, Briefcase, Star, Rocket, User, Microscope, Monitor } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactElement } from 'react';
import React from 'react';

export interface Statistic {
  icon: ReactElement;
  number: string;
  label: string;
}

export interface Testimonial {
  icon: ReactElement;
  name: string;
  role: string;
  quote: string;
  achievement: string;
}

export interface SuccessStoriesData {
  title: string;
  subtitle: string;
  stats: Statistic[];
  testimonials: Testimonial[];
  cta: {
    emoji: string;
    title: string;
    description: string;
  };
}

export class SuccessStoriesService {
  private static instance: SuccessStoriesService;

  public static getInstance(): SuccessStoriesService {
    if (!SuccessStoriesService.instance) {
      SuccessStoriesService.instance = new SuccessStoriesService();
    }
    return SuccessStoriesService.instance;
  }

  public getSuccessStoriesData(): SuccessStoriesData {
    return {
      title: "Истории успеха наших студентов",
      subtitle: "Реальные результаты людей, которые прошли курс и применили знания на практике",
      stats: [
        {
          icon: React.createElement(TrendingUp, { className: "w-8 h-8", style: { color: 'rgb(239 68 68)' } }),
          number: "500+",
          label: "Студентов прошли курс"
        },
        {
          icon: React.createElement(Briefcase, { className: "w-8 h-8", style: { color: 'rgb(217 119 6)' } }),
          number: "89%",
          label: "Нашли работу или заказы"
        },
        {
          icon: React.createElement(Star, { className: "w-8 h-8", style: { color: 'rgb(234 179 8)' } }),
          number: "4.9/5",
          label: "Средняя оценка курса"
        },
        {
          icon: React.createElement(Rocket, { className: "w-8 h-8", style: { color: 'rgb(239 68 68)' } }),
          number: "200+",
          label: "Созданных ботов"
        }
      ],
      testimonials: [
        {
          icon: React.createElement(User, { className: "w-8 h-8", style: { color: 'rgb(234 179 8)' } }),
          name: "Алексей К.",
          role: "Junior Python Developer",
          quote: "Прошел курс за 2 месяца. Теперь у меня есть готовый проект в портфолио, который показываю на собеседованиях. Архитектура действительно профессиональная!",
          achievement: "Устроился Python разработчиком"
        },
        {
          icon: React.createElement(User, { className: "w-8 h-8", style: { color: 'rgb(234 179 8)' } }),
          name: "Мария С.",
          role: "Студентка ВУЗа",
          quote: "Курс помог понять, как работать с API и базами данных на практике. Лучше любого университетского курса — все по делу, без воды.",
          achievement: "Создала 3 собственных бота"
        },
        {
          icon: React.createElement(Briefcase, { className: "w-8 h-8", style: { color: 'rgb(217 119 6)' } }),
          name: "Дмитрий Р.",
          role: "Фрилансер",
          quote: "Взял несколько заказов на создание Telegram-ботов после курса. Клиенты довольны качеством и скоростью разработки. Окупился за первый месяц!",
          achievement: "Увеличил доход на 40%"
        },
        {
          icon: React.createElement(Microscope, { className: "w-8 h-8", style: { color: 'rgb(59 130 246)' } }),
          name: "Елена Т.",
          role: "QA Engineer",
          quote: "Решила перейти в разработку. Курс дал четкое понимание архитектуры проектов. Сейчас работаю Python разработчиком в стартапе.",
          achievement: "Сменила профессию"
        },
        {
          icon: React.createElement(Monitor, { className: "w-8 h-8", style: { color: 'rgb(107 114 128)' } }),
          name: "Игорь В.",
          role: "Системный администратор",
          quote: "Автоматизировал рабочие процессы с помощью ботов. Начальство довольно, получил повышение. Планирую создать еще несколько инструментов.",
          achievement: "Получил повышение"
        },
        {
          icon: React.createElement(User, { className: "w-8 h-8", style: { color: 'rgb(234 179 8)' } }),
          name: "Анна М.",
          role: "Начинающий разработчик",
          quote: "Первый реальный проект в моей карьере. Видеоуроки очень понятные, каждый шаг объяснен. Чувствую себя увереннее как разработчик.",
          achievement: "Первый проект в портфолио"
        }
      ],
      cta: {
        emoji: "🏆",
        title: "Проверено практикой",
        description: "Более 500 студентов уже создали своих ботов и применяют навыки в работе. Присоединяйтесь к сообществу успешных разработчиков!"
      }
    };
  }

  public validateData(data: SuccessStoriesData): boolean {
    return !!(
      data.title &&
      data.subtitle &&
      data.stats &&
      data.stats.length > 0 &&
      data.testimonials &&
      data.testimonials.length > 0 &&
      data.cta &&
      data.cta.title
    );
  }
}