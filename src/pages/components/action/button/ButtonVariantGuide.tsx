import FlexWrapper from '@/components/layout/FlexWrapper';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';

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
    <CodeExample code={exampleCode}>
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
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      {/* Description Section */}
      <FlexWrapper classes="flex-1" items="start" direction="col" gap={4}>
        <Typography variant="H3">Variant</Typography>

        <Typography variant="B1" classes="font-semibold text-primary-500">
          Select visual styles based on action priority.
        </Typography>
      </FlexWrapper>

      {/* Interactive Preview Section */}
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="border-2 border-neutral-500/30 dark:border-neutral-100/30 w-full rounded-2xl flex-1"
      >
        <VariantExample />
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default ButtonVariantGuide;
