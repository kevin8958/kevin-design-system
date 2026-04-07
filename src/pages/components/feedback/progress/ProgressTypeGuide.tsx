import Progress from '@/components/feedback/Progress';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type ProgressPreviewControls = Pick<Feedback.ProgressProps, 'size'>;

const TypeExample = ({ size = 'md' }: ProgressPreviewControls) => {
  const exampleCode = `<Progress value={40} size="${size}" />
<Progress value={72} size="${size}" showValue />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Bar Only</Typography>
          <Progress value={40} size={size} />
        </FlexWrapper>
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">With Percentage</Typography>
          <Progress value={72} size={size} showValue />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const ProgressTypeGuide = (props: ProgressPreviewControls) => {
  return (
    <GuideSection
      title="Type"
      description="Choose whether the indicator should stay minimal or include a percentage label for extra clarity."
      example={<TypeExample {...props} />}
    />
  );
};

export default ProgressTypeGuide;
