import { Dialog, DialogPanel } from '@headlessui/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LuSearch } from 'react-icons/lu';
import Button from '@/components/action/Button';
import { searchEntries } from '@/constants/common';
import { cn } from '@/libs/utils';

const normalize = (value: string) => value.trim().toLowerCase();

const GnbSearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const filteredEntries = useMemo(() => {
    const normalizedQuery = normalize(query);

    if (!normalizedQuery) {
      return searchEntries.slice(0, 12);
    }

    return searchEntries
      .filter((entry) => {
        const haystack = [
          entry.label,
          entry.group,
          ...(entry.keywords ?? []),
          entry.href,
        ]
          .join(' ')
          .toLowerCase();

        return haystack.includes(normalizedQuery);
      })
      .slice(0, 12);
  }, [query]);

  const resetSearch = () => {
    setQuery('');
    setHighlightedIndex(-1);
  };

  const handleOpen = () => {
    resetSearch();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetSearch();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        handleOpen();
      }

      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;

    const frame = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  const handleSelectEntry = (href: string) => {
    navigate(href);
    handleClose();
  };

  const handleChangeQuery = (value: string) => {
    setQuery(value);

    const normalizedQuery = normalize(value);
    const nextFilteredEntries =
      normalizedQuery.length === 0
        ? searchEntries.slice(0, 12)
        : searchEntries
            .filter((entry) => {
              const haystack = [
                entry.label,
                entry.group,
                ...(entry.keywords ?? []),
                entry.href,
              ]
                .join(' ')
                .toLowerCase();

              return haystack.includes(normalizedQuery);
            })
            .slice(0, 12);

    setHighlightedIndex(nextFilteredEntries.length > 0 ? 0 : -1);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightedIndex((prev) => {
        if (filteredEntries.length === 0) return -1;
        return prev < 0 ? 0 : Math.min(prev + 1, filteredEntries.length - 1);
      });
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlightedIndex((prev) => {
        if (filteredEntries.length === 0) return -1;
        return prev <= 0 ? 0 : prev - 1;
      });
      return;
    }

    if (event.key === 'Enter' && highlightedIndex >= 0) {
      event.preventDefault();
      const entry = filteredEntries[highlightedIndex];
      if (entry) handleSelectEntry(entry.href);
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        aria-label="Open search"
        variant="outline"
        color="neutral"
        size="sm"
        classes="h-10 rounded-full px-3 justify-start"
      >
        <span className="flex items-center justify-start gap-2.5 text-sm text-neutral-500 dark:text-neutral-300">
          <LuSearch size={16} />
          <span>Search</span>
        </span>
      </Button>

      <Dialog open={open} onClose={handleClose} className="relative z-[9999]">
        <div className="fixed inset-0 bg-neutral-950/24 backdrop-blur-[2px]" aria-hidden="true" />
        <div className="fixed inset-0 flex items-start justify-center p-4 pt-[12vh]">
          <DialogPanel className="w-full max-w-2xl overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-[0_28px_120px_rgba(15,23,42,0.22)] dark:border-neutral-800 dark:bg-neutral-950">
            <div className="flex items-center gap-3 border-b border-neutral-200 px-5 py-4 dark:border-neutral-800">
              <LuSearch className="shrink-0 text-neutral-400 dark:text-neutral-500" size={18} />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => handleChangeQuery(event.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Search components, categories, or docs"
                className="w-full bg-transparent text-base text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-neutral-50 dark:placeholder:text-neutral-500"
              />
            </div>

            <div className="max-h-[420px] overflow-y-auto p-2">
              {filteredEntries.length > 0 ? (
                <ul className="flex flex-col gap-1">
                  {filteredEntries.map((entry) => {
                    const isActive = pathname === entry.href;
                    const isHighlighted =
                      highlightedIndex >= 0 &&
                      filteredEntries[highlightedIndex]?.id === entry.id &&
                      filteredEntries[highlightedIndex]?.group === entry.group;

                    return (
                      <li key={`${entry.group}-${entry.id}`}>
                        <button
                          type="button"
                          onMouseEnter={() =>
                            setHighlightedIndex(
                              filteredEntries.findIndex(
                                (candidate) =>
                                  candidate.id === entry.id &&
                                  candidate.group === entry.group,
                              ),
                            )
                          }
                          onClick={() => handleSelectEntry(entry.href)}
                          className={cn(
                            'flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-left transition',
                            'hover:bg-neutral-100 dark:hover:bg-neutral-900',
                            isHighlighted && 'bg-neutral-100 dark:bg-neutral-900',
                            isActive && 'bg-neutral-100 dark:bg-neutral-900',
                          )}
                        >
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-medium text-neutral-900 dark:text-neutral-50">
                              {entry.label}
                            </span>
                            <span className="mt-0.5 block truncate text-xs text-neutral-500 dark:text-neutral-400">
                              {entry.group}
                            </span>
                          </span>
                          <span className="ml-4 shrink-0 text-xs text-neutral-400 dark:text-neutral-500">
                            {entry.href}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="px-4 py-10 text-center text-sm text-neutral-500 dark:text-neutral-400">
                  No results found.
                </div>
              )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default GnbSearch;
