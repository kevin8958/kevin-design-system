import MetricCard from '@/components/data/MetricCard';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type MetricCardPreviewControls = Pick<Data.MetricCardProps, 'size'>;

const TrendExample = ({ size = 'md' }: MetricCardPreviewControls) => {
  const exampleCode = `<MetricCard title="Sales" value={8420} prefix="$" change={15.2} changeSuffix="%" trend="up" size="${size}" />
<MetricCard title="Churn" value={184} change={-3.1} changeSuffix="%" trend="down" size="${size}" />
<MetricCard title="Response Time" value={128} suffix="ms" change={0} changeSuffix="%" trend="neutral" size="${size}" />`;

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
              title="Sales"
              value={8420}
              prefix="$"
              change={15.2}
              changeSuffix="%"
              trend="up"
              size={size}
            />
          </div>
          <Typography variant="C1">Positive Trend</Typography>
        </FlexWrapper>

        <FlexWrapper
          direction="col"
          items="center"
          gap={3}
          classes="w-full max-w-[280px]"
        >
          <div className="w-full">
            <MetricCard
              title="Churn"
              value={184}
              change={-3.1}
              changeSuffix="%"
              trend="down"
              size={size}
            />
          </div>
          <Typography variant="C1">Negative Trend</Typography>
        </FlexWrapper>

        <FlexWrapper
          direction="col"
          items="center"
          gap={3}
          classes="w-full max-w-[280px]"
        >
          <div className="w-full">
            <MetricCard
              title="Response Time"
              value={128}
              suffix="ms"
              change={0}
              changeSuffix="%"
              trend="neutral"
              size={size}
            />
          </div>
          <Typography variant="C1">Neutral Trend</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const MetricCardTrendGuide = (props: MetricCardPreviewControls) => {
  return (
    <GuideSection
      title="Trend"
      description="Apply semantic trend states so positive movement reads as success, negative movement reads as risk, and stable movement stays neutral."
      example={<TrendExample {...props} />}
    />
  );
};

export default MetricCardTrendGuide;
