import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundCircle from '../ui/BackgroundCircle';
import BackgroundIcon from '../ui/BackgroundIcon';
import type { FC } from 'react';

const Hero: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="bg-white relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      {/* <div className="absolute inset-0 gradient-bg opacity-5"></div> */}
      
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/5 to-primary-blue/5"></div> */}

      {/* Custom background elements */}
      <BackgroundCircle 
        position="top-left" 
        size="large" 
        color="pinkPurple" 
        opacity={0.08} 
        animation="breathe" 
        delay={0} 
      />
      <BackgroundCircle 
        position="bottom-right" 
        size="large" 
        color="purplePink" 
        opacity={0.06} 
        animation="float" 
        delay={4} 
      />
      <BackgroundIcon 
        icon="sparkles" 
        position="top-right" 
        size={40} 
        color="primary-pink" 
        opacity={0.3} 
        animation="float" 
        delay={0} 
      />
      <BackgroundIcon 
        icon="sparkles" 
        position="bottom-left" 
        size={30} 
        color="primary-blue" 
        opacity={0.25} 
        animation="wave" 
        delay={3} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mb-40">
            <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-dark mb-4 leading-tight"
            >
              Создайте профессионального
              <span className="text-gradient block"> Telegram-бота для новостей</span>
            </motion.h1>
            
            {/* <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed"
            >
                От идеи до продакшена: полный курс по разработке масштабируемого новостного бота за 12 уроков
            </motion.p> */}

            <motion.p 
                variants={itemVariants}
                className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
            >
                Научитесь создавать профессиональные боты с нуля и получите готовый проект для портфолио
            </motion.p>
          </div>

          <div>
            {/* CTA Section */}
            <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Link to="#pricing" className="btn-primary btn-lg group">
                <span>Начать обучение</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <Link to="#course" className="btn-secondary btn-lg group">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>Смотреть программу</span>
              </Link>
            </motion.div>

            {/* Additional Benefits */}
            <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
                <div className="flex items-center gap-2 px-3 py-1 bg-primary-blue/10 rounded-full border border-primary-blue/20">
                  <span className="text-green-500">✔</span>
                  <span className="text-sm font-medium text-primary-blue">Доступ навсегда</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-primary-blue/10 rounded-full border border-primary-blue/20">
                  <span className="text-green-500">✔</span>
                  <span className="text-sm font-medium text-primary-blue">Готовые файлы</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-primary-blue/10 rounded-full border border-primary-blue/20">
                  <span className="text-green-500">✔</span>
                  <span className="text-sm font-medium text-primary-blue">Практические результаты</span>
                </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;