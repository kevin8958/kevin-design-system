'use client';

import SwitchSizeGuide from '@/pages/components/input/switch/SwitchSizeGuide';
import SwitchStateGuide from '@/pages/components/input/switch/SwitchStateGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentSwitchPage() {
  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Input', href: '/components/input' },
    { label: 'Switch', href: '/components/input/switch' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-input-switch--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Switch</Typography>
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

          <SwitchSizeGuide />
          <SwitchStateGuide />

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
    description: 'The primary label text displayed next to the switch.',
  },
  {
    id: '2',
    property: 'description',
    type: 'string',
    default: "''",
    description: 'Secondary informative text displayed below the label.',
  },
  {
    id: '3',
    property: 'checked',
    type: 'boolean',
    default: 'false',
    description: 'The current state of the switch (on/off).',
  },
  {
    id: '4',
    property: 'onChange',
    type: '(checked: boolean) => void',
    default: 'undefined',
    description: 'Callback function triggered when the switch is toggled.',
  },
  {
    id: '5',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'md'",
    description: 'Controls the width, height, and thumb size of the switch.',
  },
  {
    id: '6',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Prevents user interaction and applies disabled styling.',
  },
  {
    id: '7',
    property: 'invalid',
    type: 'boolean',
    default: 'false',
    description:
      'Applies error styling (danger color) to the switch background.',
  },
  {
    id: '8',
    property: 'errorMsg',
    type: 'string',
    default: "''",
    description: 'Error message displayed below the switch component.',
  },
  {
    id: '9',
    property: 'className',
    type: 'string',
    default: "''",
    description: 'Additional CSS classes for the switch container.',
  },
];
