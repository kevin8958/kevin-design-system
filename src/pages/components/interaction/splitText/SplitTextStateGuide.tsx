import SplitText from '@/components/interaction/SplitText';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const SplitTextStateGuide = () => {
  const exampleCode = `<SplitText text="Scroll-triggered once" />
<SplitText text="Looping emphasis" repeat delay={60} variant="H3" />`;

  return (
    <GuideSection
      title="State"
      description="Trigger the animation once on entry for content sections, or repeat it for stronger visual emphasis in promotional areas."
      example={
        <CodeExample code={exampleCode} className="flex-1">
          <FlexWrapper
            classes="w-full rounded-2xl bg-neutral-900 p-8 text-neutral-100"
            direction="col"
            items="start"
            gap={6}
          >
            <FlexWrapper direction="col" items="start" gap={3}>
              <SplitText text="Scroll-triggered once" variant="B1" />
              <Typography variant="C1" classes="!text-neutral-300">
                Scroll Into View
              </Typography>
            </FlexWrapper>
            <FlexWrapper direction="col" items="start" gap={3}>
              <SplitText
                text="Looping emphasis"
                repeat
                delay={60}
                variant="H3"
              />
              <Typography variant="C1" classes="!text-neutral-300">
                Repeat
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

export default SplitTextStateGuide;
