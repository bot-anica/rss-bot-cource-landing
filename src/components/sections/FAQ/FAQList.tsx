import type { FC } from 'react';
import FAQItem from './FAQItem';
import { FAQItem as FAQItemType } from '../../../types/sections';

interface FAQListProps {
  faqs: FAQItemType[];
  openIndex: number | null;
  onToggle: (index: number) => void;
  isIntersecting: boolean;
}

const FAQList: FC<FAQListProps> = ({ faqs, openIndex, onToggle, isIntersecting }) => {
  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, idx) => (
        <FAQItem
          key={idx}
          question={faq.question}
          answer={faq.answer}
          open={openIndex === idx}
          onClick={() => onToggle(idx)}
          isIntersecting={isIntersecting}
          index={idx}
        />
      ))}
    </div>
  );
};

export default FAQList;