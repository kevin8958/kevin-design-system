import { useState } from 'react';
import Select from '@/components/input/Select';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const options: Input.SelectOption[] = [
  { label: 'Primary', value: 'primary' },
  { label: 'Neutral', value: 'neutral' },
  { label: 'Danger', value: 'danger' },
];

type SelectPreviewControls = Pick<Input.SelectProps, 'size'>;

const StateExample = ({ size }: SelectPreviewControls) => {
  const [value, setValue] = useState('');

  const exampleCode = `<Select
  size="${size}"
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Select color"
/>

<Select
  size="${size}"
  options={options}
  value=""
  disabled
  placeholder="Disabled"
/>

<Select
  size="${size}"
  options={options}
  value=""
  invalid
  errorMsg="Please select an option."
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]" maxHeight={360}>
      <FlexWrapper direction="col" items="center" justify="center" gap={6} classes="w-full">
        <div className="w-full max-w-sm">
          <Select
            size={size}
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select color"
          />
        </div>
        <div className="w-full max-w-sm">
          <Select
            size={size}
            options={options}
            value=""
            disabled
            placeholder="Disabled"
          />
        </div>
        <div className="w-full max-w-sm">
          <Select
            size={size}
            options={options}
            value=""
            invalid
            errorMsg="Please select an option."
            placeholder="Invalid"
          />
        </div>
      </FlexWrapper>
    </CodeExample>
  );
};

const SelectStateGuide = (props: SelectPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Use placeholder, disabled, and validation states to guide selection flows."
      example={<StateExample {...props} />}
    />
  );
};

export default SelectStateGuide;
