'use client';

import Button from '@/components/action/Button';
import EmptyState from '@/components/data/EmptyState';
import Tag from '@/components/data/Tag';
import Typography from '@/components/foundation/Typography';
import Select from '@/components/input/Select';
import TextInput from '@/components/input/TextInput';

type WebSearchResultsPreviewProps = {
  state?: 'default' | 'loading' | 'empty';
  layout?: 'cards' | 'table';
};

const sortOptions = [
  { label: 'Most relevant', value: 'relevant' },
  { label: 'Newest first', value: 'newest' },
];

const resultCards = [
  {
    title: 'Senior Design Systems Engineer',
    meta: 'Remote · Full-time · Platform',
    description:
      'Lead tokens, component APIs, and accessibility quality across the product suite.',
  },
  {
    title: 'Product Designer, Search UX',
    meta: 'Toronto · Hybrid · Growth',
    description:
      'Shape faceted discovery, ranking feedback, and multi-step filtering flows.',
  },
  {
    title: 'Content Designer, Marketplace',
    meta: 'Remote · Contract · Commerce',
    description:
      'Clarify listing taxonomy, search guidance, and onboarding content for sellers.',
  },
];

export default function WebSearchResultsPreview({
  state = 'default',
  layout = 'cards',
}: WebSearchResultsPreviewProps) {
  if (state === 'empty') {
    return (
      <div className="w-full max-w-[760px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
        <EmptyState
          title="No matching roles found"
          description="Try broadening your filters or removing one or two refinements to recover the result set."
          primaryAction={<Button color="primary">Clear filters</Button>}
          secondaryAction={
            <Button variant="outline" color="neutral">
              Edit search
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-[760px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
          <div className="min-w-0 flex-1">
            <TextInput
              placeholder="Search open roles"
              inputProps={{ defaultValue: 'design' }}
            />
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,180px)_auto]">
            <Select label="Sort" options={sortOptions} value="relevant" />
            <Button variant="outline" color="neutral">
              Filters (3)
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Tag label="Remote" variant="primary" />
          <Tag label="Design Systems" variant="primary" />
          <Tag label="Senior" variant="primary" />
        </div>

        <div className="flex items-center justify-between gap-3">
          <Typography variant="B1" classes="!font-medium">
            24 matching roles
          </Typography>
          <Button variant="clear" color="primary" size="sm">
            Save search
          </Button>
        </div>

        {state === 'loading' ? (
          <div className="flex flex-col gap-3">
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-neutral-200 bg-neutral-50/80 p-5 dark:border-neutral-800 dark:bg-neutral-900/70"
              >
                <div className="h-4 w-40 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                <div className="mt-3 h-3 w-28 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                <div className="mt-4 h-3 w-full rounded-full bg-neutral-200 dark:bg-neutral-800" />
              </div>
            ))}
          </div>
        ) : layout === 'cards' ? (
          <div className="grid grid-cols-1 gap-3">
            {resultCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[22px] border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <p className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  {card.title}
                </p>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {card.meta}
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto rounded-[22px] border border-neutral-200 dark:border-neutral-800">
            <div className="grid min-w-[620px] grid-cols-[minmax(220px,2fr)_minmax(140px,1fr)_minmax(120px,1fr)] bg-neutral-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400">
              <span>Role</span>
              <span>Location</span>
              <span>Type</span>
            </div>
            {resultCards.map((card) => (
              <div
                key={card.title}
                className="grid min-w-[620px] grid-cols-[minmax(220px,2fr)_minmax(140px,1fr)_minmax(120px,1fr)] gap-3 border-t border-neutral-200 px-4 py-4 text-sm dark:border-neutral-800"
              >
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  {card.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {card.meta.split(' · ')[0]}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {card.meta.split(' · ')[1]}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
