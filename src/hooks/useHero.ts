import { useMemo } from 'react';
import { HeroService, type HeroData } from '../services/HeroService';

export const useHero = () => {
  const heroData = useMemo(() => HeroService.getHeroData(), []);
  const isDataValid = useMemo(() => HeroService.validateHeroData(), []);

  return {
    heroData,
    isDataValid
  };
};