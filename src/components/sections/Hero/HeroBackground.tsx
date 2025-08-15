import type { FC } from 'react';
import { memo } from 'react';
import HeroBGExtraLarge from '../../../assets/images/heroBG/HeroBG-ExtraLarge.jpg';
import HeroBGLarge from '../../../assets/images/heroBG/HeroBG-Large.jpg';
import HeroBGMediumHorizontal from '../../../assets/images/heroBG/HeroBG-MediumHorizontal.jpg';
import HeroBGMediumVertical from '../../../assets/images/heroBG/HeroBG-MediumVertical.jpg';
import HeroBGSmallHorizontal from '../../../assets/images/heroBG/HeroBG-SmallHorizontal.jpg';
import HeroBGSmallVertical from '../../../assets/images/heroBG/HeroBG-SmallVertical.jpg';

const HeroBackground: FC = () => {
  return (
    <picture>
      <source srcSet={HeroBGExtraLarge} type="image/webp" media="(min-width: 1940px)" />
      <source srcSet={HeroBGLarge} type="image/jpeg" media="(min-width: 1280px) and (max-width: 1939px)" />
      <source srcSet={HeroBGMediumHorizontal} type="image/jpeg" media="(min-width: 1024px) and (max-width: 1279px)" />
      <source srcSet={HeroBGMediumVertical} type="image/jpeg" media="(min-width: 768px) and (max-width: 1023px)" />
      <source srcSet={HeroBGSmallHorizontal} type="image/jpeg" media="(min-width: 645px) and (max-width: 767px)" />
      <source srcSet={HeroBGSmallVertical} type="image/jpeg" media="(min-width: 340px) and (max-width: 644px)" />
      <img src={HeroBGSmallVertical} alt="" className="absolute top-0 right-0" />
    </picture>
  );
};

export default memo(HeroBackground);