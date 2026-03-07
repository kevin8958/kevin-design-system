'use client';

import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
  repeat?: boolean;
}

export default function CountUp({
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
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const startValue = direction === 'down' ? to : from;
  const endValue = direction === 'down' ? from : to;

  const motionValue = useMotionValue(startValue);

  // 스프링 설정을 좀 더 '정확하게' 반응하도록 조정
  const springValue = useSpring(motionValue, {
    damping: 30, // 관성을 조금 더 억제
    stiffness: 100,
    restDelta: 0.001, // 아주 작은 차이까지 계산
  });

  const isInView = useInView(ref, { once: !repeat, margin: '0px' });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      return parseInt(decimals) !== 0 ? decimals.length : 0;
    }
    return 0;
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
    let timeoutId: NodeJS.Timeout;
    let repeatTimeoutId: NodeJS.Timeout;

    const runAnimation = () => {
      // 1. 시작점으로 즉시 '점프'
      motionValue.jump(startValue);

      // 2. [핵심] 화면에 보이는 텍스트를 즉시 초기값으로 강제 업데이트
      // 스프링이 리셋되는 동안 이전 숫자가 남아있지 않게 합니다.
      if (ref.current) {
        ref.current.textContent = formatValue(startValue);
      }

      // 3. 스프링이 완전히 0(또는 시작값)에 안착할 시간을 충분히 줍니다. (100ms)
      timeoutId = setTimeout(
        () => {
          if (typeof onStart === 'function') onStart();
          motionValue.set(endValue);

          // 4. 애니메이션 완료 대기 (duration보다 넉넉하게 잡아야 스프링이 멈춥니다)
          repeatTimeoutId = setTimeout(
            () => {
              if (typeof onEnd === 'function') onEnd();

              if (repeat) {
                // 다시 시작하기 전 1초 대기
                setTimeout(runAnimation, 1000);
              }
            },
            duration * 1000 + 200,
          ); // 스프링의 잔여 진동을 위해 200ms 여유 추가
        },
        delay * 1000 + 100,
      );
    };

    if (isInView && startWhen) {
      runAnimation();
    }

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(repeatTimeoutId);
    };
  }, [
    isInView,
    startWhen,
    motionValue,
    startValue,
    endValue,
    delay,
    duration,
    repeat,
    formatValue,
  ]);

  // 글자 업데이트 리스너
  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });
    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}
