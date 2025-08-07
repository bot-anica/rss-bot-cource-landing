import { motion } from 'framer-motion';
import { PricingPlan } from '../../services/PricingService';
import PricingPlanCard from './PricingPlanCard';

interface PricingPlansGridProps {
  plans: PricingPlan[];
  isIntersecting: boolean;
}

const PricingPlansGrid: React.FC<PricingPlansGridProps> = ({ plans, isIntersecting }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {plans.map((plan, index) => (
        <PricingPlanCard 
          key={plan.id} 
          plan={plan} 
          isIntersecting={isIntersecting} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default PricingPlansGrid; 