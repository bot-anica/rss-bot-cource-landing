import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className,
  onClick,
  interactive = false,
  ...props
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300 border-box';
  
  const variantClasses = {
    default: 'bg-white border border-primary-blue/15',
    elevated: 'bg-white border-2 border-primary-pink/80',
    outlined: 'bg-transparent border-2 border-primary-pink/20',
    gradient: 'bg-gradient-to-br from-primary-pink/5 via-primary-blue/5 to-primary-pink/5 border border-primary-pink/15'
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8 lg:p-6 xl:p-8'
  };
  
  const interactiveClasses = interactive ? 'hover:shadow-md hover:border-primary-pink/30 cursor-pointer' : '';
  
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    interactiveClasses,
    className
  );

  return (
    <div
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 