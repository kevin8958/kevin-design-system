import Avatar from '@/components/data/Avatar';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const SizeExample = () => {
  const exampleCode = `<Avatar name="Alice Kim" size="sm" />
<Avatar name="Alice Kim" size="md" />
<Avatar name="Alice Kim" size="lg" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper classes="w-full p-4" items="end" gap={6}>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Avatar name="Alice Kim" size="sm" />
          <Typography variant="C1">Small</Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Avatar name="Alice Kim" size="md" />
          <Typography variant="C1">Medium</Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Avatar name="Alice Kim" size="lg" />
          <Typography variant="C1">Large</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const AvatarSizeGuide = () => {
  return (
    <GuideSection
      title="Size"
      description="Scale avatars to match dense lists, standard cards, or more expressive profile surfaces."
      example={<SizeExample />}
    />
  );
};

export default AvatarSizeGuide;
