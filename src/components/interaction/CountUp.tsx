'use client';

import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

const CountUp = ({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd,
  repeat = false,
}: Interaction.CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  const startValue = direction === 'down' ? to : from;
  const endValue = direction === 'down' ? from : to;

  const motionValue = useMotionValue(startValue);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    restDelta: 0.001,
  });

  const isInView = useInView(ref, { once: !repeat, margin: '0px' });

  const getDecimalPlaces = (num: number) => {
    const str = num.toString();
    if (!str.includes('.')) return 0;

    const decimals = str.split('.')[1];
    return parseInt(decimals, 10) !== 0 ? decimals.length : 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: maxDecimals,
        maximumFractionDigits: maxDecimals,
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);
      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator],
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(startValue);
    }
  }, [formatValue, startValue]);

  useEffect(() => {
    let startTimeoutId: ReturnType<typeof setTimeout> | undefined;
    let endTimeoutId: ReturnType<typeof setTimeout> | undefined;
    let restartTimeoutId: ReturnType<typeof setTimeout> | undefined;

    const runAnimation = () => {
      motionValue.jump(startValue);

      if (ref.current) {
        ref.current.textContent = formatValue(startValue);
      }

      startTimeoutId = setTimeout(() => {
        onStart?.();
        motionValue.set(endValue);

        endTimeoutId = setTimeout(() => {
          onEnd?.();

          if (repeat) {
            restartTimeoutId = setTimeout(runAnimation, 1000);
          }
        }, duration * 1000 + 200);
      }, delay * 1000 + 100);
    };

    if (isInView && startWhen) {
      runAnimation();
    }

    return () => {
      if (startTimeoutId) clearTimeout(startTimeoutId);
      if (endTimeoutId) clearTimeout(endTimeoutId);
      if (restartTimeoutId) clearTimeout(restartTimeoutId);
    };
  }, [
    delay,
    duration,
    endValue,
    formatValue,
    isInView,
    motionValue,
    onEnd,
    onStart,
    repeat,
    startValue,
    startWhen,
  ]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [formatValue, springValue]);

  return <span ref={ref} className={className} />;
};

export default CountUp;
