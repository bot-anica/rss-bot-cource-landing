import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useAnimatedSection } from '../../hooks/useAnimatedSection';
import { useWhySpecial } from '../../hooks/useWhySpecial';
import { Feature } from '../../services/FeaturesService';

const WhySpecial: FC = () => {
  const { ref, isIntersecting } = useAnimatedSection();
  const {
    features,
    stats,
    activeFeature,
    isDataValid,
    setActiveFeatureIndex,
  } = useWhySpecial();

  const handleFeatureClick = useCallback((index: number) => {
    setActiveFeatureIndex(index);
  }, [setActiveFeatureIndex]);

  // Проверяем, что данные загружены
  if (!isDataValid) {
    return (
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center">WhySpecial - Error Loading</h2>
        </div>
      </section>
    );
  }

  const currentFeature = features[activeFeature];

  return (
    <section ref={ref as any} className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Почему наш курс особенный?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы не просто учим создавать ботов — мы формируем профессиональное мышление разработчика
          </p>
        </motion.div>

        {/* Interactive Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Menu */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            {features.map((feature: Feature, index: number) => {
              const IconComponent = feature.icon;

              return (
                <button
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  className={`cursor-pointer bg-white p-4 rounded-xl border border-l-4 transition-all duration-300 ${
                    activeFeature === index
                      ? 'border-gray-300 hover:border-pink-300'
                      : 'border-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 flex items-center justify-center`}>
                      <IconComponent style={{ color: feature.color }} />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-lg ${
                        activeFeature === index 
                          ? 'text-black' 
                          : 'text-gray-700'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Right Content */}
          {currentFeature && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 transition-all duration-300 border border-gray-300 hover:border-pink-300 h-full flex flex-col"
            >
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl" style={{ background: `${currentFeature.color}33` }}>
                    <currentFeature.icon style={{ color: currentFeature.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {currentFeature.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {currentFeature.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    Что вы получите:
                  </h4>
                  <ul className="space-y-3">
                    {currentFeature.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        </div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-pink-50 via-blue-50 to-pink-50 rounded-3xl p-10 border border-pink-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold text-sm md:text-base leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(WhySpecial); 