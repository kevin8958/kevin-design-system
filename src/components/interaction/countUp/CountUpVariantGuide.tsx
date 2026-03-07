'use client';
import React from 'react';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import Typography from '@/design-system/foundation/Typography';
import CountUp from '@/design-system/interaction/CountUp';

const CountUpVariantGuide = () => {
  const examples = [
    { label: 'Basic Count', props: { to: 100 }, desc: '0 to 100' },
    {
      label: 'With Separator',
      props: { to: 1000000, separator: ',' },
      desc: 'Large numbers with commas',
    },
    {
      label: 'Decimals',
      props: { to: 99.99, from: 0 },
      desc: 'Support for floating point numbers',
    },
    {
      label: 'Duration & Delay',
      props: { to: 500, duration: 5, delay: 1 },
      desc: 'Slow animation with 1s delay',
    },
    {
      label: 'Direction Down',
      props: { from: 100, to: 0, direction: 'down' as const },
      desc: 'Counting down from 100',
    },
  ];

  return (
    <FlexWrapper classes="w-full lg:flex-row gap-8" direction="col" items="start">
      <FlexWrapper classes="w-full lg:w-1/3" items="start" direction="col">
        <Typography variant="H3">Usage Examples</Typography>
        <Typography variant="B1">
          The CountUp component animates numerical values, providing a dynamic way to display
          statistics, progress, or data changes.
        </Typography>
      </FlexWrapper>

      <FlexWrapper
        classes="w-full flex-1 bg-neutral-900 p-8 rounded-xl border border-neutral-800"
        gap={6}
        direction="col"
        items="start"
      >
        <div className="grid w-full grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
          {examples.map((example, index) => (
            <div key={index} className="space-y-2">
              <Typography variant="C1" color="primary" classes="uppercase tracking-wider">
                {example.label}
              </Typography>
              <div className="flex items-baseline gap-2">
                <CountUp
                  {...example.props}
                  className="text-primary-500 font-mono text-4xl font-bold"
                />
              </div>
              <Typography variant="C1" classes="text-neutral-500">
                {example.desc}
              </Typography>
            </div>
          ))}
        </div>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default CountUpVariantGuide;
