import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { LuX } from 'react-icons/lu';
import { cva } from 'class-variance-authority';
import classNames from 'classnames';
import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';

const drawerVariants = cva(
  'fixed flex flex-col bg-white shadow-xl transition-all duration-300 ease-in-out dark:bg-neutral-900 border-neutral-500/10 w-full max-h-[90vh] rounded-t-xl md:rounded-t-none md:rounded-l-xl bottom-0 md:bottom-auto md:top-0 md:right-0 md:h-full md:max-h-full md:border-l',
  {
    variants: {
      size: {
        sm: 'md:w-64',
        md: 'md:w-80',
        lg: 'md:w-[450px]',
        xl: 'md:w-[600px]',
        full: 'md:w-screen',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  },
);

export default function Drawer({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  size = 'lg',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  hideBottom = false,
  loading = false,
}: Omit<Action.DrawerProps, 'position'>) {
  const handleClose = () => {
    close();
    onClose?.();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/20" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="flex h-full w-full justify-end items-end md:items-start">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-y-full md:translate-y-0 md:translate-x-full"
              enterTo="translate-y-0 md:translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-y-0 md:translate-x-0"
              leaveTo="translate-y-full md:translate-y-0 md:translate-x-full"
            >
              <Dialog.Panel className={classNames(drawerVariants({ size }))}>
                <div className="flex items-center justify-between p-2 pl-4 border-b border-neutral-100 dark:border-neutral-800">
                  {title ? (
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-bold text-neutral-900 dark:text-neutral-100"
                    >
                      {title}
                    </Dialog.Title>
                  ) : (
                    <div />
                  )}
                  <Button
                    onClick={onClose}
                    variant="clear"
                    color="neutral"
                    size="sm"
                  >
                    <LuX className="text-2xl" />
                  </Button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 text-neutral-700 dark:text-neutral-300">
                  {children}
                </div>

                {!hideBottom && (
                  <div className="p-2 border-t border-neutral-100 dark:border-neutral-800">
                    <FlexWrapper justify="between">
                      <Button variant="clear" color="neutral" onClick={onClose}>
                        {cancelText}
                      </Button>
                      <Button onClick={onConfirm || onClose} loading={loading}>
                        {confirmText}
                      </Button>
                    </FlexWrapper>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
