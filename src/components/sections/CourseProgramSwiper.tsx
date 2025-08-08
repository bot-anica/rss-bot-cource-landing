import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Lesson } from '../../hooks/useCourseProgram';
import LessonCard from './LessonCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CourseProgramSwiperProps {
  lessons: Lesson[];
  lessonIcons: any[];
  breakpoints: any;
  isIntersecting: boolean;
  setSwiperRef: (swiper: any) => void;
}

const CourseProgramSwiper: React.FC<CourseProgramSwiperProps> = ({
  lessons,
  lessonIcons,
  breakpoints,
  isIntersecting,
  setSwiperRef,
}) => {
  return (
    <div className="relative overflow-visible">
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Navigation]}
        
        spaceBetween={24}
        slidesPerView="auto"
        centeredSlides={false}
        watchOverflow={true}
        breakpoints={breakpoints}
        className="course-program-swiper"
      >
        {lessons.map((lesson, index) => {
          const IconComponent = lessonIcons[index];
          const isEven = (index + 1) % 2 === 0;
          return (
            <SwiperSlide key={lesson.id} className="!w-80">
              <LessonCard
                lesson={lesson}
                IconComponent={IconComponent}
                isEven={isEven}
                isIntersecting={isIntersecting}
                index={index}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CourseProgramSwiper; 