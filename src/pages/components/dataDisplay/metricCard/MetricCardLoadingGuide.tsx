import MetricCard from '@/components/data/MetricCard';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type MetricCardPreviewControls = Pick<Data.MetricCardProps, 'size'>;

const LoadingExample = ({ size = 'md' }: MetricCardPreviewControls) => {
  const exampleCode = `<MetricCard title="Revenue" value={0} loading size="${size}" />
<MetricCard title="Revenue" value={12430} prefix="$" change={12.4} changeSuffix="%" size="${size}" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-0">
      <FlexWrapper classes="w-full p-4" direction="col" items="center" gap={4}>
        <FlexWrapper
          direction="col"
          items="center"
          gap={3}
          classes="w-full max-w-[280px]"
        >
          <div className="w-full">
            <MetricCard title="Revenue" value={0} loading size={size} />
          </div>
          <Typography variant="C1">Loading</Typography>
        </FlexWrapper>

        <FlexWrapper
          direction="col"
          items="center"
          gap={3}
          classes="w-full max-w-[280px]"
        >
          <div className="w-full">
            <MetricCard
              title="Revenue"
              value={12430}
              prefix="$"
              change={12.4}
              changeSuffix="%"
              animated={false}
              size={size}
            />
          </div>
          <Typography variant="C1">Loaded</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const MetricCardLoadingGuide = (props: MetricCardPreviewControls) => {
  return (
    <GuideSection
      title="Loading"
      description="Set loading to replace the title, value, and change badge with animated skeleton placeholders while the metric is being fetched. The card keeps its usual size and padding, so nothing shifts once the real data lands."
      example={<LoadingExample {...props} />}
    />
  );
};

export default MetricCardLoadingGuide;
