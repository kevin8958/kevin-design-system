import Progress from '@/components/feedback/Progress';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const StateExample = () => {
  const exampleCode = `<Progress value={12} showValue />
<Progress value={56} showValue />
<Progress value={100} showValue />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Starting</Typography>
          <Progress value={12} showValue />
        </FlexWrapper>
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">In Progress</Typography>
          <Progress value={56} showValue />
        </FlexWrapper>
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Complete</Typography>
          <Progress value={100} showValue />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const ProgressStateGuide = () => {
  return (
    <GuideSection
      title="State"
      description="Show completion clearly by pairing bar length with an optional percentage readout."
      example={<StateExample />}
    />
  );
};

export default ProgressStateGuide;
