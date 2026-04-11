import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { LuChevronRight } from 'react-icons/lu';

const ActionSheet = ({
  isOpen,
  onClose,
  onSelect,
  title,
  description,
  items,
  size = 'sm',
  contained = false,
  classes,
}: Action.ActionSheetProps) => {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!panelRef.current) return;

      const target = event.target;
      if (!(target instanceof Node)) return;

      if (!panelRef.current.contains(target)) {
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [isOpen, onClose]);

  const verticalSizeClass =
    size === 'lg'
      ? 'sm:max-w-[34rem]'
      : size === 'md'
        ? 'sm:max-w-[30rem]'
        : 'sm:max-w-[26rem]';

  const actionRows = (
    <>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          disabled={item.disabled}
          onClick={() => {
            if (item.disabled) return;
            onSelect?.(item.id);
            onClose?.();
          }}
          className={classNames(
            'flex w-full cursor-pointer items-center gap-3 px-5 py-4 text-left transition',
            'hover:bg-neutral-50 dark:hover:bg-neutral-900/60',
            'disabled:cursor-not-allowed disabled:opacity-45',
          )}
        >
          {item.icon && (
            <span
              className={classNames(
                'shrink-0 text-lg text-neutral-500 dark:text-neutral-400',
                item.tone === 'danger' && 'text-danger dark:text-danger',
              )}
            >
              {item.icon}
            </span>
          )}

          <span className="min-w-0 flex-1">
            <span
              className={classNames(
                'block text-sm font-medium text-neutral-900 dark:text-neutral-50',
                item.tone === 'danger' && 'text-danger dark:text-danger',
              )}
            >
              {item.label}
            </span>
            {item.description && (
              <span className="mt-0.5 block text-sm text-neutral-500 dark:text-neutral-400">
                {item.description}
              </span>
            )}
          </span>

          <LuChevronRight
            className={classNames(
              'shrink-0 text-neutral-400 dark:text-neutral-500',
              item.tone === 'danger' && 'text-danger/65 dark:text-danger/70',
            )}
            size={16}
          />
        </button>
      ))}
    </>
  );

  const desktopActions = items.map((item) => (
    <button
      key={item.id}
      type="button"
      disabled={item.disabled}
      onClick={() => {
        if (item.disabled) return;
        onSelect?.(item.id);
        onClose?.();
      }}
      className={classNames(
        'inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition',
        'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800/80',
        'disabled:cursor-not-allowed disabled:opacity-45',
        item.tone === 'danger' && 'text-danger dark:text-danger',
      )}
    >
      {item.icon && <span className="text-base">{item.icon}</span>}
      <span>{item.label}</span>
    </button>
  ));

  const wrapperClassName = contained
    ? 'absolute inset-0 z-[99999] pointer-events-none'
    : 'fixed inset-0 z-[99999] pointer-events-none';

  const content = (
    <AnimatePresence>
      {isOpen && (
        <div className={wrapperClassName}>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center p-0 sm:bottom-6 sm:px-6">
            <motion.div
              ref={panelRef}
              data-testid="action-sheet-panel"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className={classNames('pointer-events-auto w-full sm:w-auto', classes)}
            >
              <div
                className={classNames(
                  'w-full overflow-hidden rounded-t-[28px] border border-neutral-200 bg-white shadow-[0_-20px_60px_rgba(15,23,42,0.18)] dark:border-neutral-800 dark:bg-neutral-950 sm:hidden',
                )}
              >
                <div className="flex justify-center px-5 pt-3">
                  <span className="h-1.5 w-12 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                </div>

                {(title || description) && (
                  <div className="px-5 pb-3 pt-3">
                    {title && (
                      <div className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                        {title}
                      </div>
                    )}
                    {description && (
                      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                        {description}
                      </p>
                    )}
                  </div>
                )}

                <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  {actionRows}
                </div>
              </div>

              <div
                className={classNames(
                  'hidden rounded-full border border-neutral-200 bg-white p-2 shadow-[0_18px_48px_rgba(15,23,42,0.18)] dark:border-neutral-800 dark:bg-neutral-950 sm:block',
                  verticalSizeClass,
                )}
              >
                <div className="flex items-center gap-1">{desktopActions}</div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );

  if (!contained && typeof document !== 'undefined') {
    return createPortal(content, document.body);
  }

  return content;
};

export default ActionSheet;
