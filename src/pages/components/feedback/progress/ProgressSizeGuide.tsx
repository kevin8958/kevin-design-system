import Progress from '@/components/feedback/Progress';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const SizeExample = () => {
  const exampleCode = `<Progress value={40} size="sm" />
<Progress value={56} size="md" />
<Progress value={72} size="lg" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Small</Typography>
          <Progress value={40} size="sm" />
        </FlexWrapper>
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Medium</Typography>
          <Progress value={56} size="md" />
        </FlexWrapper>
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Large</Typography>
          <Progress value={72} size="lg" />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const ProgressSizeGuide = () => {
  return (
    <GuideSection
      title="Size"
      description="Scale the track height to fit compact utility bars or more prominent progress indicators."
      example={<SizeExample />}
    />
  );
};

export default ProgressSizeGuide;
