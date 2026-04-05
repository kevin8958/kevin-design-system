import CountUp from '@/components/interaction/CountUp';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const CountUpStateGuide = () => {
  const exampleCode = `<CountUp from={100} to={0} direction="down" />
<CountUp from={0} to={98.6} duration={2} />`;

  return (
    <GuideSection
      title="State"
      description="Support upward, downward, and decimal-based counts depending on the type of metric being presented."
      example={
        <CodeExample code={exampleCode} className="flex-1">
          <FlexWrapper classes="w-full p-8" gap={8} justify="center">
            <FlexWrapper direction="col" items="center" gap={3}>
              <CountUp
                from={0}
                to={100}
                direction="down"
                className="text-4xl font-bold text-neutral-900 dark:text-neutral-50"
              />
              <Typography variant="C1">Count Down</Typography>
            </FlexWrapper>
            <FlexWrapper direction="col" items="center" gap={3}>
              <CountUp
                from={0}
                to={98.6}
                duration={2}
                className="text-4xl font-bold text-neutral-900 dark:text-neutral-50"
              />
              <Typography variant="C1">Decimal</Typography>
            </FlexWrapper>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

export default CountUpStateGuide;
