import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { HeroData } from '../../../services/HeroService';

interface HeroHeaderProps {
  heroData: HeroData;
  itemVariants: any;
}

const HeroHeader: FC<HeroHeaderProps> = ({ heroData, itemVariants }) => {
  return (
    <div className="mb-40">
      <motion.h1 
        variants={itemVariants}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-dark mb-4 leading-tight"
      >
        {heroData.title.main}
        <span className="text-gradient block">{heroData.title.highlight}</span>
      </motion.h1>
      
      <motion.p 
        variants={itemVariants}
        className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
      >
        {heroData.subtitle}
      </motion.p>
    </div>
  );
};

export default memo(HeroHeader);