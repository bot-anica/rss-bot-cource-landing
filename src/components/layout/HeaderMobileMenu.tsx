import { motion, AnimatePresence } from 'framer-motion';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

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
          initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
          animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
          exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <nav className="py-4 sm:py-6 space-y-2 sm:space-y-4 border-t border-gray-200 bg-white">
            <Link 
              to="#course"
              onClick={onClose}
              className="block w-full text-left text-gray-700 hover:text-primary-pink transition-colors font-medium py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-50 text-sm sm:text-base flex items-center"
            >
              Курс
            </Link>
            <Link 
              to="#pricing"
              onClick={onClose}
              className="block w-full text-left text-gray-700 hover:text-primary-pink transition-colors font-medium py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-50 text-sm sm:text-base flex items-center"
            >
              Цены
            </Link>
            <Link 
              to="#faq"
              onClick={onClose}
              className="block w-full text-left text-gray-700 hover:text-primary-pink transition-colors font-medium py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-50 text-sm sm:text-base flex items-center"
            >
              FAQ
            </Link>
            <div className="pt-2 sm:pt-4">
              <Link 
                to="#pricing"
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-pink to-primary-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-pink focus:ring-offset-2 py-3 px-4 sm:px-6 text-sm sm:text-base w-full text-center justify-center"
              >
                Начать обучение
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeaderMobileMenu;