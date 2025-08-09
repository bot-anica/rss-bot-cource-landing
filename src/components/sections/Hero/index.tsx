import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { useHero } from '../../../hooks/useHero';
import { useHeroAnimations } from '../../../hooks/useHeroAnimations';
import HeroBackground from './HeroBackground';
import HeroHeader from './HeroHeader';
import HeroCTA from './HeroCTA';
import HeroBenefits from './HeroBenefits';

const Hero: FC = () => {
  const { heroData } = useHero();
  const { containerVariants, itemVariants } = useHeroAnimations();

  return (
    <section className="bg-white relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
    </section>
  );
};

export default memo(Hero);