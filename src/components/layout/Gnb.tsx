import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineSearch, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import LinkButton from '@/components/action/LinkButton';

const NAV_ITEMS = [
  { label: 'Getting Started', href: '/getting-started' },
  { label: 'Components', href: '/design-system/components/button' },
];

const Gnb = () => {
  const { pathname } = useLocation();
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    if (nextTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-990/80 backdrop-blur-md">
      <div className="flex items-center justify-between h-16 px-6 mx-auto max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-neutral-50"
        >
          <div className="w-8 h-8 overflow-hidden border rounded-lg border-neutral-300/30 bg-neutral-900">
            <img src="/kds_logo.svg" alt="" className="size-full" />
          </div>
          <span className="text-base font-bold tracking-tight text-primary-400">
            Kevin Design System
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-8">
          {/* Main Navigation */}
          <ul className="items-center hidden gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <LinkButton
                  key={item.href}
                  href={item.href}
                  label={item.label}
                />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pl-8 border-l border-neutral-800">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <HiOutlineSearch className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Search components..."
                className="pl-10 pr-4 text-sm transition-all border rounded-md outline-none h-9 w-44 border-neutral-800 bg-neutral-900/50 text-neutral-200 focus:w-56 focus:border-primary-500 focus:bg-neutral-900"
              />
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center p-2! transition-all border rounded-md h-9 w-9 border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700 hover:text-primary-400"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <HiOutlineSun size={20} />
              ) : (
                <HiOutlineMoon size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Gnb;
