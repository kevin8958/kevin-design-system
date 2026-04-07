import Badge from '@/components/data/Badge';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type BadgePreviewControls = Pick<Data.BadgeProps, 'size'>;

const VariantExample = ({ size = 'md' }: BadgePreviewControls) => {
  const exampleCode = `<Badge label="Neutral" size="${size}" variant="neutral" />
<Badge label="Primary" size="${size}" variant="primary" />
<Badge label="Success" size="${size}" variant="success" />
<Badge label="Warning" size="${size}" variant="warning" />
<Badge label="Danger" size="${size}" variant="danger" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper classes="w-full flex-wrap p-4" gap={4} items="center">
        <Badge label="Neutral" size={size} variant="neutral" />
        <Badge label="Primary" size={size} variant="primary" />
        <Badge label="Success" size={size} variant="success" />
        <Badge label="Warning" size={size} variant="warning" />
        <Badge label="Danger" size={size} variant="danger" />
      </FlexWrapper>
    </CodeExample>
  );
};

const BadgeVariantGuide = (props: BadgePreviewControls) => {
  return (
    <GuideSection
      title="Variant"
      description="Apply semantic color variants to represent status, emphasis, or metadata categories."
      example={<VariantExample {...props} />}
    />
  );
};

export default BadgeVariantGuide;
