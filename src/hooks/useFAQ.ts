import { useState, useMemo } from 'react';
import { FAQS } from '../utils/faqData';
import { CurrencyService } from '../services/CurrencyService';
import { useGeolocation } from './useGeolocation';

export interface FAQItem {
  question: string;
  answer: string;
}

export const useFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { location } = useGeolocation();

  const faqs = useMemo(() => {
    const availableCurrencies = CurrencyService.getAvailableCurrencies(location);
    const currencyNames = CurrencyService.getCurrencyNames(availableCurrencies);
    
    const currencyFAQ: FAQItem = {
      question: "В каких валютах можно оплатить курс?",
      answer: `Мы принимаем оплату в следующих валютах: ${currencyNames} и в 100+ криптовалютах через NowPayments.`
    };

    return [...FAQS, currencyFAQ];
  }, [location]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return {
    faqs,
    openIndex,
    toggleFAQ,
  };
}; 