import { CurrencyCode } from '../hooks/useAvailableCurrencies';

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  name: string;
}

export class CurrencyService {
  private static currencies: Record<CurrencyCode, CurrencyInfo> = {
    USD: { code: 'USD', symbol: '$', name: 'доллары США' },
    EUR: { code: 'EUR', symbol: '€', name: 'евро' },
    RUB: { code: 'RUB', symbol: '₽', name: 'рубли' },
    UAH: { code: 'UAH', symbol: '₴', name: 'гривны' },
    USDT: { code: 'USDT', symbol: '', name: 'USDT (TRC20)' },
  };

  static getAvailableCurrencies(location: string | null): CurrencyCode[] {
    if (location === 'RU') {
      return ['USD', 'EUR', 'RUB', 'USDT'];
    }
    if (location === 'UA') {
      return ['USD', 'EUR', 'UAH', 'USDT'];
    }
    return ['USD', 'EUR', 'USDT'];
  }

  static getCurrencyInfo(code: CurrencyCode): CurrencyInfo {
    return this.currencies[code];
  }

  static getCurrencyNames(codes: CurrencyCode[]): string {
    return codes
      .map(code => this.currencies[code].name)
      .join(', ');
  }

  static getAllCurrencies(): CurrencyInfo[] {
    return Object.values(this.currencies);
  }
} 