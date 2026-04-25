'use client';

import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';

type PatternGuideSectionProps = {
  title: string;
  description: string;
  example: React.ReactNode;
};

export default function PatternGuideSection({
  title,
  description,
  example,
}: PatternGuideSectionProps) {
  return (
    <FlexWrapper direction="col" items="start" gap={5} classes="w-full">
      <FlexWrapper direction="col" items="start" gap={3} classes="w-full">
        <Typography variant="H3">{title}</Typography>
        <Typography
          variant="B1"
          classes="max-w-4xl !font-normal text-neutral-600 dark:text-neutral-400"
        >
          {description}
        </Typography>
      </FlexWrapper>

      <div className="w-full">{example}</div>
    </FlexWrapper>
  );
}
