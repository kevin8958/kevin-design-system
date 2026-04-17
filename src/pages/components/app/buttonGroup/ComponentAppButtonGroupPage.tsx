'use client';

import { useState } from 'react';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import { propsColumn } from '@/constants/common';
import AppButtonGroupContentGuide from '@/pages/components/app/buttonGroup/AppButtonGroupContentGuide';
import AppButtonGroupControllerGuide from '@/pages/components/app/buttonGroup/AppButtonGroupControllerGuide';
import AppButtonGroupStateGuide from '@/pages/components/app/buttonGroup/AppButtonGroupStateGuide';
import AppButtonGroupWidthGuide from '@/pages/components/app/buttonGroup/AppButtonGroupWidthGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'ButtonGroup', href: '/components/app/buttonGroup' },
];

const propsData = [
  {
    id: '1',
    property: 'items',
    type: '{ label: ReactNode; value: string; disabled?: boolean }[]',
    default: '',
    description: 'List of selectable options rendered inside the group.',
  },
  {
    id: '2',
    property: 'value',
    type: 'string',
    default: '',
    description: 'Currently selected option value.',
  },
  {
    id: '3',
    property: 'onChange',
    type: '(value: string) => void',
    default: 'undefined',
    description: 'Called when the selected option changes.',
  },
  {
    id: '4',
    property: 'size',
    type: ['sm', 'md', 'lg'],
    default: 'sm',
    description: 'Controls the size of each group item.',
  },
  {
    id: '5',
    property: 'color',
    type: ['primary', 'neutral', 'info', 'success', 'warning', 'danger'],
    default: 'neutral',
    description: 'Controls the selected and unselected button color treatment.',
  },
  {
    id: '6',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables every item in the group at once.',
  },
  {
    id: '7',
    property: 'fullWidth',
    type: 'boolean',
    default: 'false',
    description: 'Expands each item to share the available width.',
  },
  {
    id: '8',
    property: 'style',
    type: 'StyleProp<ViewStyle>',
    default: 'undefined',
    description: 'Custom style applied to the group wrapper.',
  },
  {
    id: '9',
    property: 'itemStyle',
    type: 'StyleProp<ViewStyle>',
    default: 'undefined',
    description: 'Custom style applied to each group item button.',
  },
];

export default function ComponentAppButtonGroupPage() {
  const [size, setSize] = useState<App.AppButtonSize>('md');
  const [color, setColor] = useState<App.AppButtonColor>('neutral');

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper direction="col" items="start" gap={3} classes="w-full">
            <Typography variant="H1">App ButtonGroup</Typography>
            <Typography
              variant="B1"
              classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              A React Native-first segmented control for mode switching and
              compact option groups, documented with the same guide rhythm as
              the web component pages.
            </Typography>
          </FlexWrapper>

          <AppButtonGroupControllerGuide
            size={size}
            color={color}
            onSizeChange={setSize}
            onColorChange={setColor}
          />
          <AppButtonGroupContentGuide size={size} color={color} />
          <AppButtonGroupStateGuide size={size} color={color} />
          <AppButtonGroupWidthGuide size={size} color={color} />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
