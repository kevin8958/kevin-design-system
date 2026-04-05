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

const GridColumnGuide = () => {
  const exampleCode = `<Grid cols={2}>
  <div>Item 1</div>
  <div>Item 2</div>
</Grid>

<Grid cols={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>`;

  return (
    <GuideSection
      title="Column"
      description="Adjust the number of columns to organize content into simple, repeatable grid structures."
      example={
        <CodeExample code={exampleCode} className="flex-1">
          <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
            <FlexWrapper direction="col" gap={3} classes="w-full">
              <Typography variant="C1">2 Columns</Typography>
              <Grid cols={2}>
                <Cell label="Item 1" />
                <Cell label="Item 2" />
                <Cell label="Item 3" />
                <Cell label="Item 4" />
              </Grid>
            </FlexWrapper>
            <FlexWrapper direction="col" gap={3} classes="w-full">
              <Typography variant="C1">4 Columns</Typography>
              <Grid cols={4}>
                <Cell label="Item 1" />
                <Cell label="Item 2" />
                <Cell label="Item 3" />
                <Cell label="Item 4" />
              </Grid>
            </FlexWrapper>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

export default GridColumnGuide;
