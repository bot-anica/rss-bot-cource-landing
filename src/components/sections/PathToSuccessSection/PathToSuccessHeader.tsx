import type { FC } from 'react';
import { motion } from 'framer-motion';

interface PathToSuccessHeaderProps {
  title: string;
  description: string;
  isIntersecting: boolean;
  animation: {
    initial: any;
    animate: any;
    transition: any;
  };
}

const PathToSuccessHeader: FC<PathToSuccessHeaderProps> = ({
  title,
  description,
  isIntersecting,
  animation
}) => {
  return (
    <motion.div
      className="text-center mb-16"
      initial={animation.initial}
      animate={isIntersecting ? animation.animate : animation.initial}
      transition={animation.transition}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {title}
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default PathToSuccessHeader;