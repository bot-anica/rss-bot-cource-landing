import renderDashboard from '../../assets/images/render-dashboard.webp';
import telegramBot from '../../assets/images/telegram-bot.webp';

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

export const PATH_TO_SUCCESS_IMAGES = {
  renderDashboard,
  telegramBot,
}