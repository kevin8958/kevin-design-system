import SplitText from '@/components/interaction/SplitText';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const SplitTextVariantGuide = () => {
  const exampleCode = `<SplitText text="Animate each character with a subtle reveal." variant="B1" />
<SplitText text="Bring motion to key headlines." variant="H2" delay={35} />`;

  return (
    <GuideSection
      title="Variant"
      description="Use SplitText to reveal short copy one character at a time, especially for hero headlines and motion accents."
      example={
        <CodeExample code={exampleCode} className="flex-1">
          <FlexWrapper
            classes="w-full rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
            direction="col"
            items="start"
            gap={6}
          >
            <FlexWrapper direction="col" items="start" gap={3}>
              <SplitText
                text="Animate each character with a subtle reveal."
                variant="B1"
              />
              <Typography
                variant="C1"
                classes="!text-neutral-500 dark:!text-neutral-300"
              >
                Body Copy
              </Typography>
            </FlexWrapper>
            <FlexWrapper direction="col" items="start" gap={3}>
              <SplitText
                text="Bring motion to key headlines."
                variant="H2"
                delay={35}
              />
              <Typography
                variant="C1"
                classes="!text-neutral-500 dark:!text-neutral-300"
              >
                Headline
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

export default SplitTextVariantGuide;
