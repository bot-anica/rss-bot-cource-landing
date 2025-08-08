import { Github, MessageCircle } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="bg-primary-dark text-white pt-14 pb-8 border-t border-primary-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
          {/* Brand & Description */}
          <div className="md:w-auto flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3">Telegram Bot Course</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Полный курс по созданию профессионального Telegram-бота для
              парсинга RSS лент. От идеи до продакшена за 12 уроков.
            </p>
          </div>

          {/* Navigation & Contacts: навигация сверху, соц. иконки прижаты к низу */}
          <div className="flex flex-col items-center md:items-end h-full md:min-h-[120px] w-full md:w-auto text-center md:text-right mt-6 md:mt-0">
            <nav className="flex flex-row gap-6">
              <Link
                to="#course"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Программа
              </Link>
              <Link
                to="#pricing"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Цены
              </Link>
              <Link
                to="#faq"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                FAQ
              </Link>
            </nav>
            <div className="flex-grow" />
            <div className="flex flex-row gap-5 mt-2 md:mt-0">
              <a
                href="https://github.com/bot-anica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={26} />
              </a>
              <a
                href="https://t.me/callback_messanger_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Telegram"
              >
                <MessageCircle size={26} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-blue/30 mt-2 pt-6 flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left gap-2">
          <p className="text-gray-300 text-sm">
            © 2025 Telegram Bot Course. Все права защищены.
          </p>
          <p className="text-gray-300 text-sm">
            Создано с <span className="text-red-400">❤️</span> для разработчиков
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
