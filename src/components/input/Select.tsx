'use client';

import { forwardRef, useId, useMemo, useState } from 'react';
import { cva } from 'class-variance-authority';
import classNames from 'classnames';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
  FloatingPortal,
} from '@floating-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { LuCheck, LuChevronDown } from 'react-icons/lu';

const triggerVariants = cva(
  'relative flex w-full cursor-pointer items-center justify-between rounded-xl border bg-white text-left text-neutral-700 shadow-sm outline-none transition-all duration-200 ease-in-out dark:bg-neutral-900 dark:text-neutral-300',
  {
    variants: {
      size: {
        sm: 'h-[36px] px-3 text-sm',
        md: 'h-[42px] px-3.5 text-sm',
        lg: 'h-[48px] px-4 text-base',
      },
      invalid: {
        true: 'border-danger focus-visible:ring-2 focus-visible:ring-danger/70',
        false:
          'border-neutral-500/20 dark:border-neutral-100/20 focus-visible:border-secondary-400/80 dark:focus-visible:border-primary-100/80 focus-visible:ring-2 focus-visible:ring-secondary-700/70 dark:focus-visible:ring-primary-100/70',
      },
      disabled: {
        true: 'cursor-not-allowed bg-neutral-100/10 text-[#8C9097]',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      invalid: false,
      disabled: false,
    },
  },
);

const listVariants = cva(
  'z-[1200] overflow-hidden rounded-xl border border-neutral-500/20 bg-white p-1.5 shadow-xl dark:border-neutral-100/20 dark:bg-neutral-900',
);

const Select = forwardRef<HTMLButtonElement, Input.SelectProps>((props, ref) => {
  const {
    label,
    placeholder = 'Select option',
    id: externalId,
    classes,
    value,
    size = 'md',
    disabled = false,
    invalid = false,
    errorMsg,
    options,
    onChange,
  } = props;

  const internalId = useId();
  const id = externalId || internalId;
  const errorId = `${id}-error`;
  const [isOpen, setIsOpen] = useState(false);
  const [referenceWidth, setReferenceWidth] = useState<number>();

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value],
  );

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(8), flip({ fallbackAxisSideDirection: 'end' }), shift()],
    whileElementsMounted: autoUpdate,
    placement: 'bottom-start',
  });

  const click = useClick(context, { enabled: !disabled });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'listbox' });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const setReference = (node: HTMLButtonElement | null) => {
    refs.setReference(node);
    setReferenceWidth(node?.offsetWidth);

    if (!ref) return;

    if (typeof ref === 'function') {
      ref(node);
      return;
    }

    ref.current = node;
  };

  const setFloating = (node: HTMLDivElement | null) => {
    refs.setFloating(node);
  };

  return (
    <div className="relative w-full">
      {label && (
        <label
          htmlFor={id}
          className="relative mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-100"
        >
          {label}
        </label>
      )}

      <button
        {...getReferenceProps()}
        ref={setReference}
        id={id}
        type="button"
        disabled={disabled}
        aria-label={selectedOption?.label ?? placeholder}
        className={classNames(triggerVariants({ size, invalid, disabled }), classes)}
        aria-invalid={invalid}
        aria-describedby={invalid ? errorId : undefined}
      >
        <span
          className={classNames(
            'truncate',
            selectedOption
              ? 'text-current'
              : 'text-neutral-400 dark:text-neutral-500',
          )}
        >
          {selectedOption?.label ?? placeholder}
        </span>
        <LuChevronDown
          className={classNames(
            'shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180',
          )}
          size={16}
        />
      </button>

      <AnimatePresence>
        {isOpen && !disabled && (
          <FloatingPortal>
            <div
              ref={setFloating}
              style={{
                ...floatingStyles,
                width: referenceWidth,
                zIndex: 1200,
              }}
              {...getFloatingProps()}
            >
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                className={listVariants()}
              >
                <ul className="flex max-h-64 flex-col gap-0.5 overflow-y-auto">
                  {options.map((option) => {
                    const selected = option.value === value;

                    return (
                      <li key={option.value} className="list-none">
                        <button
                          type="button"
                          disabled={option.disabled}
                          onClick={() => {
                            if (option.disabled) return;
                            onChange?.(option.value);
                            setIsOpen(false);
                          }}
                          className={classNames(
                            'flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors',
                            option.disabled
                              ? 'cursor-not-allowed text-neutral-400 dark:text-neutral-500'
                              : selected
                                ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                                : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800',
                          )}
                          role="option"
                          aria-selected={selected}
                        >
                          <span className="truncate">{option.label}</span>
                          {selected && <LuCheck size={16} className="shrink-0" />}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </div>
          </FloatingPortal>
        )}
      </AnimatePresence>

      {invalid && errorMsg && (
        <p id={errorId} className="absolute -bottom-5 left-0 text-xs text-danger">
          {errorMsg}
        </p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
