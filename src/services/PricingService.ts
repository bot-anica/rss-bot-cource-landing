import { PricingPlan, PricingSectionData } from "../types/sections";
import { PRICING_PLANS } from "../utils/constants";
import { SectionHeadersService } from "./SectionHeadersService";

export class PricingService {
  static getAllPlans(): PricingPlan[] {
    return PRICING_PLANS;
  }

  static getData(): PricingSectionData {
    const header = SectionHeadersService.getHeader('pricingPlans');
    const plans = PricingService.getAllPlans();

    return {
      header,
      plans,
    }
  }
} 