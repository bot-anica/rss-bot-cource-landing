import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useGeolocation } from '../../hooks/useGeolocation';
import { useAvailableCurrencies } from '../../hooks/useAvailableCurrencies';
import { usePricingPlans } from '../../hooks/usePricingPlans';
import { BackgroundElements } from '../common';
import PricingPlansHeader from './PricingPlansHeader';
import PricingPlansGrid from './PricingPlansGrid';
import PricingPlansPayment from './PricingPlansPayment';
import type { FC } from 'react';

const PricingPlans: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const { location } = useGeolocation();
  const availableCurrencies = useAvailableCurrencies(location);
  const { plans } = usePricingPlans();

  return (
    <section ref={ref as any} id="pricing" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <BackgroundElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <PricingPlansHeader isIntersecting={isIntersecting as boolean} />

        {/* Pricing Cards */}
        <PricingPlansGrid plans={plans} isIntersecting={isIntersecting as boolean} />

        {/* Payment Options */}
        <PricingPlansPayment 
          availableCurrencies={availableCurrencies} 
          isIntersecting={isIntersecting as boolean} 
        />
      </div>
    </section>
  );
};

export default PricingPlans; 