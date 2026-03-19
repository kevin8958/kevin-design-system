import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { LuX } from 'react-icons/lu';
import { cva } from 'class-variance-authority';
import classNames from 'classnames';
import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';
const modalVariants = cva(
  'w-full transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all relative dark:bg-neutral-900 border border-neutral-500/10',
  {
    variants: {
      state: {
        default: '',
        info: 'border-2 border-info!',
        success: 'border-2 border-success!',
        warning: 'border-2 border-warning!',
        danger: 'border-2 border-danger!',
      },
      maxWidth: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        full: 'max-w-full',
      },
      position: {
        top: 'mb-auto mt-10',
        center: 'my-auto',
        bottom: 'mt-auto mb-10',
      },
    },
    defaultVariants: {
      state: 'default',
      maxWidth: 'md',
      position: 'center',
    },
  },
);

export default function Modal({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  state = 'default',
  maxWidth = 'md',
  position = 'center',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  hideCancel = false,
  hideBottom = false,
  loading = false,
}: Action.ModalProps) {
  const showCloseButton = hideCancel || hideBottom;
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/10 dark:bg-black/40 backdrop-blur-xs transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={classNames(
                  modalVariants({ state, maxWidth, position }),
                  {
                    'p-6 pb-4': !hideBottom,
                    'p-6': hideBottom,
                  },
                )}
              >
                {/* hideCancel이 true일 때만 상단 X 버튼 표시 */}
                {showCloseButton && (
                  <Button
                    onClick={onClose}
                    aria-label="Close"
                    size="sm"
                    variant="clear"
                    color="neutral"
                    classes="absolute top-5 right-4 !p-2"
                  >
                    <LuX className="text-xl" />
                  </Button>
                )}

                {title && (
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 mb-4 text-neutral-900 dark:text-neutral-100"
                  >
                    {title}
                  </Dialog.Title>
                )}

                <div className="mt-2 text-neutral-700 dark:text-neutral-300">
                  {children}
                </div>

                {!hideBottom && (
                  <FlexWrapper justify="end" gap={2} classes="mt-8">
                    {!hideCancel && (
                      <Button variant="clear" color="neutral" onClick={onClose}>
                        {cancelText}
                      </Button>
                    )}
                    <Button
                      color={state === 'default' ? 'primary' : state}
                      onClick={onConfirm || onClose}
                      loading={loading}
                    >
                      {confirmText}
                    </Button>
                  </FlexWrapper>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
