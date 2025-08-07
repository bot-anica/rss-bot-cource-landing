import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Check, TrendingUp, ArrowRight, Rocket, Bot, FileText, Database, Keyboard, Bell, Shield, Server, BarChart, Zap, Settings, CheckCircle, Lightbulb, Code, Globe, Zap as ZapIcon, Cpu } from 'lucide-react';
import renderDashboard from '../../assets/images/render-dashboard.png';
import telegramBot from '../../assets/images/telegram-bot.png';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { STEPS_TO_SUCCESS } from '../../utils/constants';
import BackgroundBlob from '../ui/BackgroundBlob';
import BackgroundIcon from '../ui/BackgroundIcon';

const stepsToSuccessIcons = [
  Lightbulb,
  Code,
  Shield,
  Globe,
]

const PathToSuccess: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section ref={ref} id="path-to-success" className="py-20 bg-white relative w-full overflow-hidden">
      {/* Background elements */}
      <BackgroundBlob 
        position="top-right" 
        size="medium" 
        color="blue" 
        opacity={0.04} 
        animation="float" 
        delay={0} 
      />
      <BackgroundBlob 
        position="bottom-left" 
        size="large" 
        color="pinkPurple" 
        opacity={0.03} 
        animation="drift" 
        delay={2} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">
            Путь к успеху
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            От простой идеи до полнофункционального бота, работающего в продакшене 24/7
          </p>
        </motion.div>

        {/* Success Steps Grid */}
        <div className="grid grid-col-2 bg-white rounded-2xl p-6 transition-all duration-300 border border-gray-300 hover:border-primary-pink/30 h-full flex flex-col overflow-hidden">
          <div className="grid gap-6">
            {STEPS_TO_SUCCESS.map((step, index) => {
              // const IconComponent = stepsToSuccessIcons[index];
              // const isEven = (index + 1) % 2 === 0;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Background Icon */}
                  {/* <div className={`absolute ${isEven ? '-bottom-4 -right-12' : '-top-4 -right-12'} opacity-5`}>
                    <IconComponent className="w-48 h-48 text-primary-blue" />
                  </div> */}

                  {/* Header - номер и название на одной строке */}
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="w-10 h-10 bg-transparent border-2 border-primary-blue/30 rounded-full flex items-center justify-center text-primary-blue font-bold text-sm">
                      {step.id}
                    </div>
                    <h3 className="text-md font-bold text-primary-dark leading-tight flex-1">
                      {step.title}
                    </h3>
                  </div>

                  {/* Content - flex-grow для заполнения пространства */}
                  <div className="flex-grow flex flex-col relative z-10">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="relative">
            <div className="w-96 absolute -bottom-24 right-12 rounded-xl overflow-hidden">
              <img src={telegramBot} alt="render-dashboard" className="w-full h-full object-cover" />
            </div>
            <div className="w-96 absolute -bottom-12 -right-12 rounded-xl overflow-hidden">
              <img src={renderDashboard} alt="render-dashboard" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathToSuccess; 