'use client';

import { useState } from 'react';
import MetricCardControllerGuide from '@/pages/components/dataDisplay/metricCard/MetricCardControllerGuide';
import MetricCardContentGuide from '@/pages/components/dataDisplay/metricCard/MetricCardContentGuide';
import MetricCardTrendGuide from '@/pages/components/dataDisplay/metricCard/MetricCardTrendGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentMetricCardPage() {
  const [size, setSize] = useState<Data.MetricCardSize>('md');
  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Data Display', href: '/components/dataDisplay' },
    { label: 'MetricCard', href: '/components/dataDisplay/metricCard' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-data-display-metriccard--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">MetricCard</Typography>
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

          <MetricCardControllerGuide size={size} onSizeChange={setSize} />
          <MetricCardContentGuide size={size} />
          <MetricCardTrendGuide size={size} />

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
    property: 'title',
    type: 'string',
    default: "''",
    description: 'Label shown at the top of the metric card.',
  },
  {
    id: '2',
    property: 'value',
    type: 'number',
    default: '0',
    description: 'Main metric value displayed with optional count up animation.',
  },
  {
    id: '3',
    property: 'change',
    type: 'number',
    default: 'undefined',
    description: 'Optional delta shown beside the main value.',
  },
  {
    id: '4',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'md'",
    description: 'Controls card padding and value scale.',
  },
  {
    id: '5',
    property: 'trend',
    type: ["'up'", "'down'", "'neutral'"],
    default: 'inferred from change',
    description: 'Overrides the trend direction used for arrow and color.',
  },
  {
    id: '6',
    property: 'prefix / suffix',
    type: 'string',
    default: "''",
    description: 'Adds symbols like currency marks or units around the value.',
  },
  {
    id: '7',
    property: 'changeSuffix',
    type: 'string',
    default: "''",
    description: 'Adds a unit such as % to the change value.',
  },
  {
    id: '8',
    property: 'decimals / changeDecimals',
    type: 'number',
    default: '0 / 1',
    description: 'Controls the number of decimal places for the value and delta.',
  },
  {
    id: '9',
    property: 'animated',
    type: 'boolean',
    default: 'true',
    description: 'Enables CountUp animation for the main metric value.',
  },
  {
    id: '10',
    property: 'duration',
    type: 'number',
    default: '1.6',
    description: 'Duration of the CountUp animation in seconds.',
  },
  {
    id: '11',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes for the card wrapper.',
  },
];
