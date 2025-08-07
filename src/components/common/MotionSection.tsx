import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../utils/cn';

export interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  opacity?: number;
  staggerChildren?: number;
  staggerDelay?: number;
}

const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 20,
  x = 0,
  scale = 1,
  opacity = 1,
  staggerChildren = 0,
  staggerDelay = 0.1,
  ...props
}) => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y, 
      x, 
      scale,
      transition: { duration }
    },
    visible: { 
      opacity, 
      y: 0, 
      x: 0, 
      scale: 1,
      transition: { 
        duration,
        delay: staggerDelay
      }
    }
  };

  return (
    <motion.section
      ref={ref as any}
      className={cn('relative', className)}
      variants={staggerChildren > 0 ? containerVariants : undefined}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      {...props}
    >
      {staggerChildren > 0 ? (
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      ) : (
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {children}
        </motion.div>
      )}
    </motion.section>
  );
};

export default MotionSection; 