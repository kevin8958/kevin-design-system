import classNames from 'classnames';
import { cva } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { LuCircleAlert, LuCircleCheck, LuInfo, LuTriangleAlert, LuX } from 'react-icons/lu';
import Button from '@/components/action/Button';

const toastVariants = cva(
  'relative flex w-full max-w-md items-start gap-3 overflow-hidden rounded-2xl border px-4 py-4 text-white shadow-[0_28px_56px_-22px_rgba(15,23,42,0.82),0_-12px_24px_-18px_rgba(15,23,42,0.52)] transition-all duration-200 ease-in-out',
  {
    variants: {
      variant: {
        info: 'border-info bg-info',
        success: 'border-success bg-success',
        warning: 'border-warning bg-warning',
        danger: 'border-danger bg-danger',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
);

const iconMap = {
  info: LuInfo,
  success: LuCircleCheck,
  warning: LuTriangleAlert,
  danger: LuCircleAlert,
};

const placementClassMap: Record<Feedback.ToastPlacement, string> = {
  'top-left': 'left-4',
  'top-center': 'left-1/2 -translate-x-1/2',
  'top-right': 'right-4',
  'bottom-left': 'left-4',
  'bottom-center': 'left-1/2 -translate-x-1/2',
  'bottom-right': 'right-4',
};

const TOAST_STACK_GAP = 34;
const TOAST_EDGE_OFFSET = 16;
const TOAST_EXIT_DURATION = 220;

const Toast = ({
  title,
  description,
  variant = 'info',
  placement,
  autoClose,
  stackIndex = 0,
  closable = false,
  onClose,
  classes,
}: Feedback.ToastProps) => {
  const Icon = iconMap[variant];
  const [isVisible, setIsVisible] = useState(true);
  const closeTimerRef = useRef<number | null>(null);
  const notifyTimerRef = useRef<number | null>(null);
  const progressTimerRef = useRef<number | null>(null);
  const startedAtRef = useRef<number | null>(null);
  const hasRequestedCloseRef = useRef(false);
  const [progress, setProgress] = useState(100);

  const clearAutoCloseTimers = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (progressTimerRef.current) {
      window.clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
  }, []);

  const clearTimers = useCallback(() => {
    clearAutoCloseTimers();

    if (notifyTimerRef.current) {
      window.clearTimeout(notifyTimerRef.current);
      notifyTimerRef.current = null;
    }
  }, [clearAutoCloseTimers]);

  const requestClose = useCallback(() => {
    if (hasRequestedCloseRef.current) return;

    hasRequestedCloseRef.current = true;
    clearAutoCloseTimers();
    setIsVisible(false);

    notifyTimerRef.current = window.setTimeout(() => {
      onClose?.();
    }, TOAST_EXIT_DURATION);
  }, [clearAutoCloseTimers, onClose]);

  useEffect(() => {
    if (!autoClose || autoClose <= 0 || !isVisible) return undefined;

    hasRequestedCloseRef.current = false;
    startedAtRef.current = Date.now();

    closeTimerRef.current = window.setTimeout(() => {
      requestClose();
    }, autoClose);

    progressTimerRef.current = window.setInterval(() => {
      if (!startedAtRef.current) return;

      const elapsed = Date.now() - startedAtRef.current;
      const nextProgress = Math.max(0, 100 - (elapsed / autoClose) * 100);
      setProgress(nextProgress);
    }, 50);

    return () => {
      clearAutoCloseTimers();
    };
  }, [autoClose, clearAutoCloseTimers, isVisible, requestClose]);

  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, [clearTimers]);

  const placementStyle = useMemo(() => {
    if (!placement) return undefined;

    const offset = TOAST_EDGE_OFFSET + stackIndex * TOAST_STACK_GAP;
    const isTop = placement.startsWith('top');

    return {
      ...(isTop ? { top: offset } : { bottom: offset }),
      zIndex: 120 + stackIndex,
    };
  }, [placement, stackIndex]);

  const motionOffset = placement?.startsWith('bottom') ? 16 : -16;

  const toastContent = (
    <motion.div
      initial={{ opacity: 0, y: motionOffset, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: motionOffset, scale: 0.96 }}
      transition={{ duration: TOAST_EXIT_DURATION / 1000, ease: [0.23, 1, 0.32, 1] }}
      className={classNames(toastVariants({ variant }), placement && 'pointer-events-auto', classes)}
      role="status"
      aria-live="polite"
    >
      <span data-testid="toast-icon" className="mt-0.5 shrink-0 text-lg text-white">
        <Icon />
      </span>

      <div className="min-w-0 flex-1">
        {title && <p className="font-semibold text-white">{title}</p>}
        {description && (
          <p className="mt-1 text-sm text-white/85">{description}</p>
        )}
      </div>

      {closable && (
        <Button
          type="button"
          variant="clear"
          color="neutral"
          size="sm"
          classes="!p-2 -mr-1 -mt-1 !text-white hover:!bg-white/10 dark:!text-white dark:hover:!bg-white/10"
          aria-label="Close toast"
          onClick={requestClose}
        >
          <LuX size={16} />
        </Button>
      )}

      {autoClose && autoClose > 0 && (
        <span
          data-testid="toast-progress-track"
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2 overflow-hidden bg-neutral-950/18"
        >
          <span
            data-testid="toast-progress-bar"
            className="block h-full bg-neutral-950/62 transition-[width] duration-75"
            style={{ width: `${progress}%` }}
          />
        </span>
      )}
    </motion.div>
  );

  return (
    <AnimatePresence initial={false}>
      {isVisible &&
        (placement ? (
          <div
            data-testid="toast-positioner"
            className={classNames(
              'pointer-events-none absolute z-[120] w-full max-w-md',
              placementClassMap[placement],
            )}
            style={placementStyle}
          >
            {toastContent}
          </div>
        ) : (
          toastContent
        ))}
    </AnimatePresence>
  );
};

export default Toast;
