import { Link } from 'react-router-dom';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import LinkButton from '@/components/action/LinkButton';
import { useTheme } from '@/providers/ThemeProvider';
import IconButton from '@/components/action/IconButton';

const NAV_ITEMS = [
  { label: 'Getting Started', href: '/getting-started' },
  { label: 'Components', href: '/components' },
];

const Gnb = () => {
  const { theme, toggleTheme } = useTheme(); // Use context instead of local state

  return (
    <nav className="sticky top-0 z-50 w-full border-b dark:border-neutral-800 backdrop-blur-md">
      <div className="flex items-center justify-between h-16 px-6 mx-auto max-w-7xl">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="w-8 h-8 overflow-hidden border rounded-lg border-neutral-300/30 bg-neutral-900">
            <img src="/kds_logo.svg" alt="" className="size-full" />
          </div>
          <span className="text-base font-bold tracking-tight text-neutral-800 dark:text-primary-400">
            Kevin Design System
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-8">
          <ul className="items-center hidden gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <LinkButton href={item.href} label={item.label} />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pl-8">
            {/* TODO: Search Bar */}
            {/* <div className="relative hidden sm:block">
              <HiOutlineSearch className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Search components..."
                className="pl-10 pr-4 text-sm transition-all border rounded-lg outline-none h-9 w-44 border-neutral-800 bg-neutral-900/50 text-neutral-200 focus:w-56 focus:border-primary-500 focus:bg-neutral-900"
              />
            </div> */}

            {/* Dark Mode Toggle - Now using Global State */}
            <IconButton
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              icon={
                theme === 'dark' ? (
                  <HiOutlineSun size={20} />
                ) : (
                  <HiOutlineMoon size={20} />
                )
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Gnb;
