import Avatar from '@/components/data/Avatar';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type AvatarPreviewControls = Pick<Data.AvatarProps, 'size'>;

const TypeExample = ({ size = 'md' }: AvatarPreviewControls) => {
  const exampleCode = `<Avatar src="/sticker/alice.png" name="Alice Kim" size="${size}" />
<Avatar name="Charlie Park" size="${size}" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper classes="w-full p-4" items="center" gap={6}>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Avatar src="/sticker/alice.png" name="Alice Kim" size={size} />
          <Typography variant="C1">Image Avatar</Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Avatar name="Charlie Park" size={size} />
          <Typography variant="C1">Initials Fallback</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const AvatarTypeGuide = (props: AvatarPreviewControls) => {
  return (
    <GuideSection
      title="Type"
      description="Show either a profile image or initials fallback while keeping identity legible at every size."
      example={<TypeExample {...props} />}
    />
  );
};

export default AvatarTypeGuide;
