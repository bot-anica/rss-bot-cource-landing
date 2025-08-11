import type { FC } from "react";
import { Link } from "react-router-dom";

export interface FooterNavProps {
  className?: string;
}

const FooterNav: FC<FooterNavProps> = ({ className = "" }) => {
  return (
    <nav className={`flex flex-col md:flex-row gap-6 md:gap-12 ${className}`}>
      <div>
        <h3 className="font-semibold text-white mb-3">Курс</h3>
        <ul className="space-y-2">
          <li>
            <Link
              to="#course"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Программа
            </Link>
          </li>
          <li>
            <Link
              to="#pricing"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Тарифы
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-white mb-3">Поддержка</h3>
        <ul className="space-y-2">
          <li>
            <Link
              to="#faq"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              FAQ
            </Link>
          </li>
          <li>
            <a
              href="mailto:support@example.com"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default FooterNav;
