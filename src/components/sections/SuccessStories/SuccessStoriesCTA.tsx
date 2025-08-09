import type { FC } from 'react';
import { motion, type Variants } from 'framer-motion';
import type { SuccessStoriesData } from '../../../services/SuccessStoriesService';

interface SuccessStoriesCTAProps {
  data: SuccessStoriesData;
  isIntersecting: boolean;
  ctaVariants: Variants;
}

export const SuccessStoriesCTA: FC<SuccessStoriesCTAProps> = ({
  data,
  isIntersecting,
  ctaVariants
}) => {
  return (
    <motion.div
      variants={ctaVariants}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      className="text-center bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-2xl p-8 border border-yellow-400/20"
    >
      <div className="text-4xl mb-4">
        {data.cta.emoji}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
        {data.cta.title}
      </h3>
      <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
        {data.cta.description}
      </p>
    </motion.div>
  );
};