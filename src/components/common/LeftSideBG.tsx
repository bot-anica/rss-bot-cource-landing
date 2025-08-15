import type { FC } from 'react';
import { memo } from 'react';
import LeftSideBGExtraLarge from "../../assets/images/leftSideBG/LeftSideBG-ExtraLarge.jpg"
import LeftSideBGLarge from "../../assets/images/leftSideBG/LeftSideBG-Large.jpg"
import LeftSideBGMedium from "../../assets/images/leftSideBG/LeftSideBG-Medium.jpg"
import LeftSideBGSmall from "../../assets/images/leftSideBG/LeftSideBG-Small.jpg"

const LeftSideBG: FC = () => {
  return (
    <picture>
      <source srcSet={LeftSideBGExtraLarge} type="image/jpeg" media="(min-width: 1280px)" />
      <source srcSet={LeftSideBGLarge} type="image/jpeg" media="(min-width: 1024px) and (max-width: 1279px)" />
      <source srcSet={LeftSideBGMedium} type="image/jpeg" media="(min-width: 767px) and (max-width: 1023px)" />
      <source srcSet={LeftSideBGSmall} type="image/jpeg" media="(max-width: 767px)" />
      <img src={LeftSideBGSmall} alt="" className="absolute top-1/2 left-0 transform -translate-y-1/2" loading="lazy" />
    </picture>
  );
};

export default memo(LeftSideBG);