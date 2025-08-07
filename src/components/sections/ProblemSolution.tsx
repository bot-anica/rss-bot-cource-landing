import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Frown, Check, Sparkles, Zap, Star, Heart } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import BackgroundBlob from '../ui/BackgroundBlob';
import BackgroundIcon from '../ui/BackgroundIcon';
import BackgroundCircle from '../ui/BackgroundCircle';

const ProblemSolution: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  const problems = [
    "Сложная архитектура",
    "Отсутствие практики", 
    "MVP-ловушка",
    "Интеграции"
  ];

  const solutions = [
    "Профессиональная архитектура",
    "Пошаговый подход",
    "Production-ready код",
    "Современные технологии"
  ];

  const icons = [Sparkles, Zap, Star, Heart];

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Custom background elements */}
      <BackgroundCircle 
        position="top-left" 
        size="large" 
        color="blue" 
        opacity={0.15} 
        animation="float" 
        delay={0} 
      />
      <BackgroundCircle 
        position="bottom-right" 
        size="large" 
        color="pink" 
        opacity={0.12} 
        animation="drift" 
        delay={3} 
      />
      <BackgroundIcon 
        icon="sparkles" 
        position="top-right" 
        size={35} 
        color="primary-pink" 
        opacity={0.25} 
        animation="float" 
        delay={0} 
      />
      <BackgroundIcon 
        icon="star" 
        position="bottom-left" 
        size={28} 
        color="primary-blue" 
        opacity={0.2} 
        animation="bounce" 
        delay={2} 
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Проблемы и решения
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Большинство разработчиков сталкиваются с этими вызовами. Мы знаем, как их решить.
          </p>
        </motion.div>

        {/* Problems and Solutions Grid */}
        <div className="mb-16">
          <div className="relative">
            {/* Background accent line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -translate-x-1/2"></div>
            
            <div className="space-y-8">
              {problems.map((problem, index) => {
                const IconComponent = icons[index];
                
                return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex items-center gap-8`}
                  >
                    {/* Problem side */}
                    <div className={`flex-1 text-right`}>
                      <div className={`inline-flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 justify-start`}>
                        <span className="line-through text-gray-500 font-medium">{problem}</span>
                        <IconComponent className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    
                    {/* Center connector */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                        <div className="w-3 h-3 bg-primary-pink rounded-full"></div>
                      </div>
                      {index < problems.length - 1 && (
                        <div className="absolute top-12 left-1/2 w-px h-8 bg-gray-200 transform -translate-x-1/2"></div>
                      )}
                    </div>

                    {/* Solution side */}
                    <div className={`flex-1 text-left`}>
                      <div className={`inline-flex items-center gap-3 p-4 rounded-xl bg-primary-pink/5 border border-primary-pink/20 justify-end`}>
                        <IconComponent className="w-5 h-5 text-primary-pink/60" />
                        <span className="font-bold text-primary-dark">{solutions[index]}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Compact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-pink to-primary-blue rounded-xl p-6 text-white">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Lightbulb className="w-6 h-6" />
              <h3 className="text-lg font-bold">Готовы решить эти проблемы?</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Присоединяйтесь к курсу и создайте профессионального Telegram-бота
            </p>
            <a href="#pricing" className="inline-flex items-center gap-2 bg-white text-primary-dark font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              <span>Начать обучение</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution; 