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
    keywords: ['ux', 'ui', 'brand'],
  },
  {
    label: 'Engineering',
    value: 'engineering',
    description: 'Frontend, backend, and infrastructure',
    keywords: ['frontend', 'backend', 'api'],
  },
  {
    label: 'Support',
    value: 'support',
    description: 'Customer escalations and feedback loops',
    keywords: ['ops', 'tickets', 'triage'],
  },
];

const ComboboxContentExample = ({ size }: ComboboxPreviewControls) => {
  const [value, setValue] = useState('engineering');
  const exampleCode = `<Combobox
  size="${size}"
  label="Team"
  placeholder="Search team"
  options={options}
  value={value}
  onChange={setValue}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[340px]">
      <FlexWrapper classes="w-full max-w-[440px]" direction="col" items="start">
        <Combobox
          size={size}
          label="Team"
          placeholder="Search team"
          options={options}
          value={value}
          onChange={setValue}
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const ComboboxContentGuide = (props: ComboboxPreviewControls) => {
  return (
    <GuideSection
      title="Content"
      description="Combobox helps users search and pick from a larger set without leaving the familiar input pattern."
      example={<ComboboxContentExample {...props} />}
    />
  );
};

export default ComboboxContentGuide;
