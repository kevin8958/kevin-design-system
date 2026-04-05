import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

const baseStyles: Record<Interaction.SplitTextVariant, string> = {
  H1: 'text-[64px] leading-[1.2] font-bold',
  H2: 'text-[40px] leading-[1.3] font-bold',
  H3: 'text-[24px] leading-[1.4] font-bold',
  B1: 'text-[16px] leading-[1.6] font-thin',
  B2: 'text-[14px] leading-[1.6] font-thin',
  C1: 'text-[12px] leading-[1.6]',
};

const SplitText = ({
  text,
  classes = '',
  variant = 'B1',
  delay = 40,
  repeat = false,
}: Interaction.SplitTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!repeat) return;

    const interval = window.setInterval(() => {
      setCycle((prev) => prev + 1);
    }, text.length * delay + 1000);

    return () => window.clearInterval(interval);
  }, [delay, repeat, text]);

  useEffect(() => {
    if (repeat) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      const timeout = globalThis.setTimeout(() => {
        setCycle((prev) => prev + 1);
      }, 0);

      return () => globalThis.clearTimeout(timeout);
    }

    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCycle((prev) => prev + 1);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [repeat]);

  return (
    <p
      key={cycle}
      ref={ref}
      className={classNames(
        baseStyles[variant],
        'inline-block break-words whitespace-pre-wrap text-neutral-900 dark:text-neutral-100',
        classes,
      )}
    >
      {text.split('').map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="inline-block translate-y-0 opacity-0"
          style={{
            animation: 'split-text-fade-up 0.5s ease-out forwards',
            animationDelay: `${index * delay}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </p>
  );
};

export default SplitText;
