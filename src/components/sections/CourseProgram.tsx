import type { FC } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useCourseProgram } from '../../hooks/useCourseProgram';
import CourseProgramHeader from './CourseProgramHeader';
import CourseProgramSwiper from './CourseProgramSwiper';

const CourseProgram: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const {
    lessons,
    lessonIcons,
    breakpoints,
    handlePrevSlide,
    handleNextSlide,
    setSwiperRef,
  } = useCourseProgram();

  return (
    <section ref={ref} id="course" className="bg-white py-32 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Navigation */}
        <CourseProgramHeader 
          isIntersecting={isIntersecting as boolean}
          onPrevSlide={handlePrevSlide}
          onNextSlide={handleNextSlide}
        />

        {/* Swiper Container */}
        <CourseProgramSwiper
          lessons={lessons}
          lessonIcons={lessonIcons}
          breakpoints={breakpoints}
          isIntersecting={isIntersecting as boolean}
          setSwiperRef={setSwiperRef}
        />
      </div>
    </section>
  );
};

export default CourseProgram; 