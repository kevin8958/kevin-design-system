import {
  FloatingPortal,
  Placement,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const popoverArrowBase =
  'pointer-events-none absolute size-3 rotate-45 rounded-[3px] border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950';

const Popover = ({
  trigger,
  children,
  title,
  description,
  open,
  defaultOpen = false,
  onOpenChange,
  side = 'bottom',
  align = 'center',
  width,
  showArrow = true,
  disabled = false,
  portal = true,
  classes,
  contentClasses,
}: Action.PopoverProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [arrowElement, setArrowElement] = useState<HTMLSpanElement | null>(null);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : uncontrolledOpen;

  const placement = useMemo(() => {
    return `${side}${align === 'center' ? '' : `-${align}`}` as Placement;
  }, [align, side]);

  const setOpen = (nextOpen: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  const { refs, floatingStyles, context, placement: resolvedPlacement, middlewareData } =
    useFloating({
      open: isOpen,
      onOpenChange: setOpen,
      placement,
      middleware: [
        offset(12),
        flip({ fallbackAxisSideDirection: 'end' }),
        shift({ padding: 10 }),
        ...(showArrow ? [arrow({ element: arrowElement })] : []),
      ],
      whileElementsMounted: autoUpdate,
    });
  const { setReference, setFloating } = refs;

  const click = useClick(context, { enabled: !disabled });
  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });
  const role = useRole(context, { role: 'dialog' });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const resolvedSide = resolvedPlacement.split('-')[0] as Action.PopoverSide;
  const staticSideMap = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  } as const;
  const staticSide = staticSideMap[resolvedSide];

  const floatingNode = (
    <div
      ref={setFloating}
      style={{
        ...floatingStyles,
        width: width ? `${width}px` : undefined,
        zIndex: 9999,
      }}
      {...getFloatingProps()}
    >
      <motion.div
        initial={{ opacity: 0, y: resolvedSide === 'top' ? 8 : -8, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: resolvedSide === 'top' ? 8 : -8, scale: 0.96 }}
        transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
        className={classNames(
          'relative w-[min(320px,calc(100vw-1rem))] rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl dark:border-neutral-800 dark:bg-neutral-950',
          classes,
          contentClasses,
        )}
      >
        {(title || description) && (
          <div className="space-y-1">
            {title && (
              <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                {title}
              </div>
            )}
            {description && (
              <div className="text-sm text-neutral-600 dark:text-neutral-300">
                {description}
              </div>
            )}
          </div>
        )}

        {children && (
          <div
            className={classNames(
              'text-sm text-neutral-700 dark:text-neutral-200',
              title || description ? 'mt-3' : undefined,
            )}
          >
            {children}
          </div>
        )}

        {showArrow && (
          <span
            ref={setArrowElement}
            aria-hidden="true"
            data-testid="popover-arrow"
            className={popoverArrowBase}
            style={{
              left:
                middlewareData.arrow?.x != null
                  ? `${middlewareData.arrow.x}px`
                  : '',
              top:
                middlewareData.arrow?.y != null
                  ? `${middlewareData.arrow.y}px`
                  : '',
              [staticSide]: '-6px',
            }}
          />
        )}
      </motion.div>
    </div>
  );

  return (
    <div className="relative inline-flex">
      <span
        ref={setReference}
        className={classNames('inline-flex', disabled && 'cursor-not-allowed')}
        {...getReferenceProps()}
      >
        {trigger}
      </span>

      <AnimatePresence>
        {isOpen &&
          (portal ? (
        <FloatingPortal>{floatingNode}</FloatingPortal>
          ) : (
            floatingNode
          ))}
      </AnimatePresence>
    </div>
  );
};

export default Popover;
