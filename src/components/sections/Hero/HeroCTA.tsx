import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Button from '../../common/Button';
import { CTAItem } from '../../../types/sections';
import { ButtonIconPosition } from '../../../types/common';

interface HeroCTAProps {
  cta: Record<"primary" | "secondary", CTAItem>;
  itemVariants: any;
}

const renderButtonIcon = (icon: any, color = 'primary-dark') => {
  const IconComponent = icon
  return <IconComponent className={`w-6 h-6 text-${color}`} />
};

const HeroCTA: FC<HeroCTAProps> = ({ cta, itemVariants }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 lg:md-16"
    >
      {Object.keys(cta).map((key) => {
        const item = cta[key as "primary" | "secondary"];
        return (
          <Button
            key={key}
            variant={item.buttonVariant}
            size={item.buttonSize}
            to={item.link}
            className="group space-x-2"
          >
            {item.buttonIcon && item.buttonIconPosition === ButtonIconPosition.LEFT && renderButtonIcon(item.buttonIcon, item.buttonIconColor)}
            <span>{item.text}</span>
            {item.buttonIcon && item.buttonIconPosition === ButtonIconPosition.RIGHT && renderButtonIcon(item.buttonIcon, item.buttonIconColor)}
          </Button>
        );
      })}
    </motion.div>
  );
};

export default memo(HeroCTA);