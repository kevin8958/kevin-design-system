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

const SizeExample = () => {
  const [sm, setSm] = useState('primary');
  const [md, setMd] = useState('neutral');
  const [lg, setLg] = useState('danger');

  const exampleCode = `<Select size="sm" options={options} value={value} onChange={setValue} />
<Select size="md" options={options} value={value} onChange={setValue} />
<Select size="lg" options={options} value={value} onChange={setValue} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]" maxHeight={320}>
      <FlexWrapper direction="col" items="center" justify="center" gap={6} classes="w-full">
        <div className="w-full max-w-sm">
          <Select size="sm" options={options} value={sm} onChange={setSm} />
        </div>
        <div className="w-full max-w-sm">
          <Select size="md" options={options} value={md} onChange={setMd} />
        </div>
        <div className="w-full max-w-sm">
          <Select size="lg" options={options} value={lg} onChange={setLg} />
        </div>
      </FlexWrapper>
    </CodeExample>
  );
};

const SelectSizeGuide = () => {
  return (
    <GuideSection
      title="Size"
      description="Scale the trigger height to fit different interface densities."
      example={<SizeExample />}
    />
  );
};

export default SelectSizeGuide;
