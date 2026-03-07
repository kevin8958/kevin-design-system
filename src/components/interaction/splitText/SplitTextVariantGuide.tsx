import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import SplitText from '@/design-system/interaction/SplitText';
import Typography from '@/design-system/foundation/Typography';

const SplitTextVariantGuide = () => {
  const variantOptions: Array<{ id: Interaction.SplitTextVariant; value: string }> = [
    { id: 'H1', value: 'H1' },
    { id: 'H2', value: 'H2' },
    { id: 'H3', value: 'H3' },
    { id: 'B1', value: 'B1' },
    { id: 'B2', value: 'B2' },
    { id: 'C1', value: 'C1' },
  ];

  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Variant</Typography>
        <Typography variant="B1">
          Different text styles can be applied to the SplitText component to match the design
          requirements.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        classes="w-full flex-wrap bg-neutral-900 p-6  rounded-xl pb-10"
        gap={4}
        direction="col"
        items="start"
      >
        {variantOptions.map((option) => (
          <div key={option.id}>
            <FlexWrapper classes="!gap-3" items="end">
              <SplitText variant={option.id} text="Split Text" delay={100} repeat />
              <Typography classes="w-max" variant="C1" color="primary">
                {option.id}
              </Typography>
            </FlexWrapper>
          </div>
        ))}
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default SplitTextVariantGuide;
