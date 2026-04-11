'use client';

import { useState } from 'react';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';
import EmptyStateControllerGuide from './EmptyStateControllerGuide';
import EmptyStateActionGuide from './EmptyStateActionGuide';
import EmptyStateContentGuide from './EmptyStateContentGuide';

export default function ComponentEmptyStatePage() {
  const [size, setSize] = useState<Data.EmptyStateSize>('md');

  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Data Display', href: '/components/dataDisplay' },
    { label: 'EmptyState', href: '/components/dataDisplay/emptyState' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-data-display-emptystate--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">EmptyState</Typography>
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

          <EmptyStateControllerGuide size={size} onSizeChange={setSize} />
          <EmptyStateActionGuide size={size} />
          <EmptyStateContentGuide size={size} />

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
    property: 'title',
    type: 'string',
    default: "''",
    description: 'Primary headline that explains the empty condition.',
  },
  {
    id: '2',
    property: 'description',
    type: 'string',
    default: "''",
    description: 'Optional supporting message that clarifies what to do next.',
  },
  {
    id: '3',
    property: 'icon',
    type: 'React.ReactNode',
    default: '<LuInbox />',
    description: 'Optional leading visual shown above the title.',
  },
  {
    id: '4',
    property: 'primaryAction',
    type: 'React.ReactNode',
    default: 'undefined',
    description: 'Primary recovery or creation action rendered below the copy.',
  },
  {
    id: '5',
    property: 'secondaryAction',
    type: 'React.ReactNode',
    default: 'undefined',
    description: 'Optional secondary action displayed beside the primary action.',
  },
  {
    id: '6',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'md'",
    description: 'Controls spacing, icon scale, and typography.',
  },
  {
    id: '7',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes applied to the empty state wrapper.',
  },
];
