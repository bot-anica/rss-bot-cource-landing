import type { FC } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useProblemSolution } from '../../../hooks/useProblemSolution';
import { useProblemSolutionAnimations } from '../../../hooks/useProblemSolutionAnimations';
import ProblemSolutionBackground from './ProblemSolutionBackground';
import ProblemSolutionHeader from './ProblemSolutionHeader';
import ProblemSolutionItems from './ProblemSolutionItems';
import ProblemSolutionCTA from './ProblemSolutionCTA';

const ProblemSolution: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];
  const { data, isLoading, error } = useProblemSolution();
  const { headerVariants, itemVariants, ctaVariants } = useProblemSolutionAnimations();

  if (isLoading) {
    return (
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-red-600">
            <p>Ошибка загрузки данных: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      <ProblemSolutionBackground />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ProblemSolutionHeader 
          data={data}
          isIntersecting={isIntersecting}
          headerVariants={headerVariants}
        />
        
        <ProblemSolutionItems 
          data={data}
          isIntersecting={isIntersecting}
          itemVariants={itemVariants}
        />
        
        <ProblemSolutionCTA 
          data={data}
          isIntersecting={isIntersecting}
          ctaVariants={ctaVariants}
        />
      </div>
    </section>
  );
};

export default ProblemSolution;