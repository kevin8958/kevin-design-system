'use client';

import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import { patternCategories } from '@/constants/common';
import { useParams } from 'react-router-dom';

export default function PatternDetailPage() {
  const { categoryId, patternId } = useParams();
  const category = patternCategories.find((entry) => entry.id === categoryId);
  const pattern = category?.items.find((entry) => entry.id === patternId);

  if (!category || !pattern) {
    return (
      <FlexWrapper classes="w-full px-4 py-16" direction="col" items="start">
        <Typography variant="H2">Pattern Not Found</Typography>
        <Typography
          variant="B1"
          classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
        >
          The pattern you requested does not exist yet.
        </Typography>
      </FlexWrapper>
    );
  }

  const breadcrumbItems = [
    { label: 'Patterns', href: '/patterns' },
    { label: category.label, href: category.href },
    { label: pattern.label, href: pattern.href },
  ];

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" gap={10}>
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper direction="col" items="start" gap={4} classes="max-w-3xl">
        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
          작업중
        </span>
        <Typography variant="H1">{pattern.label}</Typography>
        <Typography
          variant="B1"
          classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
        >
          {pattern.description}
        </Typography>
      </FlexWrapper>

      <div className="rounded-[28px] border border-dashed border-neutral-300 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900/60">
        <FlexWrapper direction="col" items="start" gap={4}>
          <Typography variant="H4">Planned For This Pattern</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            This page will document the recommended structure, required
            components, state handling, and complete example flow for the
            pattern.
          </Typography>
          <Typography
            variant="C1"
            classes="!text-neutral-500 dark:!text-neutral-400"
          >
            For now, this route exists so the navigation and information
            architecture are ready before the detailed pattern docs are written.
          </Typography>
        </FlexWrapper>
      </div>
    </FlexWrapper>
  );
}
