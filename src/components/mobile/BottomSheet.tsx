import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { cva } from 'class-variance-authority';
import { Fragment } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const sheetPanelVariants = cva(
  'flex w-full flex-col overflow-hidden rounded-t-[28px] border border-neutral-200 bg-white shadow-[0_-20px_60px_rgba(15,23,42,0.18)] dark:border-neutral-800 dark:bg-neutral-950',
  {
    variants: {
      size: {
        sm: 'min-h-[34%] max-h-[42%]',
        md: 'min-h-[48%] max-h-[58%]',
        lg: 'min-h-[64%] max-h-[76%]',
        full: 'h-full rounded-none',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const BottomSheet = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  showDragHandle = true,
  contained = false,
  classes,
  overlayClasses,
}: Mobile.BottomSheetProps) => {
  const handleClose = () => onClose?.();

  if (contained) {
    return (
      <AnimatePresence>
        {isOpen && (
          <div className="absolute inset-0 z-[120]">
            <motion.div
              data-testid="bottom-sheet-overlay"
              className={classNames(
                'absolute inset-0 bg-neutral-950/32 backdrop-blur-[2px]',
                overlayClasses,
              )}
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            />
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="flex h-full w-full items-end justify-center">
                <motion.div
                  data-testid="bottom-sheet-panel"
                  className={classNames(
                    'pointer-events-auto',
                    sheetPanelVariants({ size }),
                    classes,
                  )}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '100%', opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                >
                  {showDragHandle && (
                    <div className="flex justify-center px-5 pt-3">
                      <span className="h-1.5 w-12 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    </div>
                  )}

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

                  <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-5 text-neutral-700 dark:text-neutral-200">
                    {children}
                  </div>

                  {footer && (
                    <div className="border-t border-neutral-200 px-5 py-4 dark:border-neutral-800">
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
            data-testid="bottom-sheet-overlay"
            className={classNames(
              'fixed inset-0',
              'bg-neutral-950/32 backdrop-blur-[2px]',
              overlayClasses,
            )}
            onClick={handleClose}
          />
        </Transition.Child>

        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="flex h-full w-full items-end justify-center">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-out duration-250"
              enterFrom="translate-y-full opacity-0"
              enterTo="translate-y-0 opacity-100"
              leave="transform transition ease-in duration-200"
              leaveFrom="translate-y-0 opacity-100"
              leaveTo="translate-y-full opacity-0"
            >
              <Dialog.Panel
                data-testid="bottom-sheet-panel"
                className={classNames(
                  'pointer-events-auto',
                  sheetPanelVariants({ size }),
                  classes,
                )}
              >
                {showDragHandle && (
                  <div className="flex justify-center px-5 pt-3">
                    <span className="h-1.5 w-12 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  </div>
                )}

                {(title || description) && (
                  <div className="px-5 pb-3 pt-3">
                    {title && (
                      <Dialog.Title className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                        {title}
                      </Dialog.Title>
                    )}
                    {description && (
                      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                        {description}
                      </p>
                    )}
                  </div>
                )}

                <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-5 text-neutral-700 dark:text-neutral-200">
                  {children}
                </div>

                {footer && (
                  <div className="border-t border-neutral-200 px-5 py-4 dark:border-neutral-800">
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

export default BottomSheet;
