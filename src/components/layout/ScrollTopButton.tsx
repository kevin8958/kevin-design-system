import Button from '@/components/action/Button';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LuArrowUp } from 'react-icons/lu';

const ScrollTopButton = ({ scrollTargetRef }: Layout.ScrollTopButtonProps) => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = scrollTargetRef?.current;

    const updateVisibility = () => {
      const scrollTop = Math.max(window.scrollY, target?.scrollTop ?? 0);
      setIsVisible(scrollTop > 0);
    };

    updateVisibility();

    if (target) {
      target.addEventListener('scroll', updateVisibility, { passive: true });
    }

    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => {
      if (target) {
        target.removeEventListener('scroll', updateVisibility);
      }
      window.removeEventListener('scroll', updateVisibility);
    };
  }, [pathname, scrollTargetRef]);

  const handleClick = () => {
    const target = scrollTargetRef?.current;

    if (target) {
      target.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`pointer-events-none fixed bottom-6 right-6 z-50 transition-all duration-200 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-3 opacity-0'
      }`}
    >
      <Button
        aria-label="Back to top"
        shape="circle"
        size="md"
        variant="outline"
        color="neutral"
        classes={`pointer-events-auto size-10 border-neutral-300/90 bg-white/80 shadow-md backdrop-blur-sm dark:border-neutral-700/90 dark:bg-neutral-900/80 ${
          isVisible ? '' : 'pointer-events-none'
        }`}
        onClick={handleClick}
        icon={<LuArrowUp size={18} />}
      />
    </div>
  );
};

export default ScrollTopButton;
