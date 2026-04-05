import Avatar from '@/components/data/Avatar';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const StateExample = () => {
  const exampleCode = `<Avatar src="/sticker/alice.png" name="Alice Kim" status="online" />
<Avatar name="Charlie Park" status="busy" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        <FlexWrapper gap={6} items="center">
          <FlexWrapper direction="col" items="center" gap={3}>
            <Avatar src="/sticker/alice.png" name="Alice Kim" status="online" />
            <Typography variant="C1">Image + Status</Typography>
          </FlexWrapper>
          <FlexWrapper direction="col" items="center" gap={3}>
            <Avatar name="Charlie Park" status="busy" />
            <Typography variant="C1">Fallback Initials</Typography>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const AvatarStateGuide = () => {
  return (
    <GuideSection
      title="State"
      description="Combine imagery, initials, and lightweight presence indicators to keep identity visible in different contexts."
      example={<StateExample />}
    />
  );
};

export default AvatarStateGuide;
