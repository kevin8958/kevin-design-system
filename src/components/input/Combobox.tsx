'use client';

import {
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
  FloatingPortal,
} from '@floating-ui/react';
import { forwardRef, useId, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cva } from 'class-variance-authority';
import classNames from 'classnames';
import { LuCheck, LuChevronDown, LuSearch } from 'react-icons/lu';

const triggerVariants = cva(
  'relative flex w-full items-center rounded-xl border bg-white text-neutral-700 shadow-sm outline-none transition-all duration-200 ease-in-out dark:bg-neutral-900 dark:text-neutral-300',
  {
    variants: {
      size: {
        sm: 'h-[36px] px-3 text-sm',
        md: 'h-[42px] px-3.5 text-sm',
        lg: 'h-[48px] px-4 text-base',
      },
      invalid: {
        true: 'border-danger focus-within:ring-2 focus-within:ring-danger/70',
        false:
          'border-neutral-500/20 dark:border-neutral-100/20 focus-within:border-secondary-400/80 dark:focus-within:border-primary-100/80 focus-within:ring-2 focus-within:ring-secondary-700/70 dark:focus-within:ring-primary-100/70',
      },
      disabled: {
        true: 'cursor-not-allowed bg-neutral-100/10 text-[#8C9097]',
        false: 'cursor-text',
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
  'overflow-hidden rounded-xl border border-neutral-500/20 bg-white p-1.5 shadow-xl dark:border-neutral-100/20 dark:bg-neutral-900',
);

const Combobox = forwardRef<HTMLInputElement, Input.ComboboxProps>(
  (props, ref) => {
    const {
      label,
      placeholder = 'Search or select',
      id: externalId,
      classes,
      value,
      size = 'md',
      disabled = false,
      invalid = false,
      errorMsg,
      options,
      emptyText = 'No matching results.',
      onChange,
    } = props;

    const internalId = useId();
    const id = externalId || internalId;
    const listboxId = `${id}-listbox`;
    const errorId = `${id}-error`;

    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [referenceWidth, setReferenceWidth] = useState<number>();

    const selectedOption = useMemo(
      () => options.find((option) => option.value === value),
      [options, value],
    );

    const filteredOptions = useMemo(() => {
      const normalizedQuery = query.trim().toLowerCase();

      if (!normalizedQuery) return options;

      return options.filter((option) => {
        const haystack = [
          option.label,
          option.description,
          ...(option.keywords ?? []),
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();

        return haystack.includes(normalizedQuery);
      });
    }, [options, query]);

    const { refs, floatingStyles, context } = useFloating({
      open: isOpen,
      onOpenChange: setIsOpen,
      middleware: [offset(8), flip({ fallbackAxisSideDirection: 'end' }), shift()],
      whileElementsMounted: autoUpdate,
      placement: 'bottom-start',
    });
    const { setReference, setFloating } = refs;

    const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });
    const role = useRole(context, { role: 'listbox' });
    const { getFloatingProps } = useInteractions([dismiss, role]);

    const setReferenceNode = (node: HTMLInputElement | null) => {
      setReference(node);
      setReferenceWidth(node?.offsetWidth);

      if (!ref) return;

      if (typeof ref === 'function') {
        ref(node);
        return;
      }

      ref.current = node;
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

        <div className={classNames(triggerVariants({ size, invalid, disabled }), classes)}>
          <LuSearch
            className="pointer-events-none ml-3 shrink-0 text-neutral-400 dark:text-neutral-500"
            size={16}
          />
          <input
            ref={setReferenceNode}
            id={id}
            role="combobox"
            aria-expanded={isOpen}
            aria-controls={listboxId}
            aria-autocomplete="list"
            aria-invalid={invalid}
            aria-describedby={invalid ? errorId : undefined}
            disabled={disabled}
            value={query}
            placeholder={placeholder}
            onFocus={() => {
              if (disabled) return;
              if (!query && selectedOption?.label) {
                setQuery(selectedOption.label);
              }
              setIsOpen(true);
            }}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setQuery(selectedOption?.label ?? '');
                setIsOpen(false);
              }

              if (e.key === 'Enter' && isOpen) {
                const firstEnabled = filteredOptions.find((option) => !option.disabled);
                if (firstEnabled) {
                  e.preventDefault();
                  onChange?.(firstEnabled.value);
                  setQuery(firstEnabled.label);
                  setIsOpen(false);
                }
              }
            }}
            className="h-full w-full bg-transparent px-3 pr-9 text-inherit outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
          />
          <LuChevronDown
            className={classNames(
              'pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 shrink-0 text-neutral-400 transition-transform duration-200 dark:text-neutral-500',
              isOpen && 'rotate-180',
            )}
            size={16}
          />
        </div>

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
                  {filteredOptions.length === 0 ? (
                    <div className="px-3 py-2 text-sm text-neutral-500 dark:text-neutral-400">
                      {emptyText}
                    </div>
                  ) : (
                    <ul
                      id={listboxId}
                      className="flex max-h-64 flex-col gap-0.5 overflow-y-auto"
                      role="listbox"
                    >
                      {filteredOptions.map((option) => {
                        const selected = option.value === value;

                        return (
                          <li key={option.value} className="list-none">
                            <button
                              type="button"
                              disabled={option.disabled}
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => {
                                if (option.disabled) return;
                                onChange?.(option.value);
                                setQuery(option.label);
                                setIsOpen(false);
                              }}
                              className={classNames(
                                'flex w-full cursor-pointer items-start justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors',
                                option.disabled
                                  ? 'cursor-not-allowed text-neutral-400 dark:text-neutral-500'
                                  : selected
                                    ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                                    : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800',
                              )}
                              role="option"
                              aria-selected={selected}
                            >
                              <span className="min-w-0 flex-1">
                                <span className="block truncate">{option.label}</span>
                                {option.description && (
                                  <span className="mt-0.5 block truncate text-xs text-neutral-500 dark:text-neutral-400">
                                    {option.description}
                                  </span>
                                )}
                              </span>
                              {selected && <LuCheck size={16} className="mt-0.5 shrink-0" />}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </motion.div>
              </div>
            </FloatingPortal>
          )}
        </AnimatePresence>

        {invalid && errorMsg && (
          <p id={errorId} className="mt-2 text-xs text-danger">
            {errorMsg}
          </p>
        )}
      </div>
    );
  },
);

Combobox.displayName = 'Combobox';

export default Combobox;
