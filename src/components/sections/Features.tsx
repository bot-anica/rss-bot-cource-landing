import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Clock, Laptop } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import BackgroundCircle from '../ui/BackgroundCircle';
import BackgroundIcon from '../ui/BackgroundIcon';

const features = [
  {
    icon: <Rocket className="w-10 h-10 text-red-600" />,
    title: "12 практических уроков",
    subtitle: "Пошаговое обучение",
    description: "От основ до продвинутых техник разработки Telegram-ботов",
    bgGradient: "from-red-100 to-red-200"
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: "6+ часов контента",
    subtitle: "Глубокое погружение",
    description: "Детальные объяснения и практические примеры",
    bgGradient: "from-blue-100 to-blue-200"
  },
  {
    icon: <Laptop className="w-10 h-10 text-green-600" />,
    title: "Готовый проект",
    subtitle: "Для портфолио",
    description: "Полнофункциональный бот, готовый к деплою",
    bgGradient: "from-green-100 to-green-200"
  }
];

const Features: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section ref={ref} className="relative py-20">
      <BackgroundCircle 
        position="top-left" 
        size="medium" 
        color="white" 
        opacity={0.75} 
        animation="breathe" 
        delay={0} 
      />
      <BackgroundCircle 
        position="bottom-right" 
        size="large" 
        color="blue" 
        opacity={0.06} 
        animation="float" 
        delay={4} 
      />
      <BackgroundIcon 
        icon="moon" 
        position="top-right" 
        size={40} 
        color="primary-pink" 
        opacity={0.3} 
        animation="float" 
        delay={0} 
      />
      <BackgroundIcon 
        icon="cloud" 
        position="bottom-left" 
        size={40} 
        color="primary-blue" 
        opacity={0.25} 
        animation="wave" 
        delay={3} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Что вы получите
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Комплексный подход к обучению, который даст вам все необходимые навыки
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.bgGradient} rounded-2xl flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 