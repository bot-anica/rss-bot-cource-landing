import { useMemo } from 'react';
import { PathToSuccessService } from '../services/PathToSuccessService';

export const usePathToSuccess = () => {
  const { header, steps, images } = useMemo(() => PathToSuccessService.getData(), []);

  return { header, steps, images };
};