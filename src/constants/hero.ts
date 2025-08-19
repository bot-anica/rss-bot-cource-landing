import { ArrowRight, Play } from "lucide-react";
import { ButtonVariant, ButtonSize, ButtonIconPosition } from "../types/common";

export const HERO = {
  title: {
    main: 'Создайте профессионального',
    highlight: 'Telegram',
    additional: 'бота для новостей'
  },
  subtitle: 'Научитесь создавать профессиональных ботов с нуля и получите готовый проект для портфолио',
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