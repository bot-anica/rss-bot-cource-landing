import type { FC } from 'react';

export interface HeaderNavProps {
  className?: string;
}

const HeaderNav: FC<HeaderNavProps> = ({ className = '' }) => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Примерная высота header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`hidden md:flex space-x-8 items-center h-full ${className}`}>
      <button 
        onClick={() => handleScrollToSection('course')}
        className="text-gray-700 hover:text-primary-pink transition-colors font-medium flex items-center h-full py-2"
      >
        Курс
      </button>
      <button 
        onClick={() => handleScrollToSection('pricing')}
        className="text-gray-700 hover:text-primary-pink transition-colors font-medium flex items-center h-full py-2"
      >
        Цены
      </button>
      <button 
        onClick={() => handleScrollToSection('faq')}
        className="text-gray-700 hover:text-primary-pink transition-colors font-medium flex items-center h-full py-2"
      >
        FAQ
      </button>
    </nav>
  );
};

export default HeaderNav; 