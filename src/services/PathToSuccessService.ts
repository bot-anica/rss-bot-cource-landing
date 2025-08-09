import { STEPS_TO_SUCCESS } from '../utils/constants';
import renderDashboard from '../assets/images/render-dashboard.png';
import telegramBot from '../assets/images/telegram-bot.png';

export interface PathToSuccessStep {
  id: number;
  title: string;
  description: string;
}

export interface PathToSuccessData {
  header: {
    title: string;
    description: string;
  };
  steps: PathToSuccessStep[];
  images: {
    renderDashboard: string;
    telegramBot: string;
  };
}

export class PathToSuccessService {
  private static instance: PathToSuccessService;

  private constructor() {}

  public static getInstance(): PathToSuccessService {
    if (!PathToSuccessService.instance) {
      PathToSuccessService.instance = new PathToSuccessService();
    }
    return PathToSuccessService.instance;
  }

  public static async getPathToSuccessData(): Promise<PathToSuccessData> {
    return PathToSuccessService.getInstance().getPathToSuccessData();
  }

  public static validateImages(images: { renderDashboard: string; telegramBot: string }): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (!images.renderDashboard) {
      errors.push('Изображение render-dashboard не загружено');
    }
    
    if (!images.telegramBot) {
      errors.push('Изображение telegram-bot не загружено');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  public async getPathToSuccessData(): Promise<PathToSuccessData> {
    try {
      // Валидация данных
      if (!STEPS_TO_SUCCESS || !Array.isArray(STEPS_TO_SUCCESS)) {
        throw new Error('Некорректные данные шагов к успеху');
      }

      // Проверка каждого шага
      STEPS_TO_SUCCESS.forEach((step, index) => {
        if (!step.id || !step.title || !step.description) {
          throw new Error(`Некорректные данные шага ${index + 1}`);
        }
      });

      const data: PathToSuccessData = {
        header: {
          title: "Путь к успеху",
          description: "От простой идеи до полнофункционального бота, работающего в продакшене 24/7"
        },
        steps: STEPS_TO_SUCCESS,
        images: {
          renderDashboard,
          telegramBot
        }
      };

      return data;
    } catch (error) {
      console.error('Ошибка загрузки данных PathToSuccess:', error);
      throw new Error('Не удалось загрузить данные о пути к успеху');
    }
  }

  public validatePathToSuccessData(data: PathToSuccessData): boolean {
    try {
      if (!data || typeof data !== 'object') return false;
      if (!data.header || !data.header.title || !data.header.description) return false;
      if (!data.steps || !Array.isArray(data.steps) || data.steps.length === 0) return false;
      if (!data.images || !data.images.renderDashboard || !data.images.telegramBot) return false;

      // Проверка каждого шага
      for (const step of data.steps) {
        if (!step.id || !step.title || !step.description) return false;
      }

      return true;
    } catch {
      return false;
    }
  }
}

export const pathToSuccessService = PathToSuccessService.getInstance();