import classNames from 'classnames';
import Button from '@/components/action/Button';

const ButtonGroup = ({
  items,
  value,
  onChange,
  size = 'sm',
  color = 'neutral',
  disabled = false,
  classes,
  itemClasses,
  fullWidth = false,
}: Action.ButtonGroupProps) => {
  return (
    <div
      className={classNames(
        'inline-flex items-stretch',
        fullWidth && 'w-full',
        classes,
      )}
      role="group"
    >
      {items.map((item) => {
        const selected = item.value === value;

        return (
          <Button
            key={item.value}
            type="button"
            size={size}
            color={color}
            variant={selected ? 'contain' : 'outline'}
            disabled={disabled || item.disabled}
            onClick={() => {
              if (!disabled && !item.disabled) {
                onChange?.(item.value);
              }
            }}
            classes={classNames(
              'relative rounded-none border-r-0 first:rounded-l-lg first:border-r-0 last:rounded-r-lg last:border-r last:-ml-px -ml-px min-w-0 capitalize',
              fullWidth && 'flex-1',
              selected && 'z-10',
              itemClasses,
            )}
            aria-pressed={selected}
          >
            {item.label}
          </Button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
