import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { FC } from 'react';

export interface HeaderMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const HeaderMobileMenu: FC<HeaderMobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="py-4 space-y-4 border-t border-gray-200">
            <a 
              href="#course" 
              className="block text-gray-700 hover:text-primary-pink transition-colors font-medium"
              onClick={onClose}
            >
              Курс
            </a>
            <a 
              href="#pricing" 
              className="block text-gray-700 hover:text-primary-pink transition-colors font-medium"
              onClick={onClose}
            >
              Цены
            </a>
            <a 
              href="#faq" 
              className="block text-gray-700 hover:text-primary-pink transition-colors font-medium"
              onClick={onClose}
            >
              FAQ
            </a>
            <Link 
              to="/payment/full" 
              className="btn-primary block text-center"
              onClick={onClose}
            >
              Начать обучение
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeaderMobileMenu; 