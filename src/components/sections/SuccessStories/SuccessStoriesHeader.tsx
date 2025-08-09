import type { FC } from 'react';
import { motion, type Variants } from 'framer-motion';
import type { SuccessStoriesData } from '../../../services/SuccessStoriesService';

interface SuccessStoriesHeaderProps {
  data: SuccessStoriesData;
  isIntersecting: boolean;
  headerVariants: Variants;
}

export const SuccessStoriesHeader: FC<SuccessStoriesHeaderProps> = ({
  data,
  isIntersecting,
  headerVariants
}) => {
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        {data.title}
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        {data.subtitle}
      </p>
    </motion.div>
  );
};