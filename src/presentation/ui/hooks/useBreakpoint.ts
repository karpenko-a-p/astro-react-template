import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

export type Breakpoint = 'mobile' | 'tablet' | 'laptop' | 'desktop'

/**
 * Брэйкпоинт
 */
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');

  useEffect(() => {
    const resize = throttle(() => {
      if (window.innerWidth <= 575)
        return setBreakpoint('mobile');

      if (window.innerWidth <= 767)
        return setBreakpoint('tablet');

      if (window.innerWidth <= 1023)
        return setBreakpoint('laptop');

      setBreakpoint('desktop');
    }, 100);

    document.addEventListener('resize', resize);

    return () => document.removeEventListener('resize', resize);
  }, []);

  return {
    mobile: breakpoint === 'mobile',
    tablet: breakpoint === 'tablet',
    laptop: breakpoint === 'laptop',
    desktop: breakpoint === 'desktop',
  };
};
