'use client';

import CountUpTypeGuide from '@/pages/components/interaction/countUp/CountUpTypeGuide';
import CountUpStateGuide from '@/pages/components/interaction/countUp/CountUpStateGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentCountUpPage() {
  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Interaction', href: '/components/interaction' },
    { label: 'Count Up', href: '/components/interaction/countUp' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-interaction-countup--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">CountUp</Typography>
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

          <CountUpTypeGuide />
          <CountUpStateGuide />

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
    property: 'to',
    type: 'number',
    default: '0',
    description: 'Target value the animation counts toward.',
  },
  {
    id: '2',
    property: 'from',
    type: 'number',
    default: '0',
    description: 'Starting value before the animation begins.',
  },
  {
    id: '3',
    property: 'direction',
    type: ["'up'", "'down'"],
    default: "'up'",
    description: 'Controls whether the component counts upward or downward.',
  },
  {
    id: '4',
    property: 'delay',
    type: 'number',
    default: '0',
    description: 'Delay in seconds before the animation starts.',
  },
  {
    id: '5',
    property: 'duration',
    type: 'number',
    default: '2',
    description: 'Approximate animation duration in seconds.',
  },
  {
    id: '6',
    property: 'separator',
    type: 'string',
    default: "''",
    description: 'Custom thousands separator used when formatting grouped numbers.',
  },
  {
    id: '7',
    property: 'startWhen',
    type: 'boolean',
    default: 'true',
    description: 'Starts the animation when the component enters view if true.',
  },
  {
    id: '8',
    property: 'repeat',
    type: 'boolean',
    default: 'false',
    description: 'Restarts the animation after completion when true.',
  },
  {
    id: '9',
    property: 'className',
    type: 'string',
    default: "''",
    description: 'Additional classes applied to the text element.',
  },
];
