import { useState, useEffect } from 'react';
import { ProblemSolutionService, type ProblemSolutionData } from '../services/ProblemSolutionService';

export const useProblemSolution = () => {
  const [data, setData] = useState<ProblemSolutionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const service = ProblemSolutionService.getInstance();
        const problemSolutionData = service.getProblemSolutionData();
        
        if (!service.validateData(problemSolutionData)) {
          throw new Error('Invalid problem solution data');
        }
        
        setData(problemSolutionData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load problem solution data');
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return {
    data,
    isLoading,
    error
  };
};