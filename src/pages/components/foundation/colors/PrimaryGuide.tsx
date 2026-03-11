import FlexWrapper from '@/components/layout/FlexWrapper';

import Typography from '@/components/foundation/Typography';

const PrimaryGuide = () => {
  const primaryColors = {
    50: 'bg-primary-50',
    100: 'bg-primary-100',
    200: 'bg-primary-200',
    300: 'bg-primary-300',
    400: 'bg-primary-400',
    500: 'bg-primary-500',
    600: 'bg-primary-600',
    700: 'bg-primary-700',
    800: 'bg-primary-800',
    900: 'bg-primary-900',
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
        <Typography variant="H3">Primary</Typography>
        <Typography variant="B1">
          The primary color represents the brand's core identity. It's used for
          key interactive elements such as buttons, active states, links, and
          highlights.
        </Typography>
        <FlexWrapper classes="w-full" items="start" direction="col" gap={2}>
          <Typography variant="B1">- Main brand color</Typography>
          <Typography variant="B1">- Primary buttons and links</Typography>
          <Typography variant="B1">
            - Active states and focus indicators
          </Typography>
          <Typography variant="B1">- Backgrounds for key sections</Typography>
        </FlexWrapper>
      </FlexWrapper>

      <FlexWrapper
        items="center"
        direction="col"
        classes="border border-neutral-500/30 shadow-sm dark:border-neutral-100/30 w-full rounded-2xl lg:w-[calc(50%-16px)] bg-neutral-50/50 dark:bg-white/5"
      >
        <FlexWrapper
          items="start"
          justify="start"
          classes="p-4 md:p-10 w-max rounded-xl"
          gap={0}
        >
          {Object.entries(primaryColors).map(([key, value]) => (
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

export default PrimaryGuide;
