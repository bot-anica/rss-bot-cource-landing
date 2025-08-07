import { useState, useEffect } from 'react';

export interface GeolocationResult {
  location: string | null;
  loading: boolean;
  error: string | null;
}

export const useGeolocation = (): GeolocationResult => {
  const [location, setLocation] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Используем дефолтную страну без сетевых запросов
    // Это решает проблемы с CORS и rate limiting
    setLocation('US'); // Fallback для стран не UA/RU
    setLoading(false);
  }, []);

  return { location, loading, error };
}; 