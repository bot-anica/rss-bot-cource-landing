import { SectionHeader } from '../common';

interface FAQHeaderProps {
  isIntersecting: boolean;
}

const FAQHeader: React.FC<FAQHeaderProps> = ({ isIntersecting }) => {
  return (
    <SectionHeader
      title="Частые вопросы"
      subtitle="Ответы на самые популярные вопросы о курсе"
      isIntersecting={isIntersecting}
    />
  );
};

export default FAQHeader; 