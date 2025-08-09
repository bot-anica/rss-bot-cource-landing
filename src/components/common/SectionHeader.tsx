import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export interface SectionHeaderProps {
  title: string;
  position?: 'left' | 'center' | 'right';
  subtitle?: string;
  isIntersecting: boolean;
  children?: ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  position = 'center',
  subtitle,
  isIntersecting,
  className = ""
}) => {
  const alignClasses = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignClasses[position]} mb-16 text-${position} ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader; 