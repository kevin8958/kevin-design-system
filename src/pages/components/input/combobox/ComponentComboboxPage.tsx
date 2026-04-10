'use client';

import { useState } from 'react';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';
import ComboboxControllerGuide from './ComboboxControllerGuide';
import ComboboxContentGuide from './ComboboxContentGuide';
import ComboboxStateGuide from './ComboboxStateGuide';

export default function ComponentComboboxPage() {
  const [size, setSize] = useState<Input.ComboboxSize>('md');

  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Input', href: '/components/input' },
    { label: 'Combobox', href: '/components/input/combobox' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-input-combobox--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Combobox</Typography>
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

          <ComboboxControllerGuide size={size} onSizeChange={setSize} />
          <ComboboxContentGuide size={size} />
          <ComboboxStateGuide size={size} />

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
    property: 'options',
    type: 'ComboboxOption[]',
    default: '',
    description: 'List of selectable options used for filtering and selection.',
  },
  {
    id: '2',
    property: 'value',
    type: 'string',
    default: "''",
    description: 'Currently selected option value.',
  },
  {
    id: '3',
    property: 'onChange',
    type: '(value: string) => void',
    default: '',
    description: 'Called when the user selects an option.',
  },
  {
    id: '4',
    property: 'placeholder',
    type: 'string',
    default: "'Search or select'",
    description: 'Hint text shown before typing begins.',
  },
  {
    id: '5',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'md'",
    description: 'Controls the trigger height and input spacing.',
  },
  {
    id: '6',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Prevents typing and selection.',
  },
  {
    id: '7',
    property: 'invalid',
    type: 'boolean',
    default: 'false',
    description: 'Applies validation styling to the field.',
  },
  {
    id: '8',
    property: 'errorMsg',
    type: 'string',
    default: "''",
    description: 'Validation message shown below the field.',
  },
  {
    id: '9',
    property: 'emptyText',
    type: 'string',
    default: "'No matching results.'",
    description: 'Text shown when filtering returns no options.',
  },
  {
    id: '10',
    property: 'label',
    type: 'string',
    default: "''",
    description: 'Optional field label shown above the combobox.',
  },
  {
    id: '11',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes applied to the trigger wrapper.',
  },
];
