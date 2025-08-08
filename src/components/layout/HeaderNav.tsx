import type { FC } from "react";
import { Link } from "react-router-dom";

export interface HeaderNavProps {
  className?: string;
}

const HeaderNav: FC<HeaderNavProps> = ({ className = "" }) => {
  return (
    <nav className={`hidden md:flex space-x-8 items-center h-full ${className}`}>
      <Link
        to="#course"
        className="text-gray-700 hover:text-primary-pink transition-colors font-medium flex items-center h-full py-2"
      >
        Курс
      </Link>
      <Link
        to="#pricing"
        className="text-gray-700 hover:text-primary-pink transition-colors font-medium flex items-center h-full py-2"
      >
        Цены
      </Link>
      <Link
        to="#faq"
        className="text-gray-700 hover:text-primary-pink transition-colors font-medium flex items-center h-full py-2"
      >
        FAQ
      </Link>
    </nav>
  );
};

export default HeaderNav;
