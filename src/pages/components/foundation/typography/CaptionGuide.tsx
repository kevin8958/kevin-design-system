import FlexWrapper from '@/components/layout/FlexWrapper';

import Typography from '@/components/foundation/Typography';

const CaptionGuide = () => {
  const variantOptions: {
    id: Foundation.TypographyVariant;
    value: string;
  }[] = [{ id: 'C1', value: 'C1 (12px)' }];

  return (
    <FlexWrapper
      classes="size-full lg:flex-row flex-wrap"
      direction="col"
      items="start"
    >
      {/* Description Section */}
      <FlexWrapper
        classes="w-full lg:w-[calc(50%-16px)]"
        items="start"
        direction="col"
      >
        <Typography variant="H3">Caption</Typography>
        <Typography variant="B1">
          Captions are small, subtle text used for labels, timestamps, or
          secondary descriptions. They help provide context without distracting
          from main content.
        </Typography>
      </FlexWrapper>

      <FlexWrapper
        items="center"
        direction="col"
        classes="border border-neutral-500/30 shadow-sm dark:border-neutral-800 w-full rounded-2xl lg:w-[calc(50%-16px)] bg-white dark:bg-neutral-900"
      >
        <FlexWrapper
          items="center"
          direction="col"
          justify="start"
          classes="p-10 w-max rounded-xl"
          gap={6}
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
    </FlexWrapper>
  );
};

export default CaptionGuide;
