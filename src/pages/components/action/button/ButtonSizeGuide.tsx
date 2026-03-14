import FlexWrapper from '@/components/layout/FlexWrapper';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const SizeExample = () => {
  const sizeOptions: {
    id: Action.ButtonSize;
    value: string;
  }[] = [
    { id: 'sm', value: 'Small' },
    { id: 'md', value: 'Medium' },
    { id: 'lg', value: 'Large' },
  ];

  const exampleCode = `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
      <FlexWrapper items="center" justify="center" gap={6} classes="w-full">
        {sizeOptions.map((option) => (
          <FlexWrapper key={option.id} direction="col" items="center" gap={3}>
            <Button size={option.id}>Button</Button>
            <Typography variant="C1">{option.id}</Typography>
          </FlexWrapper>
        ))}
      </FlexWrapper>
    </CodeExample>
  );
};

const ButtonSizeGuide = () => {
  return (
    <GuideSection
      title="Size"
      description="Scale button dimensions for different interface contexts."
      example={<SizeExample />}
    />
  );
};

export default ButtonSizeGuide;
