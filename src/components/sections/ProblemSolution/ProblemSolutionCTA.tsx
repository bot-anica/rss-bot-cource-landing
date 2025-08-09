import type { FC } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import type { ProblemSolutionData } from '../../../services/ProblemSolutionService';

interface ProblemSolutionCTAProps {
  data: ProblemSolutionData;
  isIntersecting: boolean;
  ctaVariants: Variants;
}

const ProblemSolutionCTA: FC<ProblemSolutionCTAProps> = ({
  data,
  isIntersecting,
  ctaVariants
}) => {
  return (
    <motion.div
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={ctaVariants}
      className="text-center"
    >
      <div className="bg-gradient-to-r from-primary-pink to-primary-blue rounded-xl p-6 text-white">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Lightbulb className="w-6 h-6" />
          <h3 className="text-lg font-bold">{data.cta.title}</h3>
        </div>
        <p className="text-sm opacity-90 mb-4">
          {data.cta.subtitle}
        </p>
        <a 
          href={data.cta.link} 
          className="inline-flex items-center gap-2 bg-white text-primary-dark font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
        >
          <span>{data.cta.buttonText}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ProblemSolutionCTA;