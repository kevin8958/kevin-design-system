'use client';

import { useClickAway } from '@uidotdev/usehooks';
import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cva } from 'class-variance-authority';
import Button from '@/components/action/Button';
import { LuChevronRight } from 'react-icons/lu';

const dropdownVariants = cva(
  'absolute z-50 mt-2 flex flex-col min-w-max rounded-xl border border-neutral-500/20 bg-white p-1.5 shadow-sm dark:border-neutral-100/20 dark:bg-neutral-900',
  {
    variants: {
      position: {
        left: 'left-0',
        right: 'right-0',
      },
    },
    defaultVariants: {
      position: 'left',
    },
  },
);

const Dropdown = (props: Action.DropdownProps) => {
  const {
    items,
    dialogPosition = 'left',
    dialogWidth,
    onChange,
    buttonVariant = 'contain',
    size = 'md',
    label,
    buttonClasses,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const dialogRef = useClickAway<HTMLDivElement>((event) => {
    if (buttonRef.current?.contains(event.target as Node)) return;
    setIsOpen(false);
  });

  const renderItems = (menuItems: Action.DropdownItem[]) => {
    return menuItems.map((item, index) => {
      const itemWidthStyle = dialogWidth
        ? { width: dialogWidth }
        : { minWidth: '120px' };

      const labelWidthOffset = item.icon ? 48 : 24;
      const labelStyle = dialogWidth
        ? { width: `${dialogWidth - labelWidthOffset}px` }
        : {};

      switch (item.type) {
        case 'item':
          return (
            <li
              key={item.id}
              className="w-full list-none"
              style={itemWidthStyle}
            >
              <Button
                variant="clear"
                size="sm"
                color={item.danger ? 'danger' : 'neutral'}
                classes="!w-full !justify-start !font-normal !min-w-0 !max-w-full"
                onClick={() => {
                  item.onClick?.();
                  onChange?.(item.id);
                  setIsOpen(false);
                }}
              >
                <div className="flex w-full items-center gap-2 min-w-0">
                  {item.icon && (
                    <span className="shrink-0 text-lg opacity-80">
                      {item.icon}
                    </span>
                  )}
                  <span
                    className="truncate flex-1 text-left"
                    style={labelStyle}
                    title={item.label}
                  >
                    {item.label}
                  </span>
                </div>
              </Button>
            </li>
          );

        case 'group':
          return (
            <li
              key={item.id}
              className="w-full list-none"
              style={itemWidthStyle}
            >
              {index !== 0 && (
                <hr className="my-1 border-neutral-500/20 dark:border-neutral-100/10" />
              )}
              {item.label && (
                <div className="px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 truncate">
                  {item.label}
                </div>
              )}
              <ul className="flex flex-col gap-0.5">
                {renderItems(item.items)}
              </ul>
            </li>
          );

        case 'submenu':
          return (
            <li
              key={item.id}
              className="group relative w-full list-none"
              style={itemWidthStyle}
            >
              <Button
                variant="clear"
                size="sm"
                classes="!px-3 !py-2 !w-full !justify-between !font-normal group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 !min-w-0"
              >
                <div className="w-full flex items-center gap-2 min-w-0 flex-1">
                  {item.icon && (
                    <span className="shrink-0 text-lg opacity-80">
                      {item.icon}
                    </span>
                  )}
                  <span className="truncate">{item.label}</span>
                </div>
                <LuChevronRight className="ml-2 shrink-0 opacity-50 transition-transform group-hover:translate-x-0.5" />
              </Button>

              <div className="absolute top-0 left-[calc(100%+0.2rem)] z-[60] hidden pl-1 group-hover:block">
                <motion.ul
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="rounded-xl border border-neutral-500/30 bg-white p-1.5 shadow-xl dark:border-neutral-100/20 dark:bg-neutral-990"
                >
                  {renderItems(item.items)}
                </motion.ul>
              </div>
            </li>
          );
      }
    });
  };

  return (
    <div className="relative inline-block text-left">
      <Button
        ref={buttonRef}
        variant={buttonVariant}
        size={size}
        classes={buttonClasses}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {label || 'Dropdown'}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dialogRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className={dropdownVariants({ position: dialogPosition })}
          >
            <ul className="flex flex-col gap-0.5 py-0.5">
              {renderItems(items)}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
