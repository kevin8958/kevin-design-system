import FlexWrapper from '@/components/layout/FlexWrapper';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const VariantExample = () => {
  const variantOptions: {
    id: Action.ButtonVariant;
    value: string;
  }[] = [
    { id: 'contain', value: 'Contain' },
    { id: 'outline', value: 'Outline' },
    { id: 'clear', value: 'Clear' },
  ];

  const exampleCode = `<Button variant="contain">Contain</Button>
<Button variant="outline">Outline</Button>
<Button variant="clear">Clear</Button>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
      <FlexWrapper items="center" justify="center" gap={6} classes="w-full">
        {variantOptions.map((option) => (
          <FlexWrapper key={option.id} direction="col" items="center" gap={3}>
            <Button variant={option.id}>Button</Button>
            <Typography variant="C1">{option.id}</Typography>
          </FlexWrapper>
        ))}
      </FlexWrapper>
    </CodeExample>
  );
};

const ButtonVariantGuide = () => {
  return (
    <GuideSection
      title="Variant"
      description="Select visual styles based on action priority."
      example={<VariantExample />}
    />
  );
};

export default ButtonVariantGuide;
