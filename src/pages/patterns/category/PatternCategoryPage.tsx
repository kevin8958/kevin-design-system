'use client';

import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import {
  getPatternCategories,
  isPatternPlatform,
} from '@/constants/common';
import { cn } from '@/libs/utils';
import { Link, useParams } from 'react-router-dom';
import { LuArrowUpRight } from 'react-icons/lu';

export default function PatternCategoryPage() {
  const { platform: platformParam, categoryId } = useParams();
  const platform = isPatternPlatform(platformParam) ? platformParam : null;
  const category =
    platform && categoryId
      ? getPatternCategories(platform).find((entry) => entry.id === categoryId)
      : null;

  if (!category) {
    return (
      <FlexWrapper classes="w-full px-4 py-16" direction="col" items="start">
        <Typography variant="H2">Pattern Category Not Found</Typography>
        <Typography
          variant="B1"
          classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
        >
          The pattern category you requested does not exist yet.
        </Typography>
      </FlexWrapper>
    );
  }

  const breadcrumbItems = [
    { label: 'Patterns', href: `/patterns/${platform}` },
    { label: category.label, href: category.href },
  ];

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" gap={10}>
      <BreadCrumb items={breadcrumbItems} />

      <div className="inline-flex w-fit rounded-xl bg-neutral-100 p-1 dark:bg-neutral-800/80">
        {(['web', 'app'] as const).map((entry) => {
          const isActive = platform === entry;

          return (
            <Link
              key={entry}
              to={`/patterns/${entry}/${category.id}`}
              className={cn(
                'rounded-[10px] px-4 py-2 text-sm font-semibold transition-colors no-underline',
                isActive
                  ? 'bg-white text-secondary-500 shadow-sm dark:bg-neutral-900 dark:text-primary-400'
                  : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100',
              )}
            >
              {entry.toUpperCase()}
            </Link>
          );
        })}
      </div>

      <FlexWrapper direction="col" items="start" gap={4} classes="max-w-3xl">
        <Typography variant="H1">{category.label}</Typography>
        <Typography
          variant="B1"
          classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
        >
          {category.description}
        </Typography>
      </FlexWrapper>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        {category.items.map((item) => (
          <Link
            key={item.id}
            to={item.href}
            className="group rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-emerald-400/50"
          >
            <FlexWrapper direction="col" items="start" gap={4}>
              <FlexWrapper justify="between" items="start" classes="w-full">
                <Typography
                  variant="H4"
                  classes="!text-neutral-900 dark:!text-neutral-50"
                >
                  {item.label}
                </Typography>
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
                  작업중
                </span>
              </FlexWrapper>

              <Typography
                variant="B1"
                classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
              >
                {item.description}
              </Typography>

              <span className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                Open pattern
                <LuArrowUpRight size={16} />
              </span>
            </FlexWrapper>
          </Link>
        ))}
      </div>
    </FlexWrapper>
  );
}
