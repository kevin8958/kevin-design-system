import FlexWrapper from '@/components/layout/FlexWrapper';

import Typography from '@/components/foundation/Typography';

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

      <FlexWrapper
        items="center"
        direction="col"
        classes="border border-neutral-500/30 shadow-sm dark:border-neutral-800 w-full rounded-2xl lg:w-[calc(50%-16px)] bg-white dark:bg-neutral-900"
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
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default SecondaryGuide;
