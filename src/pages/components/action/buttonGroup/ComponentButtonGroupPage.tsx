'use client';

import { useState } from 'react';
import Button from '@/components/action/Button';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';
import ButtonGroupControllerGuide from './ButtonGroupControllerGuide';
import ButtonGroupContentGuide from './ButtonGroupContentGuide';
import ButtonGroupStateGuide from './ButtonGroupStateGuide';
import ButtonGroupWidthGuide from './ButtonGroupWidthGuide';

export default function ComponentButtonGroupPage() {
  const [size, setSize] = useState<Action.ButtonSize>('md');
  const [color, setColor] = useState<Action.ButtonColor>('neutral');

  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Action', href: '/components/action' },
    { label: 'ButtonGroup', href: '/components/action/buttonGroup' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-action-buttongroup--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">ButtonGroup</Typography>
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

          <ButtonGroupControllerGuide
            size={size}
            color={color}
            onSizeChange={setSize}
            onColorChange={setColor}
          />
          <ButtonGroupContentGuide size={size} color={color} />
          <ButtonGroupStateGuide size={size} color={color} />
          <ButtonGroupWidthGuide size={size} color={color} />

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
    default: '',
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
    description: 'If true, disables every item in the group at once.',
  },
  {
    id: '7',
    property: 'fullWidth',
    type: 'boolean',
    default: 'false',
    description: 'If true, each item expands to fill the available width.',
  },
  {
    id: '8',
    property: 'classes',
    type: 'string',
    default: '',
    description: 'Custom classes applied to the group wrapper.',
  },
  {
    id: '9',
    property: 'itemClasses',
    type: 'string',
    default: '',
    description: 'Custom classes applied to each item button.',
  },
];
