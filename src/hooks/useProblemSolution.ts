import { useMemo } from 'react';
import { ProblemSolutionService } from '../services/ProblemSolutionService';

export const useProblemSolution = () => {
  const { header, items, ctaBlock } = useMemo(() => ProblemSolutionService.getData(), []);

  return { header, items, ctaBlock };
};