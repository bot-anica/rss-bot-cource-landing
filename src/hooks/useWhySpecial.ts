import { useState, useCallback } from 'react';
import { FeaturesService } from '../services/FeaturesService';
import { StatsService } from '../services/StatsService';

// Кэшируем данные на уровне модуля
const features = FeaturesService.getAllFeatures();
const stats = StatsService.getAllStats();

export const useWhySpecial = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const setActiveFeatureIndex = useCallback((index: number) => {
    if (index >= 0 && index < features.length) {
      setActiveFeature(index);
    }
  }, []);

  return {
    features,
    stats,
    activeFeature,
    isDataValid: features.length > 0 && stats.length > 0,
    setActiveFeatureIndex,
  };
}; 