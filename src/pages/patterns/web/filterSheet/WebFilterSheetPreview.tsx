'use client';

import Button from '@/components/action/Button';
import Checkbox from '@/components/input/Checkbox';
import Select from '@/components/input/Select';
import Tag from '@/components/data/Tag';
import Typography from '@/components/foundation/Typography';

type WebFilterSheetPreviewProps = {
  state?: 'default' | 'applied' | 'loading';
  surface?: 'drawer' | 'modal';
};

const sortOptions = [
  { label: 'Most relevant', value: 'relevant' },
  { label: 'Newest first', value: 'newest' },
];

export default function WebFilterSheetPreview({
  state = 'default',
  surface = 'drawer',
}: WebFilterSheetPreviewProps) {
  const isApplied = state === 'applied';
  const isLoading = state === 'loading';

  return (
    <div className="w-full max-w-[820px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
      <div className="relative overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-50/70 p-5 dark:border-neutral-800 dark:bg-neutral-900/60">
        <div className="grid grid-cols-1 gap-3 pr-0 md:grid-cols-2 md:pr-[22rem]">
          {['Design systems', 'Remote', 'Figma', 'Accessibility'].map((item) => (
            <div
              key={item}
              className="rounded-[20px] border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950"
            >
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                {item}
              </p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                12 matching results
              </p>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-neutral-950/5 dark:bg-black/20" />

        <div
          className={[
            'relative mt-5 w-full rounded-[28px] border border-neutral-200 bg-white p-5 shadow-xl dark:border-neutral-800 dark:bg-neutral-950',
            surface === 'drawer'
              ? 'md:absolute md:bottom-5 md:right-5 md:mt-0 md:max-w-[340px]'
              : 'mx-auto max-w-[420px]',
          ].join(' ')}
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <Typography variant="H4">Filters</Typography>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  Narrow the result set without losing the current query.
                </p>
              </div>
              <Button variant="clear" color="neutral" size="sm">
                Close
              </Button>
            </div>

            {isApplied ? (
              <div className="flex flex-wrap gap-2">
                <Tag label="Remote" variant="primary" />
                <Tag label="Design Systems" variant="primary" />
                <Tag label="Senior" variant="primary" />
              </div>
            ) : null}

            <Select label="Sort order" options={sortOptions} value="relevant" />

            <div className="flex flex-col gap-3">
              <Checkbox checked label="Remote only" />
              <Checkbox checked={isApplied} label="Senior roles" />
              <Checkbox checked={isApplied} label="Design systems experience" />
            </div>

            <div className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Result expectation
              </p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Show how filters affect scope before the user commits, especially
                when the sheet covers the results.
              </p>
            </div>

            <div className="flex items-center justify-between gap-3">
              <Button variant="clear" color="primary" size="sm">
                Clear all
              </Button>
              <Button color="primary" loading={isLoading}>
                Apply filters
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
