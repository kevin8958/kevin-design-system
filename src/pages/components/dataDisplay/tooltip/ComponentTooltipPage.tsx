'use client';

import { useState } from 'react';
import TooltipControllerGuide from '@/pages/components/dataDisplay/tooltip/TooltipControllerGuide';
import TooltipTypeGuide from '@/pages/components/dataDisplay/tooltip/TooltipTypeGuide';
import TooltipPositionGuide from '@/pages/components/dataDisplay/tooltip/TooltipPositionGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentTooltipPage() {
  const [color, setColor] = useState<Data.TooltipColor>('neutral');
  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Data Display', href: '/components/dataDisplay' },
    { label: 'Tooltip', href: '/components/dataDisplay/tooltip' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-data-display-tooltip--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Tooltip</Typography>
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

          <TooltipControllerGuide
            color={color}
            onColorChange={setColor}
          />
          <TooltipTypeGuide color={color} />
          <TooltipPositionGuide color={color} />

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
    property: 'content',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Tooltip content rendered inside the floating panel.',
  },
  {
    id: '2',
    property: 'children',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Trigger element that reveals the tooltip on hover or focus.',
  },
  {
    id: '3',
    property: 'position',
    type: ["'top'", "'right'", "'bottom'", "'left'"],
    default: "'top'",
    description: 'Preferred tooltip placement relative to the trigger.',
  },
  {
    id: '4',
    property: 'color',
    type: [
      "'neutral'",
      "'primary'",
      "'info'",
      "'success'",
      "'warning'",
      "'danger'",
    ],
    default: "'neutral'",
    description: 'Controls the tooltip surface color treatment.',
  },
  {
    id: '5',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes for the floating tooltip panel.',
  },
];
