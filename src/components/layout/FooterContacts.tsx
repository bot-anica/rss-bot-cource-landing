import { Mail, MessageCircle } from 'lucide-react';
import type { FC } from 'react';

export interface FooterContactsProps {
  className?: string;
}

const FooterContacts: FC<FooterContactsProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex items-center gap-2 text-gray-300">
        <Mail className="w-4 h-4" />
        <a href="mailto:support@example.com" className="hover:text-white transition-colors">
          support@example.com
        </a>
      </div>
      
      <div className="flex items-center gap-2 text-gray-300">
        <MessageCircle className="w-4 h-4" />
        <span>Telegram: @support_bot</span>
      </div>
      
      <div className="text-sm text-gray-400 mt-4">
        © 2024 Telegram Bot Course. Все права защищены.
      </div>
    </div>
  );
};

export default FooterContacts; 