import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';

interface HeroSubtitleProps {
  subtitle: string;
  itemVariants: any;
}

const HeroSubtitle: FC<HeroSubtitleProps> = ({ subtitle, itemVariants }) => {
  return (
    <motion.p 
      variants={itemVariants}
      className="text-base md:text-lg text-gray-500 max-w-xs lg:max-w-2xl mb-8 text-center md:text-left m-auto md:mx-0"
    >
      {subtitle}
    </motion.p>
  );
};

export default memo(HeroSubtitle);