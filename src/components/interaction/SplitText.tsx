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
  replayOnView = false,
}: Interaction.SplitTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [cycle, setCycle] = useState(repeat ? 1 : 0);
  const wasInViewRef = useRef(false);
  const isInView = useInView(ref, {
    once: !(repeat || replayOnView),
    margin: '0px',
  });

  useEffect(() => {
    if (!repeat) return;

    const interval = window.setInterval(() => {
      setCycle((prev) => prev + 1);
    }, text.length * delay + 1000);

    return () => window.clearInterval(interval);
  }, [delay, repeat, text]);

  useEffect(() => {
    if (repeat) {
      return;
    }

    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (replayOnView) {
      if (isInView && !wasInViewRef.current) {
        timeout = globalThis.setTimeout(() => {
          setCycle((prev) => prev + 1);
        }, 0);
      }

      wasInViewRef.current = isInView;

      return () => {
        if (timeout) {
          globalThis.clearTimeout(timeout);
        }
      };
    }

    if (!isInView || cycle > 0) {
      return;
    }

    timeout = globalThis.setTimeout(() => {
      setCycle(1);
    }, 0);

    return () => {
      if (timeout) {
        globalThis.clearTimeout(timeout);
      }
    };
  }, [cycle, isInView, repeat, replayOnView]);

  const shouldAnimate = repeat || cycle > 0;
  const shouldShowAnimatedCharacters = replayOnView
    ? shouldAnimate && isInView
    : shouldAnimate;

  return (
    <p
      ref={ref}
      aria-label={text}
      className={classNames(
        baseStyles[variant],
        'inline-block break-words whitespace-pre-wrap',
        classes,
      )}
    >
      {shouldShowAnimatedCharacters ? (
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
