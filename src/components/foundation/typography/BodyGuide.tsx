import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Typography from '@/design-system/foundation/Typography';

const BodyGuide = () => {
  const variantOptions: {
    id: Foundation.TypographyVariant;
    value: string;
  }[] = [
    { id: 'B1', value: 'B1 (16px)' },
    { id: 'B2', value: 'B2 (14px)' },
  ];
  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Body</Typography>
        <Typography variant="B1">
          Body text is the most common typography used throughout the interface. It focuses on
          readability and is used for paragraphs, descriptions, and general content.
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
                Body
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

export default BodyGuide;
