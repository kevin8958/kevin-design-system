'use client';

import ProgressSizeGuide from '@/pages/components/feedback/progress/ProgressSizeGuide';
import ProgressStateGuide from '@/pages/components/feedback/progress/ProgressStateGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentProgressPage() {
  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Feedback', href: '/components/feedback' },
    { label: 'Progress', href: '/components/feedback/progress' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-feedback-progress--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Progress</Typography>
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

          <ProgressSizeGuide />
          <ProgressStateGuide />

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
    property: 'value',
    type: 'number',
    default: '0',
    description: 'Current progress value.',
  },
  {
    id: '2',
    property: 'max',
    type: 'number',
    default: '100',
    description: 'Maximum progress value used for percentage calculation.',
  },
  {
    id: '3',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'md'",
    description: 'Controls the height of the progress track.',
  },
  {
    id: '4',
    property: 'showValue',
    type: 'boolean',
    default: 'false',
    description: 'Displays the computed percentage above the bar when true.',
  },
  {
    id: '5',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes for the root wrapper.',
  },
];
