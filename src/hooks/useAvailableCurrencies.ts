import { useMemo } from 'react';
import { CurrencyService } from '../services/CurrencyService';

export type CurrencyCode = 'USD' | 'EUR' | 'RUB' | 'UAH' | 'USDT';

export function useAvailableCurrencies(location: string | null): CurrencyCode[] {
  return useMemo(() => {
    return CurrencyService.getAvailableCurrencies(location);
  }, [location]);
}