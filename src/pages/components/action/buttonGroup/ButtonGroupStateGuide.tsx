import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import GuideSection from '@/components/layout/GuideSection';

const disabledItems: Action.ButtonGroupItem[] = [
  { label: 'Left', value: 'left' },
  { label: 'Center', value: 'center', disabled: true },
  { label: 'Right', value: 'right' },
];

const fullWidthItems: Action.ButtonGroupItem[] = [
  { label: 'Primary', value: 'primary' },
  { label: 'Neutral', value: 'neutral' },
  { label: 'Danger', value: 'danger' },
];

const StateExample = () => {
  const [disabledValue, setDisabledValue] = useState('left');
  const [fullWidthValue, setFullWidthValue] = useState('primary');

  const exampleCode = `<ButtonGroup
  items={[
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center', disabled: true },
    { label: 'Right', value: 'right' },
  ]}
  value={disabledValue}
  onChange={setDisabledValue}
/>

<ButtonGroup
  fullWidth
  items={[
    { label: 'Primary', value: 'primary' },
    { label: 'Neutral', value: 'neutral' },
    { label: 'Danger', value: 'danger' },
  ]}
  value={fullWidthValue}
  onChange={setFullWidthValue}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]" maxHeight={300}>
      <FlexWrapper
        direction="col"
        items="center"
        justify="center"
        gap={6}
        classes="w-full"
      >
        <ButtonGroup
          items={disabledItems}
          value={disabledValue}
          onChange={setDisabledValue}
        />

        <div className="w-full max-w-lg">
          <ButtonGroup
            fullWidth
            items={fullWidthItems}
            value={fullWidthValue}
            onChange={setFullWidthValue}
          />
        </div>
      </FlexWrapper>
    </CodeExample>
  );
};

const ButtonGroupStateGuide = () => {
  return (
    <GuideSection
      title="State"
      description="Support disabled options and stretch groups across available width when needed."
      example={<StateExample />}
    />
  );
};

export default ButtonGroupStateGuide;
