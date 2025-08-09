import type { FC } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useFeatures } from '../../../hooks/useFeatures';
import { useFeaturesAnimations } from '../../../hooks/useFeaturesAnimations';
import FeaturesBackground from './FeaturesBackground';
import FeaturesHeader from './FeaturesHeader';
import FeaturesGrid from './FeaturesGrid';
import { SectionHeader } from '../../common';

const Features: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const { header, features } = useFeatures();
  const { animations, getFeatureCardAnimation } = useFeaturesAnimations();

  return (
    <section ref={ref} className="relative py-20">
      <FeaturesBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={header.title} subtitle={header.subtitle} isIntersecting={isIntersecting} />
        
        <FeaturesGrid 
          data={features}
          isIntersecting={isIntersecting}
          getFeatureCardAnimation={getFeatureCardAnimation}
          hoverAnimation={animations.featureCardHover}
        />
      </div>
    </section>
  );
};

export default Features;