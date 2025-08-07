import type { FC } from 'react';

export interface HeaderNavProps {
  className?: string;
}

const HeaderNav: FC<HeaderNavProps> = ({ className = '' }) => {
  return (
    <nav className={`hidden md:flex space-x-8 ${className}`}>
      <a href="#course" className="text-gray-700 hover:text-primary-pink transition-colors font-medium">
        Курс
      </a>
      <a href="#pricing" className="text-gray-700 hover:text-primary-pink transition-colors font-medium">
        Цены
      </a>
      <a href="#faq" className="text-gray-700 hover:text-primary-pink transition-colors font-medium">
        FAQ
      </a>
    </nav>
  );
};

export default HeaderNav; 