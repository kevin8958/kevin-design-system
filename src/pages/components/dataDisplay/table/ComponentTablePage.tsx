'use client';

import TableTypeGuide from '@/pages/components/dataDisplay/table/TableTypeGuide';
import TableStateGuide from '@/pages/components/dataDisplay/table/TableStateGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentTablePage() {
  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Data Display', href: '/components/dataDisplay' },
    { label: 'Table', href: '/components/dataDisplay/table' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-data-display-table--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Table</Typography>
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

          <TableTypeGuide />
          <TableStateGuide />

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
    property: 'columns',
    type: 'Column[]',
    default: '[]',
    description: 'Column definitions used to render table headers and cells.',
  },
  {
    id: '2',
    property: 'data',
    type: 'Row[]',
    default: '[]',
    description: 'Row data rendered in the table body.',
  },
];
