'use client';

import { useState } from 'react';
import Button from '@/components/action/Button';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';
import AccordionControllerGuide from './AccordionControllerGuide';
import AccordionContentGuide from './AccordionContentGuide';
import AccordionStateGuide from './AccordionStateGuide';

export default function ComponentAccordionPage() {
  const [size, setSize] = useState<Action.ButtonSize>('md');
  const [type, setType] = useState<Action.AccordionType>('single');

  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Action', href: '/components/action' },
    { label: 'Accordion', href: '/components/action/accordion' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-action-accordion--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Accordion</Typography>
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

          <AccordionControllerGuide
            size={size}
            type={type}
            onSizeChange={setSize}
            onTypeChange={setType}
          />
          <AccordionContentGuide size={size} type={type} />
          <AccordionStateGuide size={size} type={type} />

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
    type: 'AccordionItem[]',
    default: '',
    description: 'List of accordion sections to render.',
  },
  {
    id: '2',
    property: 'type',
    type: ['single', 'multiple'],
    default: 'single',
    description: 'Controls whether one or many sections can stay open.',
  },
  {
    id: '3',
    property: 'value',
    type: 'string[]',
    default: '',
    description: 'Controlled array of open section ids.',
  },
  {
    id: '4',
    property: 'defaultValue',
    type: 'string[]',
    default: '[]',
    description: 'Initial array of open section ids in uncontrolled mode.',
  },
  {
    id: '5',
    property: 'onChange',
    type: '(value: string[]) => void',
    default: '',
    description: 'Called whenever the open section ids change.',
  },
  {
    id: '6',
    property: 'size',
    type: ['sm', 'md', 'lg'],
    default: 'md',
    description: 'Controls the header spacing and content density.',
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
    property: 'classes',
    type: 'string',
    default: '',
    description: 'Additional classes for the accordion root.',
  },
  {
    id: '9',
    property: 'itemClasses',
    type: 'string',
    default: '',
    description: 'Additional classes applied to each accordion item.',
  },
];
