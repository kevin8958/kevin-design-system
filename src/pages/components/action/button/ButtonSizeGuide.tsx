import FlexWrapper from '@/components/layout/FlexWrapper';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';

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
    <CodeExample code={exampleCode}>
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
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      {/* Description Section */}
      <FlexWrapper classes="flex-1" items="start" direction="col" gap={4}>
        <Typography variant="H3">Size</Typography>

        <Typography variant="B1" classes="font-semibold text-primary-500">
          Scale button dimensions for different interface contexts.
        </Typography>
      </FlexWrapper>

      {/* Interactive Preview Section */}
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="border-2 border-neutral-500/30 dark:border-neutral-100/30 w-full rounded-2xl flex-1"
      >
        <SizeExample />
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default ButtonSizeGuide;
