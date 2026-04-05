import Divider from '@/components/layout/Divider';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const DividerStateGuide = () => {
  const exampleCode = `<Divider orientation="horizontal" classes="my-4" />
<Divider orientation="vertical" classes="min-h-8" />`;

  return (
    <GuideSection
      title="Usage"
      description="Use custom spacing classes to integrate dividers into denser or more spacious layouts without changing the base component."
      example={
        <CodeExample code={exampleCode} className="flex-1">
          <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
            <div className="w-full">
              <Typography variant="C1">Section Break</Typography>
              <Divider orientation="horizontal" classes="my-4" />
            </div>
            <FlexWrapper classes="h-20" items="stretch" gap={4}>
              <div>Start</div>
              <Divider orientation="vertical" classes="min-h-8" />
              <div>End</div>
            </FlexWrapper>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

export default DividerStateGuide;
