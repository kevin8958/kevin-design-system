import { useState } from 'react';
import Combobox from '@/components/input/Combobox';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';

type ComboboxPreviewControls = Pick<Input.ComboboxProps, 'size'>;

const options: Input.ComboboxOption[] = [
  {
    label: 'Design',
    value: 'design',
    description: 'Visual language, motion, and UX direction',
  },
  {
    label: 'Engineering',
    value: 'engineering',
    description: 'Frontend, backend, and infrastructure',
  },
  {
    label: 'Support',
    value: 'support',
    description: 'Customer escalations and feedback loops',
  },
];

const ComboboxStateExample = ({ size }: ComboboxPreviewControls) => {
  const [value, setValue] = useState('');
  const exampleCode = `<Combobox size="${size}" label="Default" options={options} value={value} onChange={setValue} />
<Combobox size="${size}" label="Disabled" options={options} value="" disabled />
<Combobox size="${size}" label="Invalid" options={options} value="" invalid errorMsg="Please select a team." />`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[340px]">
      <FlexWrapper classes="w-full max-w-[440px]" direction="col" items="start" gap={4}>
        <Combobox
          size={size}
          label="Default"
          placeholder="Search team"
          options={options}
          value={value}
          onChange={setValue}
        />
        <Combobox
          size={size}
          label="Disabled"
          placeholder="Search team"
          options={options}
          value=""
          disabled
        />
        <Combobox
          size={size}
          label="Invalid"
          placeholder="Search team"
          options={options}
          value=""
          invalid
          errorMsg="Please select a team."
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const ComboboxStateGuide = (props: ComboboxPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Disabled and invalid states stay consistent with the rest of the Input system while keeping search behavior intact."
      example={<ComboboxStateExample {...props} />}
    />
  );
};

export default ComboboxStateGuide;
