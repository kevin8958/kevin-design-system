import {
  autoUpdate,
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
import { useState } from 'react';

const Tooltip = ({
  content,
  children,
  position = 'top',
  classes,
}: Data.TooltipProps) => {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: position,
    whileElementsMounted: autoUpdate,
    middleware: [offset(10), flip(), shift({ padding: 8 })],
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });
  const { setReference, setFloating } = refs;

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
            'z-[80] rounded-lg bg-neutral-900 px-3 py-2 text-xs text-white shadow-lg dark:bg-neutral-100 dark:text-neutral-900',
            classes,
          )}
          {...getFloatingProps()}
        >
          {content}
        </div>
      )}
    </>
  );
};

export default Tooltip;
