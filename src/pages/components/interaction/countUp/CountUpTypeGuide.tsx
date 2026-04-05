import CountUp from '@/components/interaction/CountUp';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const CountUpTypeGuide = () => {
  const exampleCode = `<CountUp from={0} to={1280} duration={2} />
<CountUp from={12} to={256} duration={2.5} separator="," />`;

  return (
    <GuideSection
      title="Type"
      description="Use CountUp to animate key numbers as they enter view and draw attention to metrics."
      example={
        <CodeExample code={exampleCode} className="flex-1">
          <FlexWrapper classes="w-full p-8" gap={8} justify="center">
            <FlexWrapper direction="col" items="center" gap={3}>
              <CountUp
                from={0}
                to={1280}
                duration={2}
                className="text-4xl font-bold text-neutral-900 dark:text-neutral-50"
              />
              <Typography variant="C1">Simple Count</Typography>
            </FlexWrapper>
            <FlexWrapper direction="col" items="center" gap={3}>
              <CountUp
                from={12}
                to={2560}
                duration={2.5}
                separator=","
                className="text-4xl font-bold text-neutral-900 dark:text-neutral-50"
              />
              <Typography variant="C1">Grouped Number</Typography>
            </FlexWrapper>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

export default CountUpTypeGuide;
