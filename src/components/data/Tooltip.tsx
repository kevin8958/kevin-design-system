import {
  autoUpdate,
  arrow,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import classNames from 'classnames';
import { cva } from 'class-variance-authority';
import { useState } from 'react';

const tooltipVariants = cva('z-[80] rounded-lg px-3 py-2 text-xs shadow-lg', {
  variants: {
    color: {
      neutral:
        'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900',
      primary:
        'bg-secondary-500 text-neutral-100 dark:bg-primary-400 dark:text-neutral-900',
      info: 'bg-info text-white',
      success: 'bg-success text-white',
      warning: 'bg-warning text-white',
      danger: 'bg-danger text-white',
    },
  },
  defaultVariants: {
    color: 'neutral',
  },
});

const tooltipArrowVariants = cva(
  'pointer-events-none absolute size-2.5 rotate-45',
  {
    variants: {
      color: {
        neutral: 'bg-neutral-900 dark:bg-neutral-100',
        primary: 'bg-secondary-500 dark:bg-primary-400',
        info: 'bg-info',
        success: 'bg-success',
        warning: 'bg-warning',
        danger: 'bg-danger',
      },
    },
    defaultVariants: {
      color: 'neutral',
    },
  },
);

const Tooltip = ({
  content,
  children,
  position = 'top',
  color = 'neutral',
  classes,
}: Data.TooltipProps) => {
  const [open, setOpen] = useState(false);
  const [arrowElement, setArrowElement] = useState<HTMLSpanElement | null>(null);

  const { refs, floatingStyles, context, placement, middlewareData } =
    useFloating({
      open,
      onOpenChange: setOpen,
      placement: position,
      whileElementsMounted: autoUpdate,
      middleware: [
        offset(12),
        flip(),
        shift({ padding: 8 }),
        arrow({ element: arrowElement }),
      ],
    });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });
  const { setReference, setFloating } = refs;
  const side = placement.split('-')[0] as Data.TooltipPosition;
  const staticSideMap = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  } as const;
  const staticSide = staticSideMap[side];

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <span
        ref={setReference}
        className="inline-flex"
        {...getReferenceProps()}
      >
        {children}
      </span>
      {open && (
        <div
          ref={setFloating}
          style={floatingStyles}
          className={classNames(
            tooltipVariants({ color }),
            classes,
          )}
          {...getFloatingProps()}
        >
          {content}
          <span
            ref={setArrowElement}
            data-testid="tooltip-arrow"
            className={tooltipArrowVariants({ color })}
            style={{
              left:
                middlewareData.arrow?.x != null
                  ? `${middlewareData.arrow.x}px`
                  : '',
              top:
                middlewareData.arrow?.y != null
                  ? `${middlewareData.arrow.y}px`
                  : '',
              [staticSide]: '-5px',
            }}
            aria-hidden="true"
          />
        </div>
      )}
    </>
  );
};

export default Tooltip;
