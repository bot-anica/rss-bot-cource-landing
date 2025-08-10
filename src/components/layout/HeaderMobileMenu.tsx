import { motion, AnimatePresence } from 'framer-motion';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../common';
import { ButtonSize, ButtonVariant } from '../../types/common';

export interface HeaderMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ITEMS = [
  { to: '#course', label: 'Курс' },
  { to: '#pricing', label: 'Цены' },
  { to: '#faq', label: 'FAQ' },
]

const HeaderMobileMenu: FC<HeaderMobileMenuProps> = ({ isOpen, onClose }) => {
  const renderMenuItem = (to: string, label: string) => (
    <Link 
      to={to}
      onClick={onClose}
      className="block w-full text-left text-gray-700 hover:text-primary-pink transition-colors font-medium py-1 px-2 sm:px-4 rounded-lg hover:bg-white text-sm flex items-center"
    >
      {label}
    </Link>
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
          animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
          exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <nav className="py-2 sm:py-4 space-y-1 sm:space-y-2 border-t border-gray-200">
            {MENU_ITEMS.map((item) => renderMenuItem(item.to, item.label))}
            <div className="flex justify-center pt-2 sm:pt-4">
              <Button 
                variant={ButtonVariant.PRIMARY}
                size={ButtonSize.SM}
                to="#pricing"
                onClick={onClose}
              >
                Начать обучение
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeaderMobileMenu;