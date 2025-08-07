import { SectionHeader } from '../common';

interface PricingPlansHeaderProps {
  isIntersecting: boolean;
}

const PricingPlansHeader: React.FC<PricingPlansHeaderProps> = ({ isIntersecting }) => {
  return (
    <SectionHeader
      title="Выберите свой пакет"
      subtitle="Все материалы предоставляются с доступом навсегда. Никаких подписок или скрытых платежей."
      isIntersecting={isIntersecting}
    />
  );
};

export default PricingPlansHeader; 