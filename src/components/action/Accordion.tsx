import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { cva } from 'class-variance-authority';
import { useId, useMemo, useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';

const accordionRootVariants = cva(
  'w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950',
);

const accordionItemVariants = cva(
  'border-b border-neutral-200/80 last:border-b-0 dark:border-neutral-800/80',
);

const accordionTriggerVariants = cva(
  'flex w-full cursor-pointer items-start gap-3 text-left transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'px-4 py-3',
        md: 'px-5 py-4',
        lg: 'px-6 py-5',
      },
      open: {
        true: 'bg-neutral-50 dark:bg-neutral-900/80',
        false: 'bg-transparent hover:bg-neutral-50/80 dark:hover:bg-neutral-900/60',
      },
    },
    defaultVariants: {
      size: 'md',
      open: false,
    },
  },
);

const accordionTitleVariants = cva(
  'font-semibold text-neutral-900 dark:text-neutral-50',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const accordionContentVariants = cva(
  'text-neutral-600 dark:text-neutral-300',
  {
    variants: {
      size: {
        sm: 'px-4 pt-3 pb-4 text-sm',
        md: 'px-5 pt-4 pb-5 text-sm',
        lg: 'px-6 pt-5 pb-6 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const normalizeValue = (value?: string[]) => value ?? [];

const Accordion = ({
  items,
  type = 'single',
  value,
  defaultValue,
  onChange,
  size = 'md',
  collapsible = true,
  classes,
  itemClasses,
}: Action.AccordionProps) => {
  const instanceId = useId();
  const [internalValue, setInternalValue] = useState<string[]>(
    normalizeValue(defaultValue),
  );

  const resolvedValue = useMemo(
    () => normalizeValue(value ?? internalValue),
    [value, internalValue],
  );

  const setValue = (nextValue: string[]) => {
    if (value === undefined) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
  };

  const handleToggle = (itemId: string) => {
    const isOpen = resolvedValue.includes(itemId);

    if (type === 'multiple') {
      setValue(
        isOpen
          ? resolvedValue.filter((entry) => entry !== itemId)
          : [...resolvedValue, itemId],
      );
      return;
    }

    if (isOpen) {
      if (collapsible) {
        setValue([]);
      }
      return;
    }

    setValue([itemId]);
  };

  return (
    <div className={classNames(accordionRootVariants(), classes)}>
      {items.map((item) => {
        const isOpen = resolvedValue.includes(item.id);
        const contentId = `${instanceId}-${item.id}-content`;
        const triggerId = `${instanceId}-${item.id}-trigger`;

        return (
          <div
            key={item.id}
            className={classNames(accordionItemVariants(), itemClasses)}
          >
            <button
              id={triggerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              disabled={item.disabled}
              className={accordionTriggerVariants({ size, open: isOpen })}
              onClick={() => handleToggle(item.id)}
            >
              {item.icon && (
                <span className="mt-0.5 shrink-0 text-neutral-500 dark:text-neutral-400">
                  {item.icon}
                </span>
              )}

              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span className={accordionTitleVariants({ size })}>
                    {item.title}
                  </span>
                  {item.badge && <span className="shrink-0">{item.badge}</span>}
                </span>
                {item.description && (
                  <span className="mt-1 block text-sm text-neutral-500 dark:text-neutral-400">
                    {item.description}
                  </span>
                )}
              </span>

              <motion.span
                aria-hidden="true"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="mt-0.5 shrink-0 text-neutral-500 dark:text-neutral-400"
              >
                <LuChevronDown size={18} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key={contentId}
                  id={contentId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden"
                >
                  <div className={accordionContentVariants({ size })}>
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
