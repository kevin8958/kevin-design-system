'use client';

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { designSystemMenus } from '@/constants/common';
import { cn } from '@/libs/utils';
import Divider from './Divider';

const NAV_ITEMS = [
  { label: 'GETTING STARTED', href: '/getting-started' },
  { label: 'COMPONENTS', href: '/components' },
];

const SNB = ({ isOpen, onClose, desktopHidden = false }: Layout.SNBProps) => {
  const { pathname } = useLocation();
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleResize = () => {
      setIsResizing(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsResizing(false);
      }, 100);

      if (window.innerWidth >= 768 && isOpen) {
        onClose?.();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, onClose]);

  const flattenedMenus: Layout.FlattenedMenu[] = (
    designSystemMenus as Layout.DesignSystemMenu[]
  ).flatMap((menu) => {
    if (menu.id === 'components' && menu.sections) {
      return menu.sections.map((section) => ({
        id:
          section.group === 'Data Display'
            ? 'dataDisplay'
            : section.group.toLowerCase(),
        label: section.group,
        items: section.items,
        href:
          section.group === 'Data Display'
            ? '/components/dataDisplay'
            : `/components/${section.group.toLowerCase()}`,
      }));
    }
    return [
      {
        id: menu.id,
        label: menu.label,
        items: menu.items || [],
        href: `/components/${menu.id}`,
      },
    ];
  });

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-neutral-990/20 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          'fixed inset-x-0 bottom-0 z-50 flex max-h-[80dvh] md:max-h-screen w-full flex-col rounded-t-3xl bg-white p-2 shadow-2xl dark:bg-neutral-900',
          !isResizing &&
            'max-md:transition-transform max-md:duration-500 max-md:ease-in-out',
          isOpen ? 'translate-y-0' : 'translate-y-full',
          isResizing && 'max-md:opacity-0',
          desktopHidden
            ? 'md:hidden'
            : 'md:sticky md:top-16 md:z-40 md:h-[calc(100dvh-64px)] md:w-64 md:p-0 md:bg-transparent! md:shadow-none md:rounded-none md:overflow-y-auto md:translate-y-0! md:opacity-100! md:transition-none!',
        )}
      >
        <div className="mx-auto mb-2 mt-1 h-1.5 w-12 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-700 md:hidden" />

        <nav className="w-full p-4 overflow-y-auto">
          <ul className="flex flex-col w-full gap-1 pb-2 md:hidden">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <li key={item.label} className="w-full">
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className={cn(
                      'block w-full rounded-md px-2 py-2.5 text-base md:py-1.5 md:text-sm transition-all duration-200 mb-0.5',
                      isActive
                        ? ' text-secondary-500! dark:text-primary-400! font-bold'
                        : ' dark:text-neutral-400! dark:hover:text-neutral-200!',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {!desktopHidden && (
            <>
              <Divider orientation="horizontal" classes="md:hidden" />
              <ul className="flex flex-col gap-1 pt-2 pb-10">
                {flattenedMenus.map((menu) => {
                  const isActiveMenu =
                    pathname === menu.href ||
                    pathname.startsWith(`${menu.href}/`) ||
                    menu.items.some((item) => pathname.startsWith(item.href));

                  return (
                    <li key={menu.id} className="mb-1">
                      <div className="flex flex-col mt-0.5">
                        <Link
                          to={menu.href}
                          onClick={onClose}
                          className={cn(
                            'flex w-full items-center justify-between rounded-md p-2 text-left text-sm transition-colors group font-bold!',
                            'hover:bg-neutral-990/5 dark:hover:bg-neutral-800/30 bg-transparent!',
                            isActiveMenu
                              ? 'text-secondary-500! dark:text-primary-400!'
                              : 'text-neutral-500! dark:text-neutral-100!',
                          )}
                        >
                          <span className="text-sm tracking-wider uppercase">
                            {menu.label}
                          </span>
                        </Link>

                        {menu.items.map((item) => {
                          const isActiveItem = pathname === item.href;
                          return (
                            <Link
                              key={item.id}
                              to={item.href}
                              onClick={onClose}
                              className={cn(
                                'rounded-md px-6 py-2.5 text-base md:py-1.5 md:text-sm transition-all duration-200 mb-0.5',
                                isActiveItem
                                  ? 'bg-secondary-500/10! text-secondary-500! dark:bg-primary-400/10! dark:text-primary-400! font-bold'
                                  : 'text-neutral-500! dark:text-neutral-400! hover:text-neutral-900! dark:hover:text-neutral-200!',
                              )}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </nav>
      </aside>
    </>
  );
};

export default SNB;
