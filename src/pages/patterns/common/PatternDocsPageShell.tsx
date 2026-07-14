'use client';

import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import InlinePlatformSwitch from '@/components/layout/InlinePlatformSwitch';

type PatternDocsPageShellProps = {
  platform: 'web' | 'app';
  categoryId: string;
  categoryLabel: string;
  patternId: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function PatternDocsPageShell({
  platform,
  categoryId,
  categoryLabel,
  patternId,
  title,
  description,
  children,
}: PatternDocsPageShellProps) {
  const breadcrumbItems = [
    { label: 'Patterns', href: `/patterns/${platform}` },
    { label: categoryLabel, href: `/patterns/${platform}/${categoryId}` },
    { label: title, href: `/patterns/${platform}/${categoryId}/${patternId}` },
  ];

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" gap={10}>
      <BreadCrumb items={breadcrumbItems} />

      <InlinePlatformSwitch
        activeValue={platform}
        options={[
          { value: 'web', to: `/patterns/web/${categoryId}/${patternId}` },
          { value: 'app', to: `/patterns/app/${categoryId}/${patternId}` },
        ]}
      />

      <FlexWrapper direction="col" items="start" gap={4} classes="max-w-3xl">
        <span className="rounded-full bg-primary-100 px-2.5 py-1 text-[11px] font-semibold text-primary-700 dark:bg-primary-400/10 dark:text-primary-300">
          {platform.toUpperCase()} Pattern
        </span>
        <Typography variant="H1" responsive>{title}</Typography>
        <Typography
          variant="B1"
          classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
        >
          {description}
        </Typography>
      </FlexWrapper>

      {children}
    </FlexWrapper>
  );
}
