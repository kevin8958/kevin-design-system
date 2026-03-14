import React from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';

const GuideSection = ({
  title,
  description,
  example,
}: Layout.GuideSectionProps) => {
  return (
    <FlexWrapper
      classes="size-full lg:flex-row flex-wrap"
      direction="col"
      items="start"
      gap={8}
    >
      <FlexWrapper
        classes="flex-1 min-w-[320px] shrink-0"
        items="start"
        direction="col"
        gap={4}
      >
        <Typography variant="H3">{title}</Typography>
        <Typography
          variant="B1"
          classes="text-neutral-600 dark:text-neutral-400"
        >
          {description}
        </Typography>
      </FlexWrapper>
      {example}
    </FlexWrapper>
  );
};

export default GuideSection;
