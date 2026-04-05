'use client';

import GridColumnGuide from '@/pages/components/layout/grid/GridColumnGuide';
import GridGapGuide from '@/pages/components/layout/grid/GridGapGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentGridPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Layout', href: '/components/layout' },
    { label: 'Grid', href: '/components/layout/grid' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-layout-grid--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Grid</Typography>
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

          <GridColumnGuide />
          <GridGapGuide />

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
    property: 'cols',
    type: ['1', '2', '3', '4', '5', '6'],
    default: '3',
    description: 'Controls the number of grid columns.',
  },
  {
    id: '2',
    property: 'gap',
    type: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16'],
    default: '4',
    description: 'Controls spacing between grid items.',
  },
  {
    id: '3',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes for custom layout overrides.',
  },
];
