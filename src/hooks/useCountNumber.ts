import { useEffect, useRef, useState } from 'react';

const easeOutSine = (t: number): number => {
  return t === 1 ? 1 : Math.sin(t * (Math.PI / 2));
};

export const useCountingNumber = (value: number) => {
  const [count, setCount] = useState(0);
  const [lastCount, setLastCount] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const duration = 1000;
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  function handleCountingNumber(start: number, end: number) {
    if (start === end) return;
    let current = 0;

    intervalRef.current = window.setInterval(() => {
      const progress = easeOutSine(++current / totalFrame);

      setCount(Math.round(start + (end - start) * progress));
      setLastCount(Math.round(start + (end - start) * progress));

      if (progress === 1) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
      }
    }, frameRate);
  }

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    handleCountingNumber(lastCount, value);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [value]);

  return count;
};
