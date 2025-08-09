import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { HeroData } from '../../../services/HeroService';
import Button from '../../common/Button';

interface HeroCTAProps {
  heroData: HeroData;
  itemVariants: any;
}

const HeroCTA: FC<HeroCTAProps> = ({ heroData, itemVariants }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
    >
      <Button
        variant="primary"
        size="lg"
        to={heroData.cta.primary.link}
        className="group space-x-2"
      >
        <span>{heroData.cta.primary.text}</span>
        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
      </Button>
      
      <Button
        variant="secondary"
        size="lg"
        to={heroData.cta.secondary.link}
        className="group space-x-2"
      >
        <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        <span>{heroData.cta.secondary.text}</span>
      </Button>
    </motion.div>
  );
};

export default memo(HeroCTA);