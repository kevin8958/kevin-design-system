import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Typography from '@/design-system/foundation/Typography';

const SecondaryGuide = () => {
  const secondaryColors = {
    50: 'bg-secondary-50',
    100: 'bg-secondary-100',
    200: 'bg-secondary-200',
    300: 'bg-secondary-300',
    400: 'bg-secondary-400',
    500: 'bg-secondary-500',
    600: 'bg-secondary-600',
    700: 'bg-secondary-700',
    800: 'bg-secondary-800',
    900: 'bg-secondary-900',
  };
  return (
    <FlexWrapper classes="size-full" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Secondary</Typography>
        <Typography variant="B1">
          The secondary palette adds warmth and energy, supporting the primary tone. It's often used
          for accent elements or secondary actions that require emphasis without overpowering the
          primary color.
        </Typography>
        <FlexWrapper classes="w-full" items="start" direction="col" gap={2}>
          <Typography variant="B1">- Secondary buttons or highlights</Typography>
          <Typography variant="B1">- Backgrounds for featured content</Typography>
          <Typography variant="B1">- Accents in charts, icons, or badges</Typography>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        justify="start"
        classes="bg-neutral-900 p-4 md:p-10 w-full md:w-max rounded-xl"
        gap={0}
      >
        {Object.entries(secondaryColors).map(([key, value]) => (
          <div key={key} className="flex-1">
            <FlexWrapper classes="!gap-3" items="center" direction="col">
              <span className={`size-6 rounded-sm md:size-10 md:rounded-none ${value}`} />
              <Typography variant="C1" color="primary" classes="hidden md:block">
                {key}
              </Typography>
            </FlexWrapper>
          </div>
        ))}
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default SecondaryGuide;
