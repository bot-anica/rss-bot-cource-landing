import type { FC } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { usePathToSuccess } from '../../../hooks/usePathToSuccess';
import { usePathToSuccessAnimations } from '../../../hooks/usePathToSuccessAnimations';
import PathToSuccessBackground from './PathToSuccessBackground';
import PathToSuccessHeader from './PathToSuccessHeader';
import PathToSuccessGrid from './PathToSuccessGrid';
import PathToSuccessImages from './PathToSuccessImages';

const PathToSuccess: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const { data, loading, error } = usePathToSuccess();
  const { animations, getStepAnimation } = usePathToSuccessAnimations();

  if (loading) {
    return (
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-600">
            <p>{error || 'Ошибка загрузки данных'}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
      <PathToSuccessBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <PathToSuccessHeader
          title={data.header.title}
          description={data.header.description}
          isIntersecting={isIntersecting}
          animation={animations.header}
        />
        
        <PathToSuccessGrid
          steps={data.steps}
          isIntersecting={isIntersecting}
          getStepAnimation={getStepAnimation}
          containerAnimation={animations.container}
        />
        
        <PathToSuccessImages
          images={data.images}
          isIntersecting={isIntersecting}
        />
      </div>
    </section>
  );
};

export default PathToSuccess;