import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { useHero } from '../../../hooks/useHero';
import { useHeroAnimations } from '../../../hooks/useHeroAnimations';
import HeroBackground from './HeroBackground';
import HeroHeader from './HeroHeader';
import HeroCTA from './HeroCTA';
import HeroBenefits from './HeroBenefits';
import { SectionSplitter } from '../../common';
import HeroPreview from '../../../assets/images/HeroPreview.gif';

const Hero: FC = () => {
  const { heroData } = useHero();
  const { containerVariants, itemVariants } = useHeroAnimations();

  return (
    <section className="bg-white relative min-h-screen flex items-center justify-center overflow-hidden pt-[56px] lg:pt-[72px]">
      <HeroBackground />
      <SectionSplitter top={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <HeroHeader title={heroData.title} subtitle={heroData.subtitle} itemVariants={itemVariants} />

            <div>
              {/* CTA Section */}
              <HeroCTA cta={heroData.cta} itemVariants={itemVariants} />

              {/* Benefits */}
              <HeroBenefits benefits={heroData.benefits} itemVariants={itemVariants} />
            </div>
          </motion.div>
        </div>
        <img src={HeroPreview} alt="" className="hidden md:block relative z-10 rotate-x-10 rotate-y-20" />
      </div>
    </section>
  );
};

export default memo(Hero);