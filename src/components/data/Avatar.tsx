import classNames from 'classnames';
import { cva } from 'class-variance-authority';

const avatarVariants = cva(
  'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-100 font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-100',
  {
    variants: {
      size: {
        sm: 'size-8 text-xs',
        md: 'size-12 text-sm',
        lg: 'size-16 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const statusVariants = cva(
  'absolute rounded-full border-2 border-white dark:border-neutral-900',
  {
    variants: {
      size: {
        sm: 'right-0 top-0 size-2.5',
        md: 'right-0.5 top-0.5 size-3',
        lg: 'right-1 top-1 size-3.5',
      },
      status: {
        online: 'bg-success',
        offline: 'bg-neutral-300 dark:bg-neutral-600',
        busy: 'bg-danger',
      },
    },
    defaultVariants: {
      size: 'md',
      status: 'offline',
    },
  },
);

const getInitials = (name?: string) => {
  if (!name) return '?';

  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();

  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
};

const Avatar = ({
  src,
  name,
  alt,
  size = 'md',
  status,
  classes,
}: Data.AvatarProps) => {
  return (
    <div className={classNames(avatarVariants({ size }), classes)}>
      {src ? (
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          className="size-full object-cover"
        />
      ) : (
        <span aria-hidden="true">{getInitials(name)}</span>
      )}

      {status && <span className={statusVariants({ size, status })} />}
    </div>
  );
};

export default Avatar;
