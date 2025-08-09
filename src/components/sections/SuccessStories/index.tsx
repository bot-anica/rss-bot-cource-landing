import type { FC } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useSuccessStories } from '../../../hooks/useSuccessStories';
import { useSuccessStoriesAnimations } from '../../../hooks/useSuccessStoriesAnimations';
import { SuccessStoriesBackground } from './SuccessStoriesBackground';
import { SuccessStoriesHeader } from './SuccessStoriesHeader';
import { SuccessStoriesStats } from './SuccessStoriesStats';
import { SuccessStoriesTestimonials } from './SuccessStoriesTestimonials';
import { SuccessStoriesCTA } from './SuccessStoriesCTA';

export const SuccessStories: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];
  const { data, loading, error } = useSuccessStories();
  const {
    headerVariants,
    statVariants,
    testimonialVariants,
    ctaVariants
  } = useSuccessStoriesAnimations();

  if (loading) {
    return (
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            Загрузка историй успеха...
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-400">
            Ошибка загрузки: {error || 'Данные недоступны'}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={ref}
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      <SuccessStoriesBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <SuccessStoriesHeader
          data={data}
          isIntersecting={isIntersecting}
          headerVariants={headerVariants}
        />
        
        <SuccessStoriesStats
          data={data}
          isIntersecting={isIntersecting}
          statVariants={statVariants}
        />
        
        <SuccessStoriesTestimonials
          data={data}
          isIntersecting={isIntersecting}
          testimonialVariants={testimonialVariants}
        />
        
        <SuccessStoriesCTA
          data={data}
          isIntersecting={isIntersecting}
          ctaVariants={ctaVariants}
        />
      </div>
    </section>
  );
};