import type { FC } from 'react';
import { motion, type Variants } from 'framer-motion';
import type { ProblemSolutionData } from '../../../services/ProblemSolutionService';

interface ProblemSolutionHeaderProps {
  data: ProblemSolutionData;
  isIntersecting: boolean;
  headerVariants: Variants;
}

const ProblemSolutionHeader: FC<ProblemSolutionHeaderProps> = ({
  data,
  isIntersecting,
  headerVariants
}) => {
  return (
    <motion.div
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={headerVariants}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
        {data.title}
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {data.subtitle}
      </p>
    </motion.div>
  );
};

export default ProblemSolutionHeader;