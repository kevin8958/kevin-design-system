import { Link, useLocation } from 'react-router-dom';
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineMenu,
  HiOutlineX,
} from 'react-icons/hi';
import { useTheme } from '@/providers/ThemeProvider';
import Button from '@/components/action/Button';
import Divider from '@/components/layout/Divider';
import { cn } from '@/libs/utils';

const NAV_ITEMS = [
  { label: 'GETTING STARTED', href: '/getting-started' },
  { label: 'COMPONENTS', href: '/components' },
];
interface GnbProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

const Gnb = ({ isOpen, onToggle }: GnbProps) => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full h-16 border-b border-neutral-990/10 dark:border-neutral-800 backdrop-blur-md bg-white/70 dark:bg-neutral-990/70">
      <div className="flex items-center justify-between h-full px-6 mx-auto max-w-7xl">
        {/* Left Section: Burger + Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="w-8 h-8 overflow-hidden border rounded-lg border-neutral-300/30 bg-neutral-900">
            <img src="/kds_logo.svg" alt="" className="size-full" />
          </div>
          <span className="text-base font-bold tracking-tight text-neutral-800 dark:text-primary-400">
            Kevin Design System
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <ul className="items-center hidden gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium transition-all rounded-md no-underline',
                    // Default text color (Light/Dark mode)
                    'text-neutral-900! dark:text-neutral-200!',
                    // Hover state (Light: secondary, Dark: primary)
                    'hover:text-secondary-400! dark:hover:text-primary-400!',
                    // Active state
                    pathname.startsWith(item.href) &&
                      'text-secondary-400! dark:text-primary-400!',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Divider classes="hidden md:block" />

          <div className="flex items-center gap-2">
            <Button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              variant="clear"
              className="px-2!"
              icon={
                theme === 'dark' ? (
                  <HiOutlineSun size={24} />
                ) : (
                  <HiOutlineMoon size={24} />
                )
              }
            />
            {/* Burger Menu Button - Visible on Mobile Only */}
            <div className="md:hidden">
              <Button
                onClick={onToggle}
                aria-label="Toggle Menu"
                variant="clear"
                className="px-2!"
                icon={
                  isOpen ? (
                    <HiOutlineX size={24} />
                  ) : (
                    <HiOutlineMenu size={24} />
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Gnb;
