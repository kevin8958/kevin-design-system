import FlexWrapper from '@/components/layout/FlexWrapper';

import Typography from '@/components/foundation/Typography';

const HeadingGuide = () => {
  const variantOptions: {
    id: Foundation.TypographyVariant;
    value: string;
  }[] = [
    { id: 'H1', value: 'H1 (64px)' },
    { id: 'H2', value: 'H2 (40px)' },
    { id: 'H3', value: 'H3 (24px)' },
    { id: 'H4', value: 'H4 (16px)' },
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
        <Typography variant="H3">Heading</Typography>
        <Typography variant="B1">
          Headings provide visual hierarchy and guide users through the page
          structure. They draw the most attention and help users quickly
          understand content organization.
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
              <FlexWrapper
                direction="col"
                gap={3}
                classes="sm:flex-row sm:items-end"
                items="center"
              >
                <Typography variant={option.id} classes="mb-0">
                  Heading
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

export default HeadingGuide;
