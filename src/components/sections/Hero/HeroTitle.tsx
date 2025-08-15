import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { HeroTitle as HeroTitleType } from '../../../types/sections';

interface HeroTitleProps {
  title: HeroTitleType;
  itemVariants: any;
}

const HeroTitle: FC<HeroTitleProps> = ({ title, itemVariants }) => {
  return (
    <motion.h1 
      variants={itemVariants}
      className="text-primary-dark leading-tight mb-6 text-center md:text-left"
    >
      <span className="text-2xl xl:text-4xl font-bold text-slate-700">{title.main}</span>
      <span className="text-gradient block uppercase text-5xl lg:text-8xl xl:text-9xl font-extrabold">{title.highlight}</span>
      <span className="text-2xl xl:text-4xl font-bold text-slate-700">{title.additional}</span>
    </motion.h1>
  );
};

export default memo(HeroTitle);