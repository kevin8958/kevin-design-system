'use client';

import TextInputSizeGuide from '@/pages/components/input/textinput/TextInputSizeGuide';
import TextInputStateGuide from '@/pages/components/input/textinput/TextInputStateGuide';
import TextInputTypeGuide from '@/pages/components/input/textinput/TextInputTypeGuide';
import TextInputPrefixGuide from '@/pages/components/input/textinput/TextInputPrefixGuide';
import TextInputSuffixGuide from '@/pages/components/input/textinput/TextInputSuffixGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentTextInputPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Input', href: '/components/input' },
    { label: 'TextInput', href: '/components/input/textinput' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-common-textinput--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">TextInput</Typography>
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

          <TextInputSizeGuide />
          <TextInputStateGuide />
          <TextInputTypeGuide />
          <TextInputPrefixGuide />
          <TextInputSuffixGuide />

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
    description: 'The label text displayed above the input field.',
  },
  {
    id: '2',
    property: 'id',
    type: 'string',
    default: "''",
    description:
      'Unique identifier for the input, used for label association and accessibility.',
  },
  {
    id: '3',
    property: 'type',
    type: ["'text'", "'password'", "'email'", "'number'"],
    default: "'text'",
    description:
      'The HTML input type determining the keyboard and data behavior.',
  },
  {
    id: '4',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'md'",
    description: 'The vertical height and padding scale of the input.',
  },
  {
    id: '5',
    property: 'placeholder',
    type: 'string',
    default: "''",
    description: 'Hint text displayed when the input is empty.',
  },
  {
    id: '6',
    property: 'required',
    type: 'boolean',
    default: 'false',
    description: 'If true, displays a required indicator (*) on the label.',
  },
  {
    id: '7',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Prevents user interaction and applies disabled styling.',
  },
  {
    id: '8',
    property: 'error',
    type: 'boolean',
    default: 'false',
    description: 'Indicates a validation error with a high-contrast border.',
  },
  {
    id: '9',
    property: 'errorMsg',
    type: 'string',
    default: "''",
    description:
      'Validation message displayed below the input when in error state.',
  },
  {
    id: '10',
    property: 'prefix',
    type: 'ReactNode | string',
    default: "''",
    description: 'Icon or text displayed on the left side inside the input.',
  },
  {
    id: '11',
    property: 'suffix',
    type: 'ReactNode | string',
    default: "''",
    description:
      'Icon, text, or interactive element displayed on the right side.',
  },
  {
    id: '12',
    property: 'inputProps',
    type: 'React.InputHTMLAttributes',
    default: '{}',
    description: 'Native HTML attributes to be spread onto the input element.',
  },
  {
    id: '13',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional CSS classes for custom styling overrides.',
  },
];
