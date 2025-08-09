import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';

interface HeroBenefitsProps {
  benefits: string[];
  itemVariants: any;
}

const HeroBenefits: FC<HeroBenefitsProps> = ({ benefits, itemVariants }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      {benefits.map((benefit, index) => (
        <div 
          key={index}
          className="flex items-center gap-2 px-3 py-1 bg-primary-blue/10 rounded-full border border-primary-blue/20"
        >
          <span className="text-green-500">✔</span>
          <span className="text-sm font-medium text-primary-blue">{benefit}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default memo(HeroBenefits);