'use client';

import { useState } from 'react';
import Button from '@/components/action/Button';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';
import DropdownControllerGuide from '@/pages/components/action/dropdown/DropdownControllerGuide';
import DropdownWidthGuide from '@/pages/components/action/dropdown/DropdownWidthGuide';
import DropdownPositionGuide from '@/pages/components/action/dropdown/DropdownPositionGuide';
import DropdownGroupGuide from '@/pages/components/action/dropdown/DropdownGroupGuide';
import DropdownDangerGuide from '@/pages/components/action/dropdown/DropdownDangerGuide';
import DropdownSubMenuGuide from '@/pages/components/action/dropdown/DropdownSubMenuGuide';
import DropdownStateGuide from '@/pages/components/action/dropdown/DropdownStateGuide';

export default function ComponentDropdownPage() {
  const [size, setSize] = useState<Action.ButtonSize>('md');
  const [buttonVariant, setButtonVariant] = useState<Action.ButtonVariant>('contain');

  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Action', href: '/components/action' },
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

          <DropdownControllerGuide
            size={size}
            buttonVariant={buttonVariant}
            onSizeChange={setSize}
            onVariantChange={setButtonVariant}
          />
          <DropdownDangerGuide size={size} buttonVariant={buttonVariant} />
          <DropdownGroupGuide size={size} buttonVariant={buttonVariant} />
          <DropdownPositionGuide size={size} buttonVariant={buttonVariant} />
          <DropdownStateGuide size={size} buttonVariant={buttonVariant} />
          <DropdownSubMenuGuide size={size} buttonVariant={buttonVariant} />
          <DropdownWidthGuide size={size} buttonVariant={buttonVariant} />

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
    property: 'label',
    type: ['string', 'React.ReactNode'],
    default: '',
    description: 'Content of the button that opens the dropdown.',
  },
  {
    id: '6',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'If true, the trigger is disabled and the menu cannot be opened.',
  },
  {
    id: '7',
    property: 'buttonVariant',
    type: ['contain', 'outline', 'clear'],
    default: 'contain',
    description: 'Controls the trigger button visual style.',
  },
  {
    id: '8',
    property: 'size',
    type: ['sm', 'md', 'lg'],
    default: 'md',
    description: 'Controls the trigger button size.',
  },
  {
    id: '9',
    property: 'buttonClasses',
    type: 'string',
    default: '',
    description: 'Additional classes for the button.',
  },
];
