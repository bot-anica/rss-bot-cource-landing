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
        spaceBetween={16}
        slidesPerView="auto"
        centeredSlides={false}
        watchOverflow={true}
        breakpoints={{
          320: {
            spaceBetween: 12,
            slidesPerView: 1.2,
          },
          480: {
            spaceBetween: 16,
            slidesPerView: 1.5,
          },
          640: {
            spaceBetween: 20,
            slidesPerView: 2.2,
          },
          768: {
            spaceBetween: 24,
            slidesPerView: 2.5,
          },
          1024: {
            spaceBetween: 24,
            slidesPerView: 3.2,
          },
          1280: {
            spaceBetween: 32,
            slidesPerView: 3.5,
          },
          1440: {
            spaceBetween: 40,
            slidesPerView: 4,
          },
          1920: {
            spaceBetween: 48,
            slidesPerView: 4.5,
          }
        }}
        className="course-program-swiper"
      >
        {lessons.map((lesson, index) => {
          const IconComponent = lessonIcons[index];
          const isEven = (index + 1) % 2 === 0;
          return (
            <SwiperSlide key={lesson.id} className="!w-72 sm:!w-80 md:!w-96 lg:!w-[320px] xl:!w-[360px]">
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