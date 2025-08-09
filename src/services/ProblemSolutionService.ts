import { Lightbulb, Sparkles, Zap, Star, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ProblemSolutionItem {
  problem: string;
  solution: string;
  icon: LucideIcon;
}

export interface ProblemSolutionData {
  title: string;
  subtitle: string;
  items: ProblemSolutionItem[];
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    link: string;
  };
}

export class ProblemSolutionService {
  private static instance: ProblemSolutionService;

  public static getInstance(): ProblemSolutionService {
    if (!ProblemSolutionService.instance) {
      ProblemSolutionService.instance = new ProblemSolutionService();
    }
    return ProblemSolutionService.instance;
  }

  public getProblemSolutionData(): ProblemSolutionData {
    return {
      title: "Проблемы и решения",
      subtitle: "Большинство разработчиков сталкиваются с этими вызовами. Мы знаем, как их решить.",
      items: [
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
          problem: "Интеграции",
          solution: "Современные технологии",
          icon: Heart
        }
      ],
      cta: {
        title: "Готовы решить эти проблемы?",
        subtitle: "Присоединяйтесь к курсу и создайте профессионального Telegram-бота",
        buttonText: "Начать обучение",
        link: "#pricing"
      }
    };
  }

  public validateData(data: ProblemSolutionData): boolean {
    return !!(
      data.title &&
      data.subtitle &&
      data.items &&
      data.items.length > 0 &&
      data.cta &&
      data.cta.title &&
      data.cta.buttonText
    );
  }
}