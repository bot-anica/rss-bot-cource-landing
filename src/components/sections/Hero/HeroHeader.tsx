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
    <div className="mb-16 lg:mb-20 xl:mb-32">
      <motion.h1 
        variants={itemVariants}
        className="text-primary-dark leading-tight mb-6"
      >
        <span className="text-2xl xl:text-4xl font-bold text-slate-700">{title.main}</span>
        <span className="text-gradient block uppercase text-5xl lg:text-8xl xl:text-9xl font-extrabold">{title.highlight}</span>
        <span className="text-2xl xl:text-4xl font-bold text-slate-700">{title.additional}</span>
      </motion.h1>

      <motion.p 
        variants={itemVariants}
        className="max-w-xs text-base md:text-lg text-gray-500 lg:max-w-2xl mb-8"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default memo(HeroHeader);