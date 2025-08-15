import { Github, Mail, MessageCircle, Send } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import LogoWithBG from '../../assets/images/Logo_with_bg.svg';
import { toast } from "react-toastify";

const Footer: FC = () => {
  return (
    <footer className="bg-primary-dark text-white pt-8 pb-4 md:pt-10 md:pb-6 lg:pt-14 lg:pb-8 border-t border-primary-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0">
          {/* Brand & Description */}
          <div className="md:w-auto flex flex-col items-center md:items-start text-center md:text-left">
            <Link 
              to="/" 
              className="h-full mb-6"
            >
              <img src={LogoWithBG} alt="Logo" className="h-8 w-auto" />
            </Link>
            <p className="text-gray-300 md:mb-4 max-w-sm lg:max-w-md text-sm lg:text-base">
              Полный курс по созданию профессионального Telegram-бота для
              парсинга RSS лент. От идеи до продакшена за 12 уроков.
            </p>
          </div>

          {/* Navigation & Contacts: навигация сверху, соц. иконки прижаты к низу */}
          <div className="flex flex-col items-center md:items-end h-full md:min-h-[120px] w-full md:w-auto text-center md:text-right">
            <nav className="flex flex-row gap-6 mb-4 text-sm lg:text-base underline">
              <Link
                to="#course"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Программа курса
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
            <div className="flex flex-row gap-5 mb-4 md:mb-0">
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
                <Send size={26} />
              </a>
              <a
                href="mailto:bot.anica.course@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Telegram"
                onClick={() => {
                  // Copy mail to clipboard
                  navigator.clipboard.writeText('bot.anica.course@gmail.com');
                  // Show toast
                  toast.success('Email скопирован в буфер обмена');
                }}
              >
                <Mail size={26} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-blue/30 pt-4 md:pt-6 flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left gap-2">
          <p className="text-gray-300 text-xs md:text-sm">
            © 2025 Bot Anica. Все права защищены.
          </p>
          <p className="text-gray-300 text-xs md:text-sm">
            Создано с <span className="text-red-400">❤️</span> для разработчиков
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
