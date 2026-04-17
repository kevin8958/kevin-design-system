'use client';

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { designSystemMenus } from '@/constants/common';
import { cn } from '@/libs/utils';
import Divider from './Divider';

const NAV_ITEMS = [
  { label: 'GETTING STARTED', href: '/getting-started' },
  { label: 'COMPONENTS', href: '/components' },
];

type PlatformMenuGroup = {
  id: string;
  label: string;
  href?: string;
  items: Layout.NavItem[];
  status?: 'ready' | 'working';
};

const SNB = ({ isOpen, onClose, desktopHidden = false }: Layout.SNBProps) => {
  const { pathname } = useLocation();
  const [isResizing, setIsResizing] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<
    'web' | 'app' | null
  >(null);
  const navRef = useRef<HTMLElement | null>(null);
  const visiblePlatform =
    selectedPlatform ?? (pathname.startsWith('/components/app') ? 'app' : 'web');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
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

  useEffect(() => {
    if (desktopHidden && !isOpen) return;

    const frame = window.requestAnimationFrame(() => {
      const nav = navRef.current;
      if (!nav) return;

      const currentElement =
        nav.querySelector<HTMLElement>('[data-snb-current="item"]') ||
        nav.querySelector<HTMLElement>('[data-snb-current="menu"]') ||
        nav.querySelector<HTMLElement>('[data-snb-current="nav"]');

      currentElement?.scrollIntoView({
        block: 'center',
        inline: 'nearest',
        behavior: 'auto',
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, isOpen, desktopHidden]);

  const foundationMenu = (designSystemMenus as Layout.DesignSystemMenu[]).find(
    (menu) => menu.id === 'foundation',
  );
  const componentsMenu = (designSystemMenus as Layout.DesignSystemMenu[]).find(
    (menu) => menu.id === 'components',
  );
  const mobileMenu = (designSystemMenus as Layout.DesignSystemMenu[]).find(
    (menu) => menu.id === 'mobile',
  );
  const interactionMenu = (designSystemMenus as Layout.DesignSystemMenu[]).find(
    (menu) => menu.id === 'interaction',
  );

  const foundationGroups: PlatformMenuGroup[] = foundationMenu
    ? [
        {
          id: foundationMenu.id,
          label: foundationMenu.label,
          href: '/components/foundation',
          items: foundationMenu.items ?? [],
          status: 'ready',
        },
      ]
    : [];

  const webGroups: PlatformMenuGroup[] = [
    ...((componentsMenu?.sections ?? []).map((section) => ({
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
      status: 'ready' as const,
    })) ?? []),
    ...(mobileMenu
      ? [
          {
            id: mobileMenu.id,
            label: mobileMenu.label,
            href: '/components/mobile',
            items: mobileMenu.items ?? [],
            status: 'ready' as const,
          },
        ]
      : []),
    ...(interactionMenu
      ? [
          {
            id: interactionMenu.id,
            label: interactionMenu.label,
            href: '/components/interaction',
            items: interactionMenu.items ?? [],
            status: 'ready' as const,
          },
        ]
      : []),
  ];

  const appGroups: PlatformMenuGroup[] = [
    {
      id: 'app-action',
      label: 'Action',
      href: '/components/app/accordion',
      items: [
        {
          id: 'app-accordion',
          label: 'Accordion',
          href: '/components/app/accordion',
        },
        { id: 'app-button', label: 'Button', href: '/components/app/button' },
        {
          id: 'app-button-group',
          label: 'ButtonGroup',
          href: '/components/app/buttonGroup',
        },
        {
          id: 'app-dropdown',
          label: 'Dropdown',
          href: '/components/app/dropdown',
        },
      ],
      status: 'ready',
    },
    {
      id: 'app-input',
      label: 'Input',
      items: [{ id: 'app-input-wip', label: '작업중', href: '/components' }],
      status: 'working',
    },
    {
      id: 'app-navigation',
      label: 'Navigation',
      items: [
        { id: 'app-navigation-wip', label: '작업중', href: '/components' },
      ],
      status: 'working',
    },
    {
      id: 'app-data-display',
      label: 'Data Display',
      items: [
        { id: 'app-data-display-wip', label: '작업중', href: '/components' },
      ],
      status: 'working',
    },
    {
      id: 'app-feedback',
      label: 'Feedback',
      items: [{ id: 'app-feedback-wip', label: '작업중', href: '/components' }],
      status: 'working',
    },
  ];

  const menuSections = [
    { id: 'foundation', label: 'Foundation', groups: foundationGroups },
  ];
  const activePlatformGroups = visiblePlatform === 'web' ? webGroups : appGroups;

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

        <nav ref={navRef} className="w-full overflow-y-auto p-4">
          <ul className="flex flex-col w-full gap-1 pb-2 md:hidden">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <li key={item.label} className="w-full">
                  <Link
                    to={item.href}
                    onClick={onClose}
                    aria-current={isActive ? 'page' : undefined}
                    data-snb-current={isActive ? 'nav' : undefined}
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
                {menuSections.map((section) => (
                  <li key={section.id} className="mb-4">
                    <div className="flex flex-col gap-1">
                      {section.groups.map((menu) => {
                        const isReady = menu.status !== 'working';
                        const isActiveMenu =
                          isReady &&
                          !!menu.href &&
                          (pathname === menu.href ||
                            pathname.startsWith(`${menu.href}/`) ||
                            menu.items.some((item) =>
                              pathname.startsWith(item.href),
                            ));

                        return (
                          <div key={menu.id} className="mt-0.5">
                            {isReady && menu.href ? (
                              <Link
                                to={menu.href}
                                onClick={onClose}
                                aria-current={
                                  pathname === menu.href ? 'page' : undefined
                                }
                                data-snb-current={
                                  pathname === menu.href ? 'menu' : undefined
                                }
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
                            ) : (
                              <div className="flex w-full items-center justify-between rounded-md p-2 text-left">
                                <span className="text-sm font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-100">
                                  {menu.label}
                                </span>
                                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
                                  작업중
                                </span>
                              </div>
                            )}

                            <div className="flex flex-col gap-0.5">
                              {menu.items.map((item) => {
                                const isActiveItem =
                                  isReady && pathname === item.href;

                                if (!isReady) {
                                  return (
                                    <div
                                      key={item.id}
                                      className="flex w-full items-center rounded-md px-6 py-2.5 text-base text-neutral-400 dark:text-neutral-500 md:py-1.5 md:text-sm"
                                    >
                                      <span>{item.label}</span>
                                    </div>
                                  );
                                }

                                return (
                                  <Link
                                    key={item.id}
                                    to={item.href}
                                    onClick={onClose}
                                    aria-current={
                                      isActiveItem ? 'page' : undefined
                                    }
                                    data-snb-current={
                                      isActiveItem ? 'item' : undefined
                                    }
                                    className={cn(
                                      'block w-full rounded-md px-6 py-2.5 text-base md:py-1.5 md:text-sm transition-all duration-200',
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
                          </div>
                        );
                      })}
                    </div>
                  </li>
                ))}

                <li className="mb-4">
                  <div className="mb-3 px-2">
                    <div className="inline-flex w-full rounded-xl bg-neutral-100 p-1 dark:bg-neutral-800/80">
                      {(['web', 'app'] as const).map((platform) => {
                        const isActive = visiblePlatform === platform;

                        return (
                          <button
                            key={platform}
                            type="button"
                            onClick={() => setSelectedPlatform(platform)}
                            className={cn(
                              'flex-1 rounded-[10px] px-3 py-2 text-sm font-semibold transition-colors',
                              isActive
                                ? 'bg-white text-secondary-500 shadow-sm dark:bg-neutral-900 dark:text-primary-400'
                                : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200',
                            )}
                          >
                            {platform.toUpperCase()}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    {activePlatformGroups.map((menu) => {
                      const isReady = menu.status !== 'working';
                      const isActiveMenu =
                        isReady &&
                        !!menu.href &&
                        (pathname === menu.href ||
                          pathname.startsWith(`${menu.href}/`) ||
                          menu.items.some((item) =>
                            pathname.startsWith(item.href),
                          ));

                      return (
                        <div key={menu.id} className="mt-0.5">
                          {isReady && menu.href ? (
                            <Link
                              to={menu.href}
                              onClick={onClose}
                              aria-current={
                                pathname === menu.href ? 'page' : undefined
                              }
                              data-snb-current={
                                pathname === menu.href ? 'menu' : undefined
                              }
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
                          ) : isReady ? (
                            <div className="flex w-full items-center justify-between rounded-md p-2 text-left">
                              <span className="text-sm font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-100">
                                {menu.label}
                              </span>
                            </div>
                          ) : (
                            <div className="flex w-full items-center justify-between rounded-md p-2 text-left">
                              <span className="text-sm font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-100">
                                {menu.label}
                              </span>
                              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
                                작업중
                              </span>
                            </div>
                          )}

                          <div className="flex flex-col gap-0.5">
                            {menu.items.map((item) => {
                              const isActiveItem =
                                isReady && pathname === item.href;

                              if (!isReady) {
                                return (
                                  <div
                                    key={item.id}
                                    className="flex w-full items-center rounded-md px-6 py-2.5 text-base text-neutral-400 dark:text-neutral-500 md:py-1.5 md:text-sm"
                                  >
                                    <span>{item.label}</span>
                                  </div>
                                );
                              }

                              return (
                                <Link
                                  key={item.id}
                                  to={item.href}
                                  onClick={onClose}
                                  aria-current={
                                    isActiveItem ? 'page' : undefined
                                  }
                                  data-snb-current={
                                    isActiveItem ? 'item' : undefined
                                  }
                                  className={cn(
                                    'block w-full rounded-md px-6 py-2.5 text-base md:py-1.5 md:text-sm transition-all duration-200',
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
                        </div>
                      );
                    })}
                  </div>
                </li>
              </ul>
            </>
          )}
        </nav>
      </aside>
    </>
  );
};

export default SNB;
