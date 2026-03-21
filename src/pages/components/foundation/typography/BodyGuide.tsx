import FlexWrapper from '@/components/layout/FlexWrapper';

import Typography from '@/components/foundation/Typography';
import Box from '@/components/layout/Box';

const BodyGuide = () => {
  const variantOptions: {
    id: Foundation.TypographyVariant;
    value: string;
  }[] = [
    { id: 'B1', value: 'B1 (16px)' },
    { id: 'B2', value: 'B2 (14px)' },
  ];

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
        <Typography variant="H3">Body</Typography>
        <Typography variant="B1">
          Body text is the most common typography used throughout the interface.
          It focuses on readability and is used for paragraphs, descriptions,
          and general content.
        </Typography>
      </FlexWrapper>

      <Box
        type="guide"
        className="lg:w-[calc(50%-16px)] p-10"
        classes="flex justify-center"
      >
        <FlexWrapper
          items="center"
          direction="col"
          justify="start"
          classes="w-max rounded-xl"
          gap={6}
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
      </Box>
    </FlexWrapper>
  );
};

export default BodyGuide;
