import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { cva } from 'class-variance-authority';
import { Fragment } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LuChevronRight, LuX } from 'react-icons/lu';
import Button from '@/components/action/Button';

const drawerVariants = cva(
  'flex h-full flex-col overflow-hidden border-r border-neutral-200 bg-white shadow-[20px_0_60px_rgba(15,23,42,0.16)] dark:border-neutral-800 dark:bg-neutral-950',
  {
    variants: {
      size: {
        sm: 'w-[272px]',
        md: 'w-[320px]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const NavDrawer = ({
  isOpen,
  onClose,
  onChange,
  title,
  subtitle,
  items,
  footer,
  size = 'md',
  contained = false,
  classes,
  overlayClasses,
}: Mobile.NavDrawerProps) => {
  const handleClose = () => onClose?.();

  if (contained) {
    return (
      <AnimatePresence>
        {isOpen && (
          <div className="absolute inset-0 z-[120]">
            <motion.div
              data-testid="mobile-nav-drawer-overlay"
              className={classNames(
                'absolute inset-0 bg-neutral-950/28 backdrop-blur-[2px]',
                overlayClasses,
              )}
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            />
            <div className="absolute inset-0 overflow-hidden">
              <div className="flex h-full w-full items-start justify-start">
                <motion.div
                  data-testid="mobile-nav-drawer-panel"
                  className={classNames(drawerVariants({ size }), classes)}
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '-100%', opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="flex items-start justify-between border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
                    <div className="min-w-0">
                      {title && (
                        <div className="truncate text-base font-semibold text-neutral-900 dark:text-neutral-50">
                          {title}
                        </div>
                      )}
                      {subtitle && (
                        <p className="mt-1 truncate text-sm text-neutral-500 dark:text-neutral-400">
                          {subtitle}
                        </p>
                      )}
                    </div>
                    <Button
                      variant="clear"
                      color="neutral"
                      size="sm"
                      onClick={handleClose}
                      aria-label="Close menu"
                    >
                      <LuX size={18} />
                    </Button>
                  </div>

                  <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3">
                    <ul className="flex flex-col gap-1">
                      {items.map((item) => {
                        const isActive = !!item.active;
                        const isDisabled = !!item.disabled;
                        return (
                          <li key={item.id}>
                            <button
                              type="button"
                              disabled={isDisabled}
                              onClick={() => {
                                if (!isDisabled) onChange?.(item.id);
                              }}
                              className={classNames(
                                'flex w-full cursor-pointer items-center gap-3 rounded-2xl px-3 py-3 text-left transition-colors',
                                isDisabled
                                  ? 'cursor-not-allowed text-neutral-300 dark:text-neutral-700'
                                  : isActive
                                    ? 'bg-secondary-50 text-secondary-600 dark:bg-primary-400/12 dark:text-primary-300'
                                    : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900',
                              )}
                              aria-current={isActive ? 'page' : undefined}
                            >
                              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-base dark:bg-neutral-900">
                                {item.icon}
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block truncate text-sm font-medium">
                                  {item.label}
                                </span>
                                {item.description && (
                                  <span className="mt-0.5 block truncate text-xs text-neutral-500 dark:text-neutral-400">
                                    {item.description}
                                  </span>
                                )}
                              </span>
                              {item.badge != null && (
                                <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-[11px] font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                                  {item.badge}
                                </span>
                              )}
                              {!isDisabled && (
                                <LuChevronRight size={16} className="shrink-0 opacity-50" />
                              )}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {footer && (
                    <div className="border-t border-neutral-200 px-4 py-4 dark:border-neutral-800">
                      {footer}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <Transition show={isOpen} appear as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-[120]"
        onClose={handleClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            data-testid="mobile-nav-drawer-overlay"
            className={classNames(
              'fixed inset-0',
              'bg-neutral-950/28 backdrop-blur-[2px]',
              overlayClasses,
            )}
            onClick={handleClose}
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="flex h-full w-full items-start justify-start">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-out duration-250"
              enterFrom="-translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transform transition ease-in duration-200"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="-translate-x-full opacity-0"
            >
              <Dialog.Panel
                data-testid="mobile-nav-drawer-panel"
                className={classNames(drawerVariants({ size }), classes)}
              >
                <div className="flex items-start justify-between border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
                  <div className="min-w-0">
                    {title && (
                      <Dialog.Title className="truncate text-base font-semibold text-neutral-900 dark:text-neutral-50">
                        {title}
                      </Dialog.Title>
                    )}
                    {subtitle && (
                      <p className="mt-1 truncate text-sm text-neutral-500 dark:text-neutral-400">
                        {subtitle}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="clear"
                    color="neutral"
                    size="sm"
                    onClick={handleClose}
                    aria-label="Close menu"
                  >
                    <LuX size={18} />
                  </Button>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3">
                  <ul className="flex flex-col gap-1">
                    {items.map((item) => {
                      const isActive = !!item.active;
                      const isDisabled = !!item.disabled;
                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            disabled={isDisabled}
                            onClick={() => {
                              if (!isDisabled) onChange?.(item.id);
                            }}
                            className={classNames(
                              'flex w-full cursor-pointer items-center gap-3 rounded-2xl px-3 py-3 text-left transition-colors',
                              isDisabled
                                ? 'cursor-not-allowed text-neutral-300 dark:text-neutral-700'
                                : isActive
                                  ? 'bg-secondary-50 text-secondary-600 dark:bg-primary-400/12 dark:text-primary-300'
                                  : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900',
                            )}
                            aria-current={isActive ? 'page' : undefined}
                          >
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-base dark:bg-neutral-900">
                              {item.icon}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block truncate text-sm font-medium">
                                {item.label}
                              </span>
                              {item.description && (
                                <span className="mt-0.5 block truncate text-xs text-neutral-500 dark:text-neutral-400">
                                  {item.description}
                                </span>
                              )}
                            </span>
                            {item.badge != null && (
                              <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-[11px] font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                                {item.badge}
                              </span>
                            )}
                            {!isDisabled && (
                              <LuChevronRight size={16} className="shrink-0 opacity-50" />
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {footer && (
                  <div className="border-t border-neutral-200 px-4 py-4 dark:border-neutral-800">
                    {footer}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NavDrawer;
