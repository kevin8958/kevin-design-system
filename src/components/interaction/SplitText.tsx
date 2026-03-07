'use client';

import { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';

const baseStyles: Record<string, string> = {
  H1: 'text-[64px] leading-[1.2] font-bold',
  H2: 'text-[40px] font-bold',
  H3: 'text-[24px] font-bold',
  B1: 'text-[16px] font-thin',
  B2: 'text-[14px] font-thin',
  C1: 'text-[12px]',
};

const SimpleSplitText: React.FC<Interaction.SplitTextProps> = ({
  text,
  classes = '',
  variant = 'B1',
  delay = 40,
  repeat = false,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!repeat) return;

    const interval = setInterval(
      () => {
        setCycle((prev) => prev + 1); // 트리거를 위해 상태 변경
      },
      text.length * delay + 1000,
    ); // 전체 애니메이션 길이 + 약간의 쉬는 시간

    return () => clearInterval(interval);
  }, [repeat, text, delay]);

  useEffect(() => {
    if (!repeat) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCycle((prev) => prev + 1);
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [repeat]);

  return (
    <p
      key={cycle} // 상태 변화에 따라 리렌더 → 애니메이션 재시작
      ref={ref}
      className={classNames(
        baseStyles[variant],
        'inline-block break-words whitespace-pre-wrap text-neutral-100',
        classes,
      )}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={classNames(
            'inline-block transform transition duration-500 ease-out',
            'translate-y-0 opacity-0',
          )}
          style={{
            animation: `fadeUp 0.5s ease-out forwards`,
            animationDelay: `${i * delay}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </p>
  );
};

export default SimpleSplitText;
