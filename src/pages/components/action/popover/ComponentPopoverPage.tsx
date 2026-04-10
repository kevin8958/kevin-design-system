'use client';

import { useState } from 'react';
import Button from '@/components/action/Button';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';
import PopoverControllerGuide from './PopoverControllerGuide';
import PopoverContentGuide from './PopoverContentGuide';
import PopoverStateGuide from './PopoverStateGuide';

export default function ComponentPopoverPage() {
  const [side, setSide] = useState<Action.PopoverSide>('bottom');
  const [align, setAlign] = useState<Action.PopoverAlign>('center');

  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Action', href: '/components/action' },
    { label: 'Popover', href: '/components/action/popover' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-action-popover--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Popover</Typography>
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

          <PopoverControllerGuide
            side={side}
            align={align}
            onSideChange={setSide}
            onAlignChange={setAlign}
          />
          <PopoverContentGuide side={side} align={align} />
          <PopoverStateGuide side={side} align={align} />

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
    property: 'trigger',
    type: 'ReactNode',
    default: '',
    description: 'Reference element that opens and anchors the popover.',
  },
  {
    id: '2',
    property: 'children',
    type: 'ReactNode',
    default: '',
    description: 'Body content rendered inside the floating card.',
  },
  {
    id: '3',
    property: 'title',
    type: 'ReactNode',
    default: '',
    description: 'Optional heading shown at the top of the popover.',
  },
  {
    id: '4',
    property: 'description',
    type: 'ReactNode',
    default: '',
    description: 'Optional supporting description shown below the title.',
  },
  {
    id: '5',
    property: 'open',
    type: 'boolean',
    default: '',
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
    default: '',
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
    default: '',
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
  {
    id: '13',
    property: 'portal',
    type: 'boolean',
    default: 'true',
    description: 'When false, renders the floating layer inline instead of using a portal.',
  },
  {
    id: '14',
    property: 'classes',
    type: 'string',
    default: '',
    description: 'Additional classes for the floating surface.',
  },
];
