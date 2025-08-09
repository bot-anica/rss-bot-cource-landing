export interface HeroData {
  title: {
    main: string;
    highlight: string;
  };
  subtitle: string;
  benefits: string[];
  cta: {
    primary: {
      text: string;
      link: string;
    };
    secondary: {
      text: string;
      link: string;
    };
  };
}

export class HeroService {
  private static heroData: HeroData = {
    title: {
      main: 'Создайте профессионального',
      highlight: 'Telegram-бота для новостей'
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
        link: '#pricing'
      },
      secondary: {
        text: 'Смотреть программу',
        link: '#course'
      }
    }
  };

  static getHeroData(): HeroData {
    return this.heroData;
  }

  static validateHeroData(): boolean {
    const data = this.heroData;
    return !!(
      data.title.main &&
      data.title.highlight &&
      data.subtitle &&
      data.benefits.length > 0 &&
      data.cta.primary.text &&
      data.cta.secondary.text
    );
  }
}