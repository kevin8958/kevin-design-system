import { useState } from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Radio from '@/components/input/Radio';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const SizeExample = () => {
  const [selectedSm, setSelectedSm] = useState('1');
  const [selectedMd, setSelectedMd] = useState('1');
  const [selectedLg, setSelectedLg] = useState('1');

  const options = [
    { id: '1', label: 'Option One', desc: 'Detailed description text' },
  ];

  const exampleCode = `<Radio size="sm" options={options} value={value} onChange={setValue} />
<Radio size="md" options={options} value={value} onChange={setValue} />
<Radio size="lg" options={options} value={value} onChange={setValue} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={8} classes="w-full p-6">
        <FlexWrapper direction="col" gap={2} classes="w-full">
          <Radio
            title="Small Size"
            size="sm"
            value={selectedSm}
            options={options}
            onChange={setSelectedSm}
          />
        </FlexWrapper>

        <FlexWrapper direction="col" gap={2} classes="w-full">
          <Radio
            title="Medium Size (Default)"
            size="md"
            value={selectedMd}
            options={options}
            onChange={setSelectedMd}
          />
        </FlexWrapper>

        <FlexWrapper direction="col" gap={2} classes="w-full">
          <Radio
            title="Large Size"
            size="lg"
            value={selectedLg}
            options={options}
            onChange={setSelectedLg}
          />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const RadioSizeGuide = () => {
  return (
    <GuideSection
      title="Size & Layout"
      description="Compare different scales of the radio group. Each size adjusts padding, circle dimensions, and typography."
      example={<SizeExample />}
    />
  );
};

export default RadioSizeGuide;
