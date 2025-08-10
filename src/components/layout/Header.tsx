import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import HeaderNav from './HeaderNav';
import HeaderMobileMenu from './HeaderMobileMenu';
import type { FC } from 'react';
import { ButtonVariant, ButtonSize } from '../../types/common';
import { Button } from '../common';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрываем меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Удалили функцию handleScrollToPricing, так как теперь используем якорные ссылки

  return (
    <motion.header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled || isOpen 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-[48px] sm:h-[56px] lg:h-[72px] py-1 sm:py-2 lg:py-4">
          <Link 
            to="/" 
            className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-dark hover:text-primary-pink transition-colors truncate flex items-center h-full"
          >
            Telegram Bot Course
          </Link>
          
          {/* Desktop Navigation */}
          <HeaderNav />
          
          {/* CTA Button */}
          <div className="hidden md:block flex items-center">
            <Button
              variant={ButtonVariant.PRIMARY}
              size={ButtonSize.SM}
              to="#pricing"
            >
              Начать обучение
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0 flex items-center justify-center w-10 h-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center w-full h-full"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center w-full h-full"
                >
                  <Menu size={20} className="sm:w-6 sm:h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <HeaderMobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </motion.header>
  );
};

export default Header;