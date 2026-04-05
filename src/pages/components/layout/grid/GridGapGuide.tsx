import Grid from '@/components/layout/Grid';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const Cell = ({ label }: { label: string }) => (
  <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-6 text-center text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
    {label}
  </div>
);

const GridGapGuide = () => {
  const exampleCode = `<Grid cols={3} gap={2}>...</Grid>
<Grid cols={3} gap={8}>...</Grid>`;

  return (
    <GuideSection
      title="Gap"
      description="Control spacing between grid cells to support denser or more breathable layouts."
      example={
        <CodeExample code={exampleCode} className="flex-1">
          <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
            <FlexWrapper direction="col" gap={3} classes="w-full">
              <Typography variant="C1">Compact Gap</Typography>
              <Grid cols={3} gap={2}>
                <Cell label="Item 1" />
                <Cell label="Item 2" />
                <Cell label="Item 3" />
              </Grid>
            </FlexWrapper>
            <FlexWrapper direction="col" gap={3} classes="w-full">
              <Typography variant="C1">Spacious Gap</Typography>
              <Grid cols={3} gap={8}>
                <Cell label="Item 1" />
                <Cell label="Item 2" />
                <Cell label="Item 3" />
              </Grid>
            </FlexWrapper>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

export default GridGapGuide;
