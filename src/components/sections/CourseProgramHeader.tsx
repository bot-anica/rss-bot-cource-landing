import { motion } from 'framer-motion';

interface CourseProgramHeaderProps {
  isIntersecting: boolean;
  onPrevSlide: () => void;
  onNextSlide: () => void;
}

const CourseProgramHeader: React.FC<CourseProgramHeaderProps> = ({ 
  isIntersecting, 
  onPrevSlide, 
  onNextSlide 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12"
    >
      <div className="mb-8 lg:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
          Программа курса
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mb-4">
          12 практических уроков, каждый из которых приводит к конкретному результату
        </p>
        <div className="inline-flex items-center px-3 py-1 bg-primary-blue/10 rounded-full border border-primary-blue/20">
          <span className="text-sm font-medium text-primary-blue">
            Каждый урок заканчивается практическим результатом
          </span>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <button 
          onClick={onPrevSlide}
          className="cursor-pointer w-12 h-12 bg-white rounded-full border border-primary-blue/30 flex items-center justify-center text-gray-600 hover:text-primary-pink transition-all duration-300 group"
        >
          <svg className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={onNextSlide}
          className="cursor-pointer w-12 h-12 bg-white rounded-full border border-primary-blue/30 flex items-center justify-center text-gray-600 hover:text-primary-pink transition-all duration-300 group"
        >
          <svg className="w-6 h-6 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default CourseProgramHeader; 