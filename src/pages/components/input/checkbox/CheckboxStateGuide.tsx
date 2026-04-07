import FlexWrapper from '@/components/layout/FlexWrapper';
import Checkbox from '@/components/input/Checkbox';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const StateExample = () => {
  const exampleCode = `<Checkbox label="Default" />
<Checkbox label="Checked" checked />
<Checkbox label="Invalid" invalid errorMsg="Please check this field." />
<Checkbox label="Disabled" disabled />
<Checkbox label="Disabled Checked" disabled checked />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper
        direction="col"
        items="start"
        justify="center"
        gap={4}
        classes="w-full p-4"
      >
        <Checkbox label="Default State" />
        <Checkbox label="Checked State" checked />
        <Checkbox
          label="Invalid State"
          invalid
          errorMsg="Please check this field."
        />
        <Checkbox label="Disabled State" disabled />
        <Checkbox label="Disabled Checked" disabled checked />
      </FlexWrapper>
    </CodeExample>
  );
};

const CheckboxStateGuide = () => {
  return (
    <GuideSection
      title="States"
      description="Visual representations of different interaction states like disabled or invalid."
      example={<StateExample />}
    />
  );
};

export default CheckboxStateGuide;
