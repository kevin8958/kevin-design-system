import FlexWrapper from '@/components/layout/FlexWrapper';
import TextInput from '@/components/input/TextInput';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type TextInputPreviewControls = Pick<Input.TextInputProps, 'size'>;

const StateExample = ({ size }: TextInputPreviewControls) => {
  const exampleCode = `<TextInput size="${size}" label="Default" placeholder="Default state" />
<TextInput size="${size}" label="Required" required placeholder="Required state" />
<TextInput size="${size}" label="Disabled" disabled value="Not editable" />
<TextInput size="${size}" label="Error" error errorMsg="Invalid input" value="Wrong data" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper
        direction="col"
        items="center"
        justify="center"
        gap={6}
        classes="w-full"
      >
        <TextInput size={size} label="Default" placeholder="Default state" />
        <TextInput
          size={size}
          label="Required"
          required
          placeholder="Required state"
        />
        <TextInput size={size} label="Disabled" disabled value="Not editable" />
        <TextInput
          size={size}
          label="Error"
          error
          errorMsg="Invalid input"
          value="Wrong data"
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const TextInputStateGuide = (props: TextInputPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Visual cues for interaction states including disabled, error, and required fields."
      example={<StateExample {...props} />}
    />
  );
};

export default TextInputStateGuide;
