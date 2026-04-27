'use client';

import Button from '@/components/action/Button';
import EmptyState from '@/components/data/EmptyState';
import Tag from '@/components/data/Tag';
import TextInput from '@/components/input/TextInput';

type WebEmptyResultsPreviewProps = {
  context?: 'search' | 'saved';
  actions?: 'single' | 'double';
};

export default function WebEmptyResultsPreview({
  context = 'search',
  actions = 'double',
}: WebEmptyResultsPreviewProps) {
  const isSaved = context === 'saved';

  return (
    <div className="w-full max-w-[760px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
          <div className="min-w-0 flex-1">
            <TextInput
              placeholder="Search open roles"
              inputProps={{ defaultValue: isSaved ? 'saved candidate lists' : 'design manager' }}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Tag label="Remote" variant="primary" />
            <Tag label={isSaved ? 'Bookmarked only' : 'Series A'} variant="primary" />
            <Tag label={isSaved ? 'Updated this week' : 'Leadership'} variant="primary" />
          </div>
        </div>

        <EmptyState
          title={isSaved ? 'No saved matches fit these filters' : 'No roles match this search'}
          description={
            isSaved
              ? 'The saved list is still here, but the active refinements are hiding every result. Relax one or two filters to recover the shortlist.'
              : 'Try broadening the query or removing one or two refinements so the result set can recover.'
          }
          primaryAction={<Button color="primary">Clear filters</Button>}
          secondaryAction={
            actions === 'double' ? (
              <Button variant="outline" color="neutral">
                Edit search
              </Button>
            ) : undefined
          }
          size="lg"
        />
      </div>
    </div>
  );
}
