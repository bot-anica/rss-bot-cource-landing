import type { FC } from 'react';
import { CURRENCIES } from '../../utils/constants';

interface PaymentMethodsProps {
  currencies: string[];
}

const PaymentMethods: FC<PaymentMethodsProps> = ({ currencies }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {currencies.map((code) => (
        <span
          key={code}
          className="inline-flex items-center px-3 py-1 bg-primary-blue/10 text-primary-dark rounded-full text-sm font-medium border border-primary-blue/20"
        >
          {`${CURRENCIES[code]?.name || code}`.trim()}
        </span>
      ))}
    </div>
  );
};

export default PaymentMethods;