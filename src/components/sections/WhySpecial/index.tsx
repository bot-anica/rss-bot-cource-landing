import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useAnimatedSection } from '../../../hooks/useAnimatedSection';
import { useWhySpecial } from '../../../hooks/useWhySpecial';
import StatsSection from './StatsSection';
import WhySpecialPointsList from './WhySpecialPointsList';
import WhySpecialPointDetails from './WhySpecialPointDetails';
import { SectionHeader, SectionSplitter } from '../../common';
import FromSidesBG from '../../../assets/images/FromSidesBG.jpg';

const WhySpecial: FC = () => {
  const { ref, isIntersecting } = useAnimatedSection();
  const {
    header,
    whySpecialPoints,
    stats,
    activePoint,
    setActivePointIndex,
  } = useWhySpecial();

  const handlePointClick = useCallback((index: number) => {
    setActivePointIndex(index);
  }, [setActivePointIndex]);

  const currentPoint = whySpecialPoints[activePoint];

  return (
    <section ref={ref as any} className="py-24 lg:py-28 xl:py-32 bg-white relative overflow-hidden">
      <img src={FromSidesBG} alt="" className="absolute -top-24 lg:-top-28 xl:-top-32 w-full h-full object-cover" />
      <SectionSplitter />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeader isIntersecting={isIntersecting} title={header.title} subtitle={header.subtitle} />

        {/* Interactive why special points Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 mb-8 lg:mb-12 xl:mb-16">
          {/* Left Menu */}
          <WhySpecialPointsList
            points={whySpecialPoints} 
            activePoint={activePoint} 
            isIntersecting={isIntersecting}
            onClick={handlePointClick}
          />

          {/* Right Content */}
          {currentPoint && (
            <WhySpecialPointDetails 
              point={currentPoint}
              isFirstPoint={activePoint === 0}
              isLastPoint={activePoint === whySpecialPoints.length - 1}
              isIntersecting={isIntersecting} 
            />
          )}
        </div>

        {/* Statistics */}
        <StatsSection stats={stats} isIntersecting={isIntersecting} />
      </div>
    </section>
  );
};

export default memo(WhySpecial);