'use client';

import { useState } from 'react';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';
import StepperControllerGuide from './StepperControllerGuide';
import StepperFlowGuide from './StepperFlowGuide';
import StepperStateGuide from './StepperStateGuide';

export default function ComponentStepperPage() {
  const [size, setSize] = useState<Navigation.StepperSize>('md');
  const [orientation, setOrientation] =
    useState<Navigation.StepperOrientation>('horizontal');

  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Navigation', href: '/components/navigation' },
    { label: 'Stepper', href: '/components/navigation/stepper' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-navigation-stepper--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Stepper</Typography>
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

          <StepperControllerGuide
            size={size}
            orientation={orientation}
            onSizeChange={setSize}
            onOrientationChange={setOrientation}
          />
          <StepperFlowGuide size={size} orientation={orientation} />
          <StepperStateGuide size={size} orientation={orientation} />

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
    type: 'StepperItem[]',
    default: '[]',
    description: 'Ordered list of steps including labels and optional supporting descriptions.',
  },
  {
    id: '2',
    property: 'value',
    type: 'string',
    default: "''",
    description: 'Identifier of the current step.',
  },
  {
    id: '3',
    property: 'onChange',
    type: '(id: string) => void',
    default: 'undefined',
    description: 'Called when the user selects a different step.',
  },
  {
    id: '4',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'md'",
    description: 'Controls indicator scale, spacing, and typography.',
  },
  {
    id: '5',
    property: 'orientation',
    type: ["'horizontal'", "'vertical'"],
    default: "'horizontal'",
    description: 'Switches between row-based and stacked step layouts.',
  },
  {
    id: '6',
    property: 'allowStepClick',
    type: 'boolean',
    default: 'true',
    description: 'Enables step selection through direct clicking.',
  },
  {
    id: '7',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes applied to the stepper root.',
  },
];
