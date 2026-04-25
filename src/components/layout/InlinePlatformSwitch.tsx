import { Link } from 'react-router-dom';
import { cn } from '@/libs/utils';

type PlatformValue = 'web' | 'app';

type InlinePlatformSwitchOption = {
  value: PlatformValue;
  label?: string;
  to?: string;
  onSelect?: (value: PlatformValue) => void;
};

interface InlinePlatformSwitchProps {
  activeValue: PlatformValue;
  options: InlinePlatformSwitchOption[];
  classes?: string;
}

export default function InlinePlatformSwitch({
  activeValue,
  options,
  classes,
}: InlinePlatformSwitchProps) {
  return (
    <div
      className={cn(
        'inline-flex rounded-xl bg-white/90 p-1 shadow-sm dark:bg-neutral-900/80',
        classes,
      )}
    >
      {options.map((option) => {
        const isActive = activeValue === option.value;
        const commonClasses = cn(
          'rounded-[10px] px-4 py-2 text-sm font-semibold transition-colors no-underline',
          isActive
            ? 'bg-primary-500 text-white shadow-sm dark:bg-primary-400 dark:text-neutral-950'
            : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100',
        );

        if (option.to) {
          return (
            <Link key={option.value} to={option.to} className={commonClasses}>
              {option.label ?? option.value.toUpperCase()}
            </Link>
          );
        }

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => option.onSelect?.(option.value)}
            className={commonClasses}
          >
            {option.label ?? option.value.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
