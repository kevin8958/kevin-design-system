import Avatar from '@/components/data/Avatar';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type AvatarPreviewControls = Pick<Data.AvatarProps, 'size'>;

const StateExample = ({ size = 'md' }: AvatarPreviewControls) => {
  const exampleCode = `<Avatar name="Alice Kim" size="${size}" status="online" />
<Avatar name="Brian Lee" size="${size}" status="offline" />
<Avatar name="Charlie Park" size="${size}" status="busy" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        <FlexWrapper gap={6} items="center" classes="flex-wrap">
          <FlexWrapper direction="col" items="center" gap={3}>
            <Avatar name="Alice Kim" size={size} status="online" />
            <Typography variant="C1">Online</Typography>
          </FlexWrapper>
          <FlexWrapper direction="col" items="center" gap={3}>
            <Avatar name="Brian Lee" size={size} status="offline" />
            <Typography variant="C1">Offline</Typography>
          </FlexWrapper>
          <FlexWrapper direction="col" items="center" gap={3}>
            <Avatar name="Charlie Park" size={size} status="busy" />
            <Typography variant="C1">Busy</Typography>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const AvatarStateGuide = (props: AvatarPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Layer lightweight presence indicators onto avatars to show availability without overwhelming the identity cue."
      example={<StateExample {...props} />}
    />
  );
};

export default AvatarStateGuide;
