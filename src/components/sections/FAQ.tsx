import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useFAQ } from '../../hooks/useFAQ';
import FAQHeader from './FAQHeader';
import FAQList from './FAQList';
import FAQBanner from './FAQBanner';
import type { FC } from 'react';

const FAQ: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const { faqs, openIndex, toggleFAQ } = useFAQ();

  return (
    <section ref={ref as any} id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FAQHeader isIntersecting={isIntersecting as boolean} />

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