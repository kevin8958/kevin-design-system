import MetricCard from '@/components/data/MetricCard';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type MetricCardPreviewControls = Pick<Data.MetricCardProps, 'size'>;

const ChangeLabelExample = ({ size = 'md' }: MetricCardPreviewControls) => {
  const exampleCode = `<MetricCard title="Revenue" value={12430} prefix="$" change={12.4} changeSuffix="%" changeLabel="vs last week" size="${size}" />
<MetricCard title="신규 가입자" value={842} change={-4.2} changeSuffix="%" changeLabel="지난주 대비" size="${size}" />`;

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
              changeLabel="vs last week"
              size={size}
            />
          </div>
          <Typography variant="C1">English label</Typography>
        </FlexWrapper>

        <FlexWrapper
          direction="col"
          items="center"
          gap={3}
          classes="w-full max-w-[280px]"
        >
          <div className="w-full">
            <MetricCard
              title="신규 가입자"
              value={842}
              change={-4.2}
              changeSuffix="%"
              changeLabel="지난주 대비"
              size={size}
            />
          </div>
          <Typography variant="C1">Korean label</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const MetricCardChangeLabelGuide = (props: MetricCardPreviewControls) => {
  return (
    <GuideSection
      title="Change Label"
      description="A change badge like +12.4% is ambiguous on its own — pass changeLabel to caption what it's measured against, e.g. 'vs last week' or '지난주 대비'. It only renders alongside a change value."
      example={<ChangeLabelExample {...props} />}
    />
  );
};

export default MetricCardChangeLabelGuide;
