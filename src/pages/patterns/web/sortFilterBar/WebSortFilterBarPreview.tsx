'use client';

import Button from '@/components/action/Button';
import Tag from '@/components/data/Tag';
import Typography from '@/components/foundation/Typography';
import Select from '@/components/input/Select';
import TextInput from '@/components/input/TextInput';

type WebSortFilterBarPreviewProps = {
  state?: 'default' | 'filtered' | 'loading';
  layout?: 'compact' | 'expanded';
};

const sortOptions = [
  { label: 'Most relevant', value: 'relevant' },
  { label: 'Newest first', value: 'newest' },
  { label: 'Highest rated', value: 'rated' },
];

const activeFilters = ['Remote', 'Design Systems', 'Senior'];

export default function WebSortFilterBarPreview({
  state = 'default',
  layout = 'compact',
}: WebSortFilterBarPreviewProps) {
  const isFiltered = state === 'filtered';
  const isLoading = state === 'loading';
  const showFilterRow = isFiltered || layout === 'expanded';

  return (
    <div className="w-full max-w-[760px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <Typography variant="H3">Sort & Filter Bar</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Keep search, sorting, and active refinements in one predictable band
            above the results.
          </Typography>
        </div>

        <div className="rounded-[24px] border border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/60">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
              <div className="min-w-0 flex-1">
                <TextInput
                  placeholder="Search roles, teams, or keywords"
                  inputProps={{ defaultValue: 'design system' }}
                  suffix={<span className="text-sm">⌘K</span>}
                />
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,180px)_auto_auto]">
                <Select label="Sort" options={sortOptions} value="relevant" />
                <Button variant="outline" color="neutral">
                  Filters (6)
                </Button>
                <Button color="primary" loading={isLoading}>
                  Refresh
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                {isFiltered ? '14 filtered results' : '148 results'}
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <span>Updated 2 minutes ago</span>
                <span className="size-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span>Stable sorting applied</span>
              </div>
            </div>

            {showFilterRow ? (
              <div className="flex flex-wrap items-center gap-2">
                {activeFilters.map((filter) => (
                  <Tag key={filter} label={filter} variant="primary" />
                ))}
                <Button variant="clear" color="primary" size="sm">
                  Clear all
                </Button>
              </div>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {[
            'Principal Product Designer',
            'Design Systems Engineer',
            'Senior UX Architect',
          ].map((title) => (
            <div
              key={title}
              className="rounded-[22px] border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                {title}
              </p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Remote · Full-time · 5m ago
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
