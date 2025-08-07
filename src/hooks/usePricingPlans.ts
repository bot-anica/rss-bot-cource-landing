import { useMemo } from 'react';
import { PricingService, PricingPlan } from '../services/PricingService';

export const usePricingPlans = () => {
  const plans = useMemo(() => PricingService.getAllPlans(), []);
  const popularPlan = useMemo(() => PricingService.getPopularPlan(), []);
  const stats = useMemo(() => PricingService.getPlansStats(), []);

  const getPlanById = (id: string): PricingPlan | undefined => {
    return PricingService.getPlanById(id);
  };

  const getPlansByStyle = (style: 'primary' | 'secondary'): PricingPlan[] => {
    return PricingService.getPlansByStyle(style);
  };

  return {
    plans,
    popularPlan,
    stats,
    getPlanById,
    getPlansByStyle,
  };
}; 