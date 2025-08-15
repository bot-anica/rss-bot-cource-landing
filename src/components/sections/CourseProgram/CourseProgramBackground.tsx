import type { FC } from 'react';
import CourseProgramBGLarge from "../../../assets/images/courseProgramBG/CourseProgramBG-Large.jpg"
import CourseProgramBGMedium from "../../../assets/images/courseProgramBG/CourseProgramBG-Medium.jpg"
import CourseProgramBGSmall from "../../../assets/images/courseProgramBG/CourseProgramBG-Small.jpg"

const CourseProgramBackground: FC = () => {
  return (
    <picture>
      <source srcSet={CourseProgramBGLarge} type="image/jpeg" media="(min-width: 1024px)" />
      <source srcSet={CourseProgramBGMedium} type="image/jpeg" media="(min-width: 767px) and (max-width: 1023px)" />
      <source srcSet={CourseProgramBGSmall} type="image/jpeg" media="(max-width: 767px)" />
      <img src={CourseProgramBGSmall} alt="" className="absolute bottom-0 left-1/2 transform -translate-x-1/2" loading="lazy" />
    </picture>
  );
};

export default CourseProgramBackground;