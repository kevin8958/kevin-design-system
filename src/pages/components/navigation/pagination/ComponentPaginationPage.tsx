'use client';

import PaginationTypeGuide from '@/pages/components/navigation/pagination/PaginationTypeGuide';
import PaginationStateGuide from '@/pages/components/navigation/pagination/PaginationStateGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentPaginationPage() {
  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Navigation', href: '/components/navigation' },
    { label: 'Pagination', href: '/components/navigation/pagination' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-navigation-pagination--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Pagination</Typography>
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

          <PaginationTypeGuide />
          <PaginationStateGuide />

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
    property: 'currentPage',
    type: 'number',
    default: '1',
    description: 'Currently selected page number.',
  },
  {
    id: '2',
    property: 'totalPages',
    type: 'number',
    default: '1',
    description: 'Total number of available pages.',
  },
  {
    id: '3',
    property: 'siblingCount',
    type: 'number',
    default: '1',
    description: 'Number of adjacent page buttons shown around the current page.',
  },
  {
    id: '4',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables all pagination controls.',
  },
  {
    id: '5',
    property: 'onPageChange',
    type: '(page: number) => void',
    default: 'undefined',
    description: 'Called when the user selects a different page.',
  },
  {
    id: '6',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes for the pagination wrapper.',
  },
];
