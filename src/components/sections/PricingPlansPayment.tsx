import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { CurrencyCode } from '../../hooks/useAvailableCurrencies';
import PaymentMethods from './PaymentMethods';

interface PricingPlansPaymentProps {
  availableCurrencies: CurrencyCode[];
  isIntersecting: boolean;
}

const PricingPlansPayment: React.FC<PricingPlansPaymentProps> = ({ 
  availableCurrencies, 
  isIntersecting 
}) => {
  return (
    <>
      {/* Payment Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mb-12 flex flex-col items-center gap-4"
      >
        <p className="text-gray-600">
          Цены указаны в долларах США. Для оплаты можете использовать
        </p>
        <PaymentMethods currencies={availableCurrencies} />
        <p className="text-gray-600">и 100+ криптовалют</p>
      </motion.div>

      {/* Quality Guarantee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-white rounded-xl p-6 flex items-center gap-4 border border-primary-blue/30">
          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h4 className="font-bold text-primary-dark mb-1">
              Гарантия качества
            </h4>
            <p className="text-gray-600 text-sm">
              Материалы проверены на практике. Доступ навсегда.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PricingPlansPayment; 