import FlexWrapper from '@/components/layout/FlexWrapper';

import Typography from '@/components/foundation/Typography';
import Box from '@/components/layout/Box';

const NeutralGuide = () => {
  const neutralColors = {
    50: 'bg-neutral-50',
    100: 'bg-neutral-100',
    200: 'bg-neutral-200',
    300: 'bg-neutral-300',
    400: 'bg-neutral-400',
    500: 'bg-neutral-500',
    600: 'bg-neutral-600',
    700: 'bg-neutral-700',
    800: 'bg-neutral-800',
    900: 'bg-neutral-900',
    990: 'bg-neutral-990',
  };

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
        <Typography variant="H3">Neutral</Typography>
        <Typography variant="B1">
          The neutral palette provides the foundation for layout, typography,
          and UI structure. It's used for backgrounds, borders, and text colors,
          ensuring balance and readability.
        </Typography>
        <FlexWrapper classes="w-full" items="start" direction="col" gap={2}>
          <Typography variant="B1">- Background layers and surfaces</Typography>
          <Typography variant="B1">- Text and icon colors</Typography>
          <Typography variant="B1">- Divider lines and outlines</Typography>
          <Typography variant="B1">- Disabled states</Typography>
        </FlexWrapper>
      </FlexWrapper>

      <Box
        type="guide"
        className="lg:w-[calc(50%-16px)] p-10"
        classes="flex justify-center"
      >
        <FlexWrapper
          items="start"
          justify="start"
          classes="w-max rounded-xl"
          gap={0}
        >
          {Object.entries(neutralColors).map(([key, value]) => (
            <div key={key} className="flex-1">
              <FlexWrapper classes="!gap-3" items="center" direction="col">
                <span className={`size-6 sm:size-8 rounded-none ${value}`} />
                <Typography variant="C1" color="primary">
                  {key}
                </Typography>
              </FlexWrapper>
            </div>
          ))}
        </FlexWrapper>
      </Box>
    </FlexWrapper>
  );
};

export default NeutralGuide;
