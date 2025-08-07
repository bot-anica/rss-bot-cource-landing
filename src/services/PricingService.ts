import { PRICING_PLANS } from '../utils/pricingPlans';

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  features: string[];
  popular?: boolean;
}

export class PricingService {
  static getAllPlans(): PricingPlan[] {
    return Object.values(PRICING_PLANS);
  }

  static getPlanById(id: string): PricingPlan | undefined {
    return PRICING_PLANS[id as keyof typeof PRICING_PLANS];
  }

  static getPopularPlan(): PricingPlan | undefined {
    return this.getAllPlans().find(plan => plan.popular);
  }

  static getPlansByStyle(style: 'primary' | 'secondary'): PricingPlan[] {
    return this.getAllPlans().filter(plan => 
      // Здесь можно добавить логику фильтрации по стилю
      plan.id === style
    );
  }

  static getPlansStats() {
    const plans = this.getAllPlans();
    return {
      total: plans.length,
      popular: plans.filter(plan => plan.popular).length,
      averagePrice: plans.reduce((sum, plan) => sum + plan.price, 0) / plans.length,
    };
  }
} 