import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Typography from '@/design-system/foundation/Typography';

const CaptionGuide = () => {
  const variantOptions: {
    id: Foundation.TypographyVariant;
    value: string;
  }[] = [{ id: 'C1', value: 'C1 (12px)' }];
  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Caption</Typography>
        <Typography variant="B1">
          Captions are small, subtle text used for labels, timestamps, or secondary descriptions.
          They help provide context without distracting from main content.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-neutral-900 p-6 w-full rounded-xl pb-10"
        gap={10}
      >
        {variantOptions.map((option) => (
          <div key={option.id}>
            <FlexWrapper classes="!gap-3" items="end">
              <Typography variant={option.id} classes="mb-0">
                Caption
              </Typography>
              <Typography variant="C1" color="primary">
                {option.value}
              </Typography>
            </FlexWrapper>
          </div>
        ))}
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default CaptionGuide;
