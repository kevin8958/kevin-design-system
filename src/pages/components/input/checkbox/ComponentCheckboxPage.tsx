'use client';

import CheckboxSizeGuide from '@/pages/components/input/checkbox/CheckboxSizeGuide';
import CheckboxStateGuide from '@/pages/components/input/checkbox/CheckboxStateGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentCheckboxPage() {
  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Input', href: '/components/input' },
    { label: 'Checkbox', href: '/components/input/checkbox' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-input-checkbox--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Checkbox</Typography>
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

          {/* 가이드 섹션들 */}
          <CheckboxSizeGuide />
          <CheckboxStateGuide />

          {/* Props Table */}
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
    property: 'label',
    type: 'string',
    default: "''",
    description: 'The text label displayed next to the checkbox.',
  },
  {
    id: '2',
    property: 'id',
    type: 'string',
    default: "''",
    description:
      'Unique identifier used for accessibility and linking the label.',
  },
  {
    id: '3',
    property: 'checked',
    type: 'boolean',
    default: 'false',
    description: 'Whether the checkbox is currently selected.',
  },
  {
    id: '4',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'sm'",
    description: 'Determines the scale of the checkbox and its icon.',
  },
  {
    id: '5',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'If true, prevents user interaction and applies muted styles.',
  },
  {
    id: '6',
    property: 'invalid',
    type: 'boolean',
    default: 'false',
    description: 'Applies error-specific styling to the border.',
  },
  {
    id: '7',
    property: 'onChange',
    type: '(data: { id: string; checked: boolean }) => void',
    default: 'undefined',
    description: 'Callback function triggered when the checked state changes.',
  },
  {
    id: '8',
    property: 'classes',
    type: 'string',
    default: "''",
    description:
      'Additional CSS classes for custom styling on the wrapper label.',
  },
];
