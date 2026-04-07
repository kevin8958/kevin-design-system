'use client';

import { useState } from 'react';
import RadioControllerGuide from '@/pages/components/input/radio/RadioControllerGuide';
import RadioStateGuide from '@/pages/components/input/radio/RadioStateGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentRadioPage() {
  const [size, setSize] = useState<Input.RadioSize>('md');

  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Input', href: '/components/input' },
    { label: 'Radio', href: '/components/input/radio' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-input-radio--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Radio</Typography>
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

          <RadioControllerGuide size={size} onSizeChange={setSize} />
          <RadioStateGuide size={size} />

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
    description: 'The title text displayed above the radio group.',
  },
  {
    id: '2',
    property: 'options',
    type: 'RadioOption[]',
    default: '[]',
    description:
      'Array of options containing id, label, and optional desc/disabled.',
  },
  {
    id: '3',
    property: 'value',
    type: 'string',
    default: "''",
    description: 'The id of the currently selected option.',
  },
  {
    id: '4',
    property: 'onChange',
    type: '(value: string) => void',
    default: 'undefined',
    description: 'Callback function triggered when a new option is selected.',
  },
  {
    id: '5',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'md'",
    description:
      'Adjusts the overall scale including padding, circle size, and typography.',
  },
  {
    id: '6',
    property: 'name',
    type: 'string',
    default: 'useId()',
    description:
      'The name attribute for the radio group. Defaults to a unique ID.',
  },
  {
    id: '7',
    property: 'invalid',
    type: 'boolean',
    default: 'false',
    description: 'If true, changes the selected radio border to danger color.',
  },
  {
    id: '8',
    property: 'errorMsg',
    type: 'string',
    default: "''",
    description: 'Error message displayed absolutely below the radio group.',
  },
  {
    id: '9',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'If true, disables all radio options in the group.',
  },
  {
    id: '10',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional CSS classes for the radio group container.',
  },
];
