import type { FC } from 'react';
import { useFAQ } from '../../../hooks/useFAQ';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { SectionHeader } from '../../common';
import FAQBanner from './FAQBanner';
import FAQList from './FAQList';

const FAQ: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];
  const { header, faqs, openIndex, toggleFAQ } = useFAQ();

  return (
    <section ref={ref as any} id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader title={header.title} subtitle={header.subtitle} isIntersecting={isIntersecting} />

        {/* FAQ Items */}
        <FAQList 
          faqs={faqs} 
          openIndex={openIndex} 
          onToggle={toggleFAQ} 
          isIntersecting={isIntersecting as boolean} 
        />

        {/* Bottom Section */}
        <FAQBanner isIntersecting={isIntersecting as boolean} />
      </div>
    </section>
  );
};

export default FAQ;