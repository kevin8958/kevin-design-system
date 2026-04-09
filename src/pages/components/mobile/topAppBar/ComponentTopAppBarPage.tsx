'use client';

import { useState } from 'react';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import TopAppBarControllerGuide from '@/pages/components/mobile/topAppBar/TopAppBarControllerGuide';
import TopAppBarNavigationGuide from '@/pages/components/mobile/topAppBar/TopAppBarNavigationGuide';
import TopAppBarActionGuide from '@/pages/components/mobile/topAppBar/TopAppBarActionGuide';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'Mobile', href: '/components/mobile' },
  { label: 'TopAppBar', href: '/components/mobile/topAppBar' },
];

const propsData = [
  {
    id: '1',
    property: 'title',
    type: 'string',
    default: "''",
    description: 'Primary title shown in the mobile header.',
  },
  {
    id: '2',
    property: 'subtitle',
    type: 'string',
    default: 'undefined',
    description: 'Optional secondary text below the title.',
  },
  {
    id: '3',
    property: 'align',
    type: ["'left'", "'center'"],
    default: "'left'",
    description: 'Controls how the title block is aligned between the side slots.',
  },
  {
    id: '4',
    property: 'leading',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Slot for a back button, menu button, or custom leading control.',
  },
  {
    id: '5',
    property: 'actions',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Trailing actions rendered on the right side of the bar.',
  },
  {
    id: '6',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes for the top app bar wrapper.',
  },
];

export default function ComponentTopAppBarPage() {
  const [align, setAlign] = useState<Mobile.TopAppBarAlign>('left');

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">TopAppBar</Typography>
            <Button
              classes="mb-2"
              variant="outline"
              color="neutral"
              size="sm"
              icon={<LuExternalLink size={14} />}
              iconPosition="right"
              onClick={() =>
                window.open(
                  `${STORYBOOK_URL}?path=/docs/components-mobile-topappbar--docs`,
                  '_blank',
                )
              }
            >
              Storybook
            </Button>
          </FlexWrapper>

          <TopAppBarControllerGuide align={align} onAlignChange={setAlign} />
          <TopAppBarNavigationGuide align={align} />
          <TopAppBarActionGuide align={align} />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
