import { useState } from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Radio from '@/components/input/Radio';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type RadioPreviewControls = Pick<Input.RadioProps, 'size'>;

const StateExample = ({ size }: RadioPreviewControls) => {
  const [selectedDefault, setSelectedDefault] = useState('1');
  const [selectedInvalid, setSelectedInvalid] = useState('1');

  const defaultOptions = [
    { id: '1', label: 'Active Option', desc: 'Ready for interaction' },
    {
      id: '2',
      label: 'Disabled Option',
      desc: 'This specific item is locked',
      disabled: true,
    },
  ];

  const invalidOptions = [
    {
      id: '1',
      label: 'Incorrect Selection',
      desc: 'Selecting this triggers an error',
    },
  ];

  const exampleCode = `// Default & Disabled
<Radio 
  title="Availability"
  size="${size}"
  options={defaultOptions}
  value={value}
  onChange={setValue}
/>

// Invalid with Error Message
<Radio 
  title="Validation"
  size="${size}"
  invalid={true}
  errorMsg="This selection is currently unavailable."
  options={invalidOptions}
  value={value}
  onChange={setValue}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={10} classes="w-full p-6">
        {/* Default & Individual Disabled State */}
        <FlexWrapper direction="col" gap={2} classes="w-full">
          <Radio
            title="Account Type"
            size={size}
            value={selectedDefault}
            options={defaultOptions}
            onChange={setSelectedDefault}
          />
        </FlexWrapper>

        {/* Invalid State with Absolute Error Message */}
        <FlexWrapper direction="col" gap={2} classes="w-full">
          <Radio
            title="Subscription Plan"
            size={size}
            value={selectedInvalid}
            options={invalidOptions}
            onChange={setSelectedInvalid}
            invalid={selectedInvalid === '1'}
            errorMsg={
              selectedInvalid === '1'
                ? 'The selected plan is no longer available.'
                : undefined
            }
          />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const RadioStateGuide = (props: RadioPreviewControls) => {
  return (
    <GuideSection
      title="Interactive States"
      description="Detailed view of how the radio component handles interaction, restrictions, and validation errors."
      example={<StateExample {...props} />}
    />
  );
};

export default RadioStateGuide;
