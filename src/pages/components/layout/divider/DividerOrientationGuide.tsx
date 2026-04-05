import Divider from '@/components/layout/Divider';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const DividerOrientationGuide = () => {
  const exampleCode = `<Divider orientation="horizontal" />
<Divider orientation="vertical" />`;

  return (
    <GuideSection
      title="Orientation"
      description="Switch between horizontal and vertical separators depending on whether content is stacked or arranged side by side."
      example={
        <CodeExample code={exampleCode} className="flex-1">
          <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
            <FlexWrapper direction="col" gap={3} classes="w-full">
              <Typography variant="C1">Horizontal</Typography>
              <Divider orientation="horizontal" />
            </FlexWrapper>
            <FlexWrapper direction="col" gap={3} classes="w-full">
              <Typography variant="C1">Vertical</Typography>
              <FlexWrapper classes="h-16" items="stretch" gap={4}>
                <div>Left</div>
                <Divider orientation="vertical" />
                <div>Right</div>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

export default DividerOrientationGuide;
