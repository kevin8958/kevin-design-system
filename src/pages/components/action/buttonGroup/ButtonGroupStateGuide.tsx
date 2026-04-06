import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import GuideSection from '@/components/layout/GuideSection';
import Typography from '@/components/foundation/Typography';

const disabledItems: Action.ButtonGroupItem[] = [
  { label: 'Button', value: 'first' },
  { label: 'Button', value: 'second', disabled: true },
  { label: 'Button', value: 'third' },
];

const groupItems: Action.ButtonGroupItem[] = [
  { label: 'Button', value: 'first' },
  { label: 'Button', value: 'second' },
  { label: 'Button', value: 'third' },
];

type ButtonGroupPreviewControls = Pick<Action.ButtonGroupProps, 'size' | 'color'>;

const StateExample = ({ size, color }: ButtonGroupPreviewControls) => {
  const [disabledValue, setDisabledValue] = useState('first');
  const [groupValue, setGroupValue] = useState('second');

  const exampleCode = `<ButtonGroup
  size="${size}"
  color="${color}"
  items={[
    { label: 'Button', value: 'first' },
    { label: 'Button', value: 'second', disabled: true },
    { label: 'Button', value: 'third' },
  ]}
  value={disabledValue}
  onChange={setDisabledValue}
/>

<ButtonGroup
  size="${size}"
  color="${color}"
  disabled
  items={[
    { label: 'Button', value: 'first' },
    { label: 'Button', value: 'second' },
    { label: 'Button', value: 'third' },
  ]}
  value={groupValue}
  onChange={setGroupValue}
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
        <FlexWrapper direction="col" items="center" gap={3}>
          <ButtonGroup
            size={size}
            color={color}
            items={disabledItems}
            value={disabledValue}
            onChange={setDisabledValue}
          />
          <Typography variant="C1">
            Disabled Option
          </Typography>
        </FlexWrapper>

        <FlexWrapper direction="col" items="center" gap={3}>
          <ButtonGroup
            size={size}
            color={color}
            disabled
            items={groupItems}
            value={groupValue}
            onChange={setGroupValue}
          />
          <Typography variant="C1">
            Disabled Group
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const ButtonGroupStateGuide = (props: ButtonGroupPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Handle unavailable options at the item level or lock the entire group when changes are temporarily unavailable."
      example={<StateExample {...props} />}
    />
  );
};

export default ButtonGroupStateGuide;
