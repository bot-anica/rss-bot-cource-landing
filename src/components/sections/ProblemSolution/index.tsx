import type { FC } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useProblemSolution } from '../../../hooks/useProblemSolution';
import { useProblemSolutionAnimations } from '../../../hooks/useProblemSolutionAnimations';
import ProblemSolutionBackground from './ProblemSolutionBackground';
import ProblemSolutionItems from './ProblemSolutionItems';
import ProblemSolutionCTA from './ProblemSolutionCTA';
import { SectionHeader } from '../../common';

const ProblemSolution: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];
  const { header, items, ctaBlock } = useProblemSolution();
  const { itemVariants, ctaVariants } = useProblemSolutionAnimations();

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      <ProblemSolutionBackground />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title={header.title} subtitle={header.subtitle} isIntersecting={isIntersecting} />
        
        <ProblemSolutionItems 
          items={items}
          isIntersecting={isIntersecting}
          itemVariants={itemVariants}
        />
        
        <ProblemSolutionCTA 
          data={ctaBlock}
          isIntersecting={isIntersecting}
          ctaVariants={ctaVariants}
        />
      </div>
    </section>
  );
};

export default ProblemSolution;