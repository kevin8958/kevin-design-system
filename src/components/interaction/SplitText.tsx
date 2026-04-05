import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

const baseStyles: Record<Interaction.SplitTextVariant, string> = {
  H1: 'text-[64px] leading-[1.2] font-bold',
  H2: 'text-[40px] leading-[1.3] font-bold',
  H3: 'text-[24px] leading-[1.4] font-bold',
  B1: 'text-[16px] leading-[1.6] font-thin',
  B2: 'text-[14px] leading-[1.6] font-thin',
  C1: 'text-[12px] leading-[1.6]',
};

const SplitTextCharacters = ({
  text,
  delay,
}: {
  text: string;
  delay: number;
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setActive(true);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  return text.split('').map((char, index) => (
    <span
      key={`${char}-${index}`}
      aria-hidden="true"
      className="inline-block"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0)' : 'translateY(1rem)',
        transitionProperty: 'opacity, transform',
        transitionDuration: '500ms',
        transitionTimingFunction: 'ease-out',
        transitionDelay: `${index * delay}ms`,
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
};

const SplitText = ({
  text,
  classes = '',
  variant = 'B1',
  delay = 40,
  repeat = false,
}: Interaction.SplitTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [cycle, setCycle] = useState(repeat ? 1 : 0);
  const isInView = useInView(ref, { once: !repeat, margin: '0px' });

  useEffect(() => {
    if (!repeat) return;

    const interval = window.setInterval(() => {
      setCycle((prev) => prev + 1);
    }, text.length * delay + 1000);

    return () => window.clearInterval(interval);
  }, [delay, repeat, text]);

  useEffect(() => {
    if (repeat || !isInView || cycle > 0) {
      return;
    }

    const timeout = globalThis.setTimeout(() => {
      setCycle(1);
    }, 0);

    return () => globalThis.clearTimeout(timeout);
  }, [cycle, isInView, repeat]);

  return (
    <p
      ref={ref}
      aria-label={text}
      className={classNames(
        baseStyles[variant],
        'inline-block break-words whitespace-pre-wrap text-neutral-900 dark:text-neutral-100',
        classes,
      )}
    >
      {cycle > 0 ? (
        <SplitTextCharacters key={cycle} text={text} delay={delay} />
      ) : (
        text.split('').map((char, index) => (
          <span
            key={`${char}-${index}`}
            aria-hidden="true"
            className="inline-block opacity-0"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))
      )}
    </p>
  );
};

export default SplitText;
