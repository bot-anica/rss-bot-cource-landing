import { useMemo } from 'react';
import { HeroService } from '../services/HeroService';

export const useHero = () => {
  const heroData = useMemo(() => HeroService.getHeroData(), []);

  return { heroData };
};