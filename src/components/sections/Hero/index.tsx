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
  const { heroData, isDataValid } = useHero();
  const { containerVariants, itemVariants } = useHeroAnimations();

  // Проверяем, что данные загружены
  if (!isDataValid) {
    return (
      <section className="bg-white relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center">Hero - Error Loading</h2>
        </div>
      </section>
    );
  }

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
          <HeroHeader heroData={heroData} itemVariants={itemVariants} />

          <div>
            {/* CTA Section */}
            <HeroCTA heroData={heroData} itemVariants={itemVariants} />

            {/* Benefits */}
            <HeroBenefits heroData={heroData} itemVariants={itemVariants} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Hero);