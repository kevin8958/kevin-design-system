'use client';

import { useState } from 'react';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import { propsColumn } from '@/constants/common';
import AppPopoverContentGuide from '@/pages/components/app/popover/AppPopoverContentGuide';
import AppPopoverControllerGuide from '@/pages/components/app/popover/AppPopoverControllerGuide';
import AppPopoverStateGuide from '@/pages/components/app/popover/AppPopoverStateGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Popover', href: '/components/app/popover' },
];

const propsData = [
  {
    id: '1',
    property: 'trigger',
    type: 'ReactNode',
    default: '',
    description: 'Reference element that opens and anchors the popover.',
  },
  {
    id: '2',
    property: 'children',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Body content rendered inside the floating card.',
  },
  {
    id: '3',
    property: 'title',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Optional heading shown at the top of the popover.',
  },
  {
    id: '4',
    property: 'description',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Optional supporting description shown below the title.',
  },
  {
    id: '5',
    property: 'open',
    type: 'boolean',
    default: 'undefined',
    description: 'Controlled open state.',
  },
  {
    id: '6',
    property: 'defaultOpen',
    type: 'boolean',
    default: 'false',
    description: 'Initial open state in uncontrolled mode.',
  },
  {
    id: '7',
    property: 'onOpenChange',
    type: '(open: boolean) => void',
    default: 'undefined',
    description: 'Called whenever the open state changes.',
  },
  {
    id: '8',
    property: 'side',
    type: ['top', 'right', 'bottom', 'left'],
    default: 'bottom',
    description: 'Preferred side for the floating surface.',
  },
  {
    id: '9',
    property: 'align',
    type: ['start', 'center', 'end'],
    default: 'center',
    description: 'Alignment of the floating surface relative to the trigger.',
  },
  {
    id: '10',
    property: 'width',
    type: 'number',
    default: 'undefined',
    description: 'Optional fixed width for the popover surface.',
  },
  {
    id: '11',
    property: 'showArrow',
    type: 'boolean',
    default: 'true',
    description: 'Shows a small arrow pointing back to the trigger.',
  },
  {
    id: '12',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Prevents the trigger from opening the popover.',
  },
];

export default function ComponentAppPopoverPage() {
  const [side, setSide] = useState<App.AppPopoverSide>('bottom');
  const [align, setAlign] = useState<App.AppPopoverAlign>('center');

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper direction="col" items="start" gap={3} classes="w-full">
            <Typography variant="H1">App Popover</Typography>
            <Typography
              variant="B1"
              classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              A React Native-first anchored surface for lightweight context,
              secondary actions, and quick summaries.
            </Typography>
          </FlexWrapper>

          <AppPopoverControllerGuide
            side={side}
            align={align}
            onSideChange={setSide}
            onAlignChange={setAlign}
          />
          <AppPopoverContentGuide side={side} align={align} />
          <AppPopoverStateGuide side={side} align={align} />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
