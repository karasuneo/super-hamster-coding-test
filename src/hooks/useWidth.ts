import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import mixinsStyles from '@/styles/mixins.module.scss';
import { windowWidthState } from '@/stores/windowWidth';

function useWidth() {
  const [windowWidth, setWindowWidth] = useRecoilState(windowWidthState);

  const breakpoints = {
    sm: parseInt(mixinsStyles.sm),
    md: parseInt(mixinsStyles.md),
    lg: parseInt(mixinsStyles.lg),
    xl: parseInt(mixinsStyles.xl),
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isBelowBreakpoint = (breakpoint: keyof typeof breakpoints) => {
    return windowWidth < breakpoints[breakpoint];
  };

  return {
    isBelowBreakpoint,
  };
}

export default useWidth;
