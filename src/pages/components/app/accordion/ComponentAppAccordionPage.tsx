'use client';

import { useState } from 'react';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import { propsColumn } from '@/constants/common';
import AppAccordionContentGuide from '@/pages/components/app/accordion/AppAccordionContentGuide';
import AppAccordionControllerGuide from '@/pages/components/app/accordion/AppAccordionControllerGuide';
import AppAccordionStateGuide from '@/pages/components/app/accordion/AppAccordionStateGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Accordion', href: '/components/app/accordion' },
];

const propsData = [
  {
    id: '1',
    property: 'items',
    type: 'AppAccordionItem[]',
    default: '',
    description: 'List of accordion sections to render.',
  },
  {
    id: '2',
    property: 'type',
    type: ['single', 'multiple'],
    default: 'single',
    description: 'Controls whether one or many sections can remain open.',
  },
  {
    id: '3',
    property: 'value',
    type: 'string[]',
    default: 'undefined',
    description: 'Controlled array of expanded item ids.',
  },
  {
    id: '4',
    property: 'defaultValue',
    type: 'string[]',
    default: '[]',
    description: 'Initial array of expanded item ids in uncontrolled mode.',
  },
  {
    id: '5',
    property: 'onChange',
    type: '(value: string[]) => void',
    default: 'undefined',
    description: 'Called whenever the expanded item ids change.',
  },
  {
    id: '6',
    property: 'size',
    type: ['sm', 'md', 'lg'],
    default: 'md',
    description: 'Adjusts header density and content spacing.',
  },
  {
    id: '7',
    property: 'collapsible',
    type: 'boolean',
    default: 'true',
    description: 'Allows the open item to close when using single mode.',
  },
  {
    id: '8',
    property: 'style',
    type: 'StyleProp<ViewStyle>',
    default: 'undefined',
    description: 'Custom style applied to the accordion root.',
  },
  {
    id: '9',
    property: 'itemStyle',
    type: 'StyleProp<ViewStyle>',
    default: 'undefined',
    description: 'Custom style applied to each accordion item.',
  },
  {
    id: '10',
    property: 'contentStyle',
    type: 'StyleProp<ViewStyle>',
    default: 'undefined',
    description: 'Custom style applied to expanded content containers.',
  },
];

export default function ComponentAppAccordionPage() {
  const [size, setSize] = useState<App.AppAccordionSize>('md');
  const [type, setType] = useState<App.AppAccordionType>('single');

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper direction="col" items="start" gap={3} classes="w-full">
            <Typography variant="H1">App Accordion</Typography>
            <Typography
              variant="B1"
              classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              A React Native-first accordion for layered settings and FAQ
              patterns, documented with the same guide rhythm as the web
              component pages.
            </Typography>
          </FlexWrapper>

          <AppAccordionControllerGuide
            size={size}
            type={type}
            onSizeChange={setSize}
            onTypeChange={setType}
          />
          <AppAccordionContentGuide size={size} type={type} />
          <AppAccordionStateGuide size={size} type={type} />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
