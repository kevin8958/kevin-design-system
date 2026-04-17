'use client';

import { useState } from 'react';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import { propsColumn } from '@/constants/common';
import AppDropdownControllerGuide from '@/pages/components/app/dropdown/AppDropdownControllerGuide';
import AppDropdownDangerGuide from '@/pages/components/app/dropdown/AppDropdownDangerGuide';
import AppDropdownGroupGuide from '@/pages/components/app/dropdown/AppDropdownGroupGuide';
import AppDropdownPositionGuide from '@/pages/components/app/dropdown/AppDropdownPositionGuide';
import AppDropdownStateGuide from '@/pages/components/app/dropdown/AppDropdownStateGuide';
import AppDropdownSubMenuGuide from '@/pages/components/app/dropdown/AppDropdownSubMenuGuide';
import AppDropdownWidthGuide from '@/pages/components/app/dropdown/AppDropdownWidthGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Dropdown', href: '/components/app/dropdown' },
];

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
    type: '(value: string) => void',
    default: 'undefined',
    description: 'Called when a terminal item is selected.',
  },
  {
    id: '3',
    property: 'dialogPosition',
    type: ['left', 'right'],
    default: 'left',
    description: 'Aligns the panel to the leading or trailing edge of the trigger.',
  },
  {
    id: '4',
    property: 'dialogWidth',
    type: 'number',
    default: 'undefined',
    description: 'Sets a fixed width for the dropdown panel.',
  },
  {
    id: '5',
    property: 'label',
    type: 'ReactNode',
    default: 'Dropdown',
    description: 'Content rendered in the trigger button.',
  },
  {
    id: '6',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the trigger and prevents the menu from opening.',
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
    property: 'defaultOpen',
    type: 'boolean',
    default: 'false',
    description: 'Starts the menu in the open state for uncontrolled usage.',
  },
  {
    id: '10',
    property: 'open',
    type: 'boolean',
    default: 'undefined',
    description: 'Controlled open state for the menu.',
  },
];

export default function ComponentAppDropdownPage() {
  const [size, setSize] = useState<App.AppButtonSize>('md');
  const [buttonVariant, setButtonVariant] =
    useState<App.AppButtonVariant>('contain');

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper direction="col" items="start" gap={3} classes="w-full">
            <Typography variant="H1">App Dropdown</Typography>
            <Typography
              variant="B1"
              classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              A React Native-first dropdown menu for contextual actions,
              grouped choices, and nested settings paths.
            </Typography>
          </FlexWrapper>

          <AppDropdownControllerGuide
            size={size}
            buttonVariant={buttonVariant}
            onSizeChange={setSize}
            onVariantChange={setButtonVariant}
          />
          <AppDropdownDangerGuide
            size={size}
            buttonVariant={buttonVariant}
          />
          <AppDropdownGroupGuide size={size} buttonVariant={buttonVariant} />
          <AppDropdownPositionGuide
            size={size}
            buttonVariant={buttonVariant}
          />
          <AppDropdownStateGuide size={size} buttonVariant={buttonVariant} />
          <AppDropdownSubMenuGuide
            size={size}
            buttonVariant={buttonVariant}
          />
          <AppDropdownWidthGuide size={size} buttonVariant={buttonVariant} />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
