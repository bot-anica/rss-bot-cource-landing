import { useState, useEffect } from 'react';
import { SuccessStoriesService, type SuccessStoriesData } from '../services/SuccessStoriesService';

export const useSuccessStories = () => {
  const [data, setData] = useState<SuccessStoriesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const service = SuccessStoriesService.getInstance();
        const successStoriesData = service.getSuccessStoriesData();
        
        if (!service.validateData(successStoriesData)) {
          throw new Error('Invalid success stories data');
        }
        
        setData(successStoriesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load success stories data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return {
    data,
    loading,
    error
  };
};