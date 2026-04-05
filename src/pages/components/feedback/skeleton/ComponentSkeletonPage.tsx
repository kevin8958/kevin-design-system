'use client';

import SkeletonVariantGuide from '@/pages/components/feedback/skeleton/SkeletonVariantGuide';
import SkeletonStateGuide from '@/pages/components/feedback/skeleton/SkeletonStateGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentSkeletonPage() {
  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Feedback', href: '/components/feedback' },
    { label: 'Skeleton', href: '/components/feedback/skeleton' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-feedback-skeleton--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Skeleton</Typography>
            <Button
              classes="mb-2"
              variant="outline"
              color="neutral"
              size="sm"
              icon={<LuExternalLink size={14} />}
              iconPosition="right"
              onClick={handleOpenStorybook}
            >
              Storybook
            </Button>
          </FlexWrapper>

          <SkeletonVariantGuide />
          <SkeletonStateGuide />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}

const propsData = [
  {
    id: '1',
    property: 'width',
    type: 'number | string',
    default: 'undefined',
    description: 'Custom width for the placeholder.',
  },
  {
    id: '2',
    property: 'height',
    type: 'number | string',
    default: 'undefined',
    description: 'Custom height for the placeholder.',
  },
  {
    id: '3',
    property: 'variant',
    type: ["'line'", "'rect'", "'circle'"],
    default: "'line'",
    description: 'Determines the placeholder shape.',
  },
  {
    id: '4',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes for custom styling overrides.',
  },
];
