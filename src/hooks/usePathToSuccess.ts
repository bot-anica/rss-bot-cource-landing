import { useState, useEffect } from 'react';
import { STEPS_TO_SUCCESS } from '../utils/constants';
import { PathToSuccessService } from '../services/PathToSuccessService';
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

export const usePathToSuccess = () => {
  const [data, setData] = useState<PathToSuccessData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPathToSuccess = async () => {
      try {
        // Валидация доступности сервиса
        if (!PathToSuccessService.getPathToSuccessData) {
          throw new Error('Сервис PathToSuccess недоступен');
        }

        // Загрузка данных через сервис
        const serviceData = await PathToSuccessService.getPathToSuccessData();
        
        const pathToSuccessData: PathToSuccessData = {
          header: serviceData.header,
          steps: serviceData.steps,
          images: {
            renderDashboard: renderDashboard,
            telegramBot: telegramBot
          }
        };

        // Валидация изображений
        const imageValidation = PathToSuccessService.validateImages(pathToSuccessData.images);
        if (!imageValidation.isValid) {
          console.warn('Предупреждение валидации изображений:', imageValidation.errors);
        }

        setData(pathToSuccessData);
        setLoading(false);
      } catch (err) {
        console.error('Ошибка загрузки PathToSuccess:', err);
        setError('Ошибка загрузки данных о пути к успеху');
        setLoading(false);
      }
    };

    loadPathToSuccess();
  }, []);

  return { data, loading, error };
};