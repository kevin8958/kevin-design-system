import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/libs/utils'; // Adjust path based on your project structure

interface LinkButtonProps {
  href: string;
  label: string;
  className?: string;
}

const LinkButton = ({ href, label, className }: LinkButtonProps) => {
  const { pathname } = useLocation();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      to={href}
      className={cn(
        'px-4 py-2 text-sm font-medium transition-all rounded-md no-underline',
        // Default text color (Light/Dark mode)
        'text-neutral-900 dark:text-neutral-50',
        // Hover state (Light: secondary, Dark: primary)
        'hover:text-secondary-500 dark:hover:text-primary-500',
        // Active state
        isActive && 'text-primary-400 dark:text-primary-400',
        className,
      )}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
