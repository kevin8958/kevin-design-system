import FlexWrapper from '@/components/layout/FlexWrapper';
import TextInput from '@/components/input/TextInput';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const StateExample = () => {
  const exampleCode = `<TextInput label="Default" placeholder="Default state" />
<TextInput label="Required" required placeholder="Required state" />
<TextInput label="Disabled" disabled value="Not editable" />
<TextInput label="Error" error errorMsg="Invalid input" value="Wrong data" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper
        direction="col"
        items="center"
        justify="center"
        gap={6}
        classes="w-full"
      >
        <TextInput label="Default" placeholder="Default state" />
        <TextInput label="Required" required placeholder="Required state" />
        <TextInput label="Disabled" disabled value="Not editable" />
        <TextInput
          label="Error"
          error
          errorMsg="Invalid input"
          value="Wrong data"
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const TextInputStateGuide = () => {
  return (
    <GuideSection
      title="State"
      description="Visual cues for interaction states including disabled, error, and required fields."
      example={<StateExample />}
    />
  );
};

export default TextInputStateGuide;
