'use client';

import SplitTextVariantGuide from '@/pages/components/interaction/splitText/SplitTextVariantGuide';
import SplitTextStateGuide from '@/pages/components/interaction/splitText/SplitTextStateGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentSplitTextPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Interaction', href: '/components/interaction' },
    { label: 'Split Text', href: '/components/interaction/splitText' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-interaction-splittext--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">SplitText</Typography>
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

          <SplitTextVariantGuide />
          <SplitTextStateGuide />

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
    property: 'text',
    type: 'string',
    default: "''",
    description: 'Text content to split and animate character by character.',
  },
  {
    id: '2',
    property: 'variant',
    type: ["'H1'", "'H2'", "'H3'", "'B1'", "'B2'", "'C1'"],
    default: "'B1'",
    description: 'Typography scale applied to the rendered text.',
  },
  {
    id: '3',
    property: 'delay',
    type: 'number',
    default: '40',
    description: 'Delay in milliseconds between each character animation.',
  },
  {
    id: '4',
    property: 'repeat',
    type: 'boolean',
    default: 'false',
    description: 'Repeats the animation continuously when enabled.',
  },
  {
    id: '5',
    property: 'replayOnView',
    type: 'boolean',
    default: 'false',
    description: 'Replays the animation each time the text re-enters the viewport.',
  },
  {
    id: '6',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes applied to the root text element.',
  },
];
