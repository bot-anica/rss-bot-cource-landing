import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { HeroTitle } from '../../../types/sections';

interface HeroHeaderProps {
  title: HeroTitle;
  subtitle: string;
  itemVariants: any;
}

const HeroHeader: FC<HeroHeaderProps> = ({ title, subtitle, itemVariants }) => {
  return (
    <div className="mb-40">
      <motion.h1 
        variants={itemVariants}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-dark mb-4 leading-tight"
      >
        {title.main}
        <span className="text-gradient block">{title.highlight}</span>
      </motion.h1>
      
      <motion.p 
        variants={itemVariants}
        className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default memo(HeroHeader);