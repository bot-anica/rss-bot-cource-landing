import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

interface FAQBannerProps {
  isIntersecting: boolean;
}

const FAQBanner: React.FC<FAQBannerProps> = ({ isIntersecting }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="mt-16 bg-primary-blue/5 rounded-xl p-8 text-center border border-primary-blue/30"
    >
      <div className="flex justify-center mb-4">
        <HelpCircle className="w-8 h-8 text-primary-pink" />
      </div>
      <h3 className="text-xl font-semibold text-primary-dark mb-4">
        Не нашли ответ?
      </h3>
      <p className="text-gray-600">
        Все материалы курса содержат детальные объяснения и пошаговые инструкции для самостоятельного изучения
      </p>
    </motion.div>
  );
};

export default FAQBanner; 