import { ArrowRight, Play } from "lucide-react";

import { ButtonVariant, ButtonSize, ButtonIconPosition } from "../../core/types/common";

import HeroImageHorizontalSmall from '../../assets/images/heroImage/HeroImageHorizontalSmall.png';
import HeroImageHorizontalMiddle from '../../assets/images/heroImage/HeroImageHorizontalMiddle.png';
import HeroImageVerticalLarge from '../../assets/images/heroImage/HeroImageVerticalLarge.png';
import HeroImageVerticalExtraLarge from '../../assets/images/heroImage/HeroImageVerticalExtraLarge.png';

export const HERO_TITLE = {
  main: 'Создайте профессионального',
  highlight: 'Telegram',
  additional: 'бота для новостей',
}

export const HERO_SUBTITLE = 'Научитесь создавать профессиональных ботов с нуля и получите готовый проект для портфолио'

export const HERO_BENEFITS = [
  'Доступ навсегда',
  'Готовые файлы',
  'Практические результаты'
]

export const HERO_CTA = {
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

export const HERO_IMAGES = {
  rightImages: {
    extraLarge: HeroImageVerticalExtraLarge,
    large: HeroImageVerticalLarge,
    // medium: ,
    // mediumVertical: ,
    // small: ,
    // smallVertical: ,
  },
  imagesInText: {
    // extraLarge: ,
    // large: ,
    medium: HeroImageHorizontalMiddle,
    // mediumVertical: ,
    small: HeroImageHorizontalSmall,
    // smallVertical: ,
  }
}