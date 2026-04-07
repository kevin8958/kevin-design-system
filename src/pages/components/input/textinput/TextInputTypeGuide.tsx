import FlexWrapper from '@/components/layout/FlexWrapper';
import TextInput from '@/components/input/TextInput';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type TextInputPreviewControls = Pick<Input.TextInputProps, 'size'>;

const TypeExample = ({ size }: TextInputPreviewControls) => {
  const typeOptions: {
    id: 'text' | 'password' | 'email' | 'number';
    value: string;
  }[] = [
    { id: 'text', value: 'Standard text' },
    { id: 'password', value: 'Password' },
    { id: 'email', value: 'name@example.com' },
    { id: 'number', value: '12345' },
  ];

  const exampleCode = `<TextInput size="${size}" type="text" placeholder="Standard text" />
<TextInput size="${size}" type="password" placeholder="Password" />
<TextInput size="${size}" type="email" placeholder="name@example.com" />
<TextInput size="${size}" type="number" placeholder="12345" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1 w-full min-w-[320px]">
      <FlexWrapper
        direction="col"
        items="center"
        justify="center"
        gap={6}
        classes="w-full"
      >
        {typeOptions.map((option) => (
          <FlexWrapper
            key={option.id}
            direction="col"
            gap={3}
            classes="flex-1 w-full"
          >
            <TextInput
              size={size}
              label={option.id.charAt(0).toUpperCase() + option.id.slice(1)}
              type={option.id}
              placeholder={option.value}
            />
          </FlexWrapper>
        ))}
      </FlexWrapper>
    </CodeExample>
  );
};

const TextInputTypeGuide = (props: TextInputPreviewControls) => {
  return (
    <GuideSection
      title="Type"
      description="Different HTML input types for specific data formats."
      example={<TypeExample {...props} />}
    />
  );
};

export default TextInputTypeGuide;
