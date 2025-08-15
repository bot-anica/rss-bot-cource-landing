
import type { FC } from 'react';
import { memo } from 'react';
import RightSideBGExtraLarge from "../../assets/images/rightSideBG/RightSideBG-ExtraLarge.jpg"
import RightSideBGLarge from "../../assets/images/rightSideBG/RightSideBG-Large.jpg"
import RightSideBGMedium from "../../assets/images/rightSideBG/RightSideBG-Medium.jpg"
import RightSideBGSmall from "../../assets/images/rightSideBG/RightSideBG-Small.jpg"

const RightSideBG: FC = () => {
  return (
    <picture>
      <source srcSet={RightSideBGExtraLarge} type="image/jpeg" media="(min-width: 1280px)" />
      <source srcSet={RightSideBGLarge} type="image/jpeg" media="(min-width: 1024px) and (max-width: 1279px)" />
      <source srcSet={RightSideBGMedium} type="image/jpeg" media="(min-width: 767px) and (max-width: 1023px)" />
      <source srcSet={RightSideBGSmall} type="image/jpeg" media="(max-width: 767px)" />
      <img src={RightSideBGSmall} alt="" className="absolute top-1/2 right-0 transform -translate-y-1/2" loading="lazy" />
    </picture>
  );
};

export default memo(RightSideBG);