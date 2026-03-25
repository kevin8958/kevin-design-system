'use client';

import Button from '@/components/action/Button';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';
import DropdownWidthGuide from '@/pages/components/action/dropdown/DropdownWidthGuide';
import DropdownPositionGuide from '@/pages/components/action/dropdown/DropdownPositionGuide';
import DropdownGroupGuide from '@/pages/components/action/dropdown/DropdownGroupGuide';
import DropdownDangerGuide from '@/pages/components/action/dropdown/DropdownDangerGuide';
import DropdownSizeGuide from './DropdownSizeGuide';
import DropdownSubMenuGuide from '@/pages/components/action/dropdown/DropdownSubMenuGuide';

export default function ComponentDropdownPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Dropdown', href: '/components/action/dropdown' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-action-dropdown--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Dropdown</Typography>
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

          <DropdownSizeGuide />
          <DropdownWidthGuide />
          <DropdownPositionGuide />
          <DropdownGroupGuide />
          <DropdownDangerGuide />
          <DropdownSubMenuGuide />

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
    property: 'items',
    type: 'DropdownItem[]',
    default: '',
    description: 'Array of dropdown items.',
  },
  {
    id: '2',
    property: 'onChange',
    type: 'function',
    default: '',
    description: 'Callback function when an item is selected.',
  },
  {
    id: '3',
    property: 'dialogPosition',
    type: ['left', 'right'],
    default: "'left'",
    description: 'Position of the dropdown dialog.',
  },
  {
    id: '4',
    property: 'dialogWidth',
    type: 'number',
    default: '',
    description: 'Width of the dropdown dialog.',
  },
  {
    id: '5',
    property: 'buttonItem',
    type: ['string', 'React.ReactNode'],
    default: '',
    description: 'Content of the button that opens the dropdown.',
  },
  {
    id: '6',
    property: 'buttonClasses',
    type: 'string',
    default: '',
    description: 'Additional classes for the button.',
  },
];
