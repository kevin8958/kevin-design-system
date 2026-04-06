'use client';

import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';
import SelectSizeGuide from './SelectSizeGuide';
import SelectStateGuide from './SelectStateGuide';

export default function ComponentSelectPage() {
  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Input', href: '/components/input' },
    { label: 'Select', href: '/components/input/select' },
  ];

  const handleOpenStorybook = () => {
    window.open(`${STORYBOOK_URL}?path=/docs/components-input-select--docs`, '_blank');
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Select</Typography>
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

          <SelectSizeGuide />
          <SelectStateGuide />

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
    type: '{ label: string; value: string; disabled?: boolean }[]',
    default: '',
    description: 'List of selectable options shown in the popover.',
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
    description: 'Called when the selected option changes.',
  },
  {
    id: '4',
    property: 'placeholder',
    type: 'string',
    default: "'Select option'",
    description: 'Text shown before the user picks a value.',
  },
  {
    id: '5',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'md'",
    description: 'Controls the height and spacing of the trigger.',
  },
  {
    id: '6',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Prevents opening the list and applying a new selection.',
  },
  {
    id: '7',
    property: 'invalid',
    type: 'boolean',
    default: 'false',
    description: 'Applies validation styling to the trigger.',
  },
  {
    id: '8',
    property: 'errorMsg',
    type: 'string',
    default: "''",
    description: 'Validation message shown beneath the field.',
  },
  {
    id: '9',
    property: 'label',
    type: 'string',
    default: "''",
    description: 'Optional field label displayed above the trigger.',
  },
  {
    id: '10',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes applied to the trigger.',
  },
];
