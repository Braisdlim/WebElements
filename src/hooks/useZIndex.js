import { useMemo } from 'react';

export const useZIndex = (totalItems, currentIndex) => {
  return useMemo(() => {
    return totalItems - currentIndex;
  }, [totalItems, currentIndex]);
}; 