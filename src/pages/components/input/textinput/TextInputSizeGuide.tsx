import FlexWrapper from '@/components/layout/FlexWrapper';
import TextInput from '@/components/input/TextInput';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const SizeExample = () => {
  const sizeOptions: {
    id: 'sm' | 'md' | 'lg';
    value: string;
  }[] = [
    { id: 'sm', value: 'Small' },
    { id: 'md', value: 'Medium' },
    { id: 'lg', value: 'Large' },
  ];

  const exampleCode = `<TextInput size="sm" placeholder="Small" />
<TextInput size="md" placeholder="Medium" />
<TextInput size="lg" placeholder="Large" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper
        direction="col"
        items="center"
        justify="center"
        gap={6}
        classes="w-full"
      >
        {sizeOptions.map((option) => (
          <FlexWrapper
            key={option.id}
            direction="col"
            items="center"
            gap={3}
            classes="flex-1 w-full"
          >
            <TextInput
              label={option.value}
              size={option.id}
              placeholder={option.value}
            />
          </FlexWrapper>
        ))}
      </FlexWrapper>
    </CodeExample>
  );
};

const TextInputSizeGuide = () => {
  return (
    <GuideSection
      title="Size"
      description="Scale input dimensions for different interface contexts."
      example={<SizeExample />}
    />
  );
};

export default TextInputSizeGuide;
