import { useState } from 'react';
import AppButtonGroup from '@/components/app/AppButtonGroup';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import AppButtonGroupPreviewFrame from '@/pages/components/app/buttonGroup/AppButtonGroupPreviewFrame';

type AppButtonGroupPreviewControls = Pick<
  App.ButtonGroupProps,
  'size' | 'color'
>;

const disabledItems: App.AppButtonGroupItem[] = [
  { label: 'Button', value: 'first' },
  { label: 'Button', value: 'second', disabled: true },
  { label: 'Button', value: 'third' },
];

const groupItems: App.AppButtonGroupItem[] = [
  { label: 'Button', value: 'first' },
  { label: 'Button', value: 'second' },
  { label: 'Button', value: 'third' },
];

const AppButtonGroupStateGuide = ({
  size = 'md',
  color = 'neutral',
}: AppButtonGroupPreviewControls) => {
  const [disabledValue, setDisabledValue] = useState('first');
  const [groupValue, setGroupValue] = useState('second');

  const exampleCode = `<AppButtonGroup
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

<AppButtonGroup
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
    <GuideSection
      title="State"
      description="Handle unavailable choices at the item level, or lock the entire group while the current mode stays visible."
      example={
        <CodeExample
          code={exampleCode}
          className="flex-1 min-w-[320px]"
          maxHeight={320}
        >
          <AppButtonGroupPreviewFrame>
            <FlexWrapper direction="col" items="center" gap={3}>
              <AppButtonGroup
                size={size}
                color={color}
                items={disabledItems}
                value={disabledValue}
                onChange={setDisabledValue}
              />
              <Typography variant="C1">Disabled Option</Typography>
            </FlexWrapper>

            <FlexWrapper direction="col" items="center" gap={3}>
              <AppButtonGroup
                size={size}
                color={color}
                disabled
                items={groupItems}
                value={groupValue}
                onChange={setGroupValue}
              />
              <Typography variant="C1">Disabled Group</Typography>
            </FlexWrapper>
          </AppButtonGroupPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppButtonGroupStateGuide;
