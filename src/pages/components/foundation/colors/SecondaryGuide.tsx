import FlexWrapper from '@/components/layout/FlexWrapper';

import Typography from '@/components/foundation/Typography';
import Box from '@/components/layout/Box';

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
        <Typography variant="H3">Secondary</Typography>
        <Typography variant="B1">
          The secondary palette adds warmth and energy, supporting the primary
          tone. It's often used for accent elements or secondary actions that
          require emphasis without overpowering the primary color.
        </Typography>
        <FlexWrapper classes="w-full" items="start" direction="col" gap={2}>
          <Typography variant="B1">
            - Secondary buttons or highlights
          </Typography>
          <Typography variant="B1">
            - Backgrounds for featured content
          </Typography>
          <Typography variant="B1">
            - Accents in charts, icons, or badges
          </Typography>
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
          classes="p-10 w-max rounded-xl"
          gap={0}
        >
          {Object.entries(secondaryColors).map(([key, value]) => (
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

export default SecondaryGuide;
