import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button, Card } from '../common';
import type { FC } from 'react';

export interface PricingPlan {
  title: string;
  price: string;
  tagline: string;
  icon: React.ComponentType<any>;
  features: string[];
  buttonText: string;
  buttonStyle: 'primary' | 'secondary';
  popular: boolean;
  originalPrice?: string;
  id: string; // Добавляем идентификатор тарифа
}

interface PricingPlanCardProps {
  plan: PricingPlan;
  isIntersecting: boolean;
  index: number;
}

const PricingPlanCard: FC<PricingPlanCardProps> = ({ plan, isIntersecting, index }) => {
  const IconComponent = plan.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative h-full flex flex-col ${
        plan.popular ? 'scale-105' : ''
      }`}
    >
      <Card
        variant={plan.popular ? "elevated" : "default"}
        padding="lg"
        className={`h-full flex flex-col ${
          plan.popular ? 'ring-2 ring-primary-pink/20' : ''
        }`}
      >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-primary-pink to-primary-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
            Лучшее предложение
          </div>
        </div>
      )}
      {/* Plan Content */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-primary-dark mb-4">
          {plan.title}
        </h3>
        <div className="mb-2">
          {plan.originalPrice && (
            <span className="text-gray-400 line-through text-lg mr-2">
              {plan.originalPrice}
            </span>
          )}
          <span className="text-4xl font-bold text-primary-pink">
            {plan.price}
          </span>
        </div>
        <p className="text-gray-600">
          {plan.tagline}
        </p>
      </div>
      {/* Features */}
      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map((feature, featureIndex) => (
          <motion.li
            key={featureIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
            className="flex items-start gap-3 text-gray-700"
          >
            <div className="flex-shrink-0 w-5 h-5 bg-primary-pink/10 rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-primary-pink" />
            </div>
            <span className="text-sm">{feature}</span>
          </motion.li>
        ))}
      </ul>
      {/* CTA Button - прижат к низу */}
      <div className="mt-auto">
        <Button
          to={`/payment/${plan.id}`}
          variant={plan.buttonStyle}
          size="lg"
          className="w-full"
          onClick={() => {
            // Сохраняем позицию скролла перед переходом
            sessionStorage.setItem('scrollPosition', window.scrollY.toString());
          }}
        >
          {plan.buttonText}
        </Button>
      </div>
      </Card>
    </motion.div>
  );
};

export default PricingPlanCard;