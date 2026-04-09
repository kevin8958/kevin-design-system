import MetricCard from '@/components/data/MetricCard';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type MetricCardPreviewControls = Pick<Data.MetricCardProps, 'size'>;

const ContentExample = ({ size = 'md' }: MetricCardPreviewControls) => {
  const exampleCode = `<MetricCard title="Revenue" value={12430} prefix="$" change={12.4} changeSuffix="%" size="${size}" />
<MetricCard title="Active Users" value={18240} change={8.1} changeSuffix="%" size="${size}" />
<MetricCard title="Conversion" value={3.7} suffix="%" decimals={1} change={-0.3} changeSuffix="%" size="${size}" />`;

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
            <MetricCard
              title="Revenue"
              value={12430}
              prefix="$"
              change={12.4}
              changeSuffix="%"
              size={size}
            />
          </div>
          <Typography variant="C1">Currency Metric</Typography>
        </FlexWrapper>

        <FlexWrapper
          direction="col"
          items="center"
          gap={3}
          classes="w-full max-w-[280px]"
        >
          <div className="w-full">
            <MetricCard
              title="Active Users"
              value={18240}
              change={8.1}
              changeSuffix="%"
              size={size}
            />
          </div>
          <Typography variant="C1">Volume Metric</Typography>
        </FlexWrapper>

        <FlexWrapper
          direction="col"
          items="center"
          gap={3}
          classes="w-full max-w-[280px]"
        >
          <div className="w-full">
            <MetricCard
              title="Conversion"
              value={3.7}
              suffix="%"
              decimals={1}
              change={-0.3}
              changeSuffix="%"
              size={size}
            />
          </div>
          <Typography variant="C1">Rate Metric</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const MetricCardContentGuide = (props: MetricCardPreviewControls) => {
  return (
    <GuideSection
      title="Content"
      description="Use metric cards for quick dashboard summaries where the title, current value, and directional change should be readable at a glance."
      example={<ContentExample {...props} />}
    />
  );
};

export default MetricCardContentGuide;
