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

const textItems: App.AppButtonGroupItem[] = [
  { label: 'Board', value: 'board' },
  { label: 'List', value: 'list' },
  { label: 'Split', value: 'split' },
];

const iconItems: App.AppButtonGroupItem[] = [
  { label: '# Board', value: 'board' },
  { label: '= List', value: 'list' },
  { label: '| Split', value: 'split' },
];

const AppButtonGroupContentGuide = ({
  size = 'md',
  color = 'neutral',
}: AppButtonGroupPreviewControls) => {
  const [textValue, setTextValue] = useState('board');
  const [iconValue, setIconValue] = useState('board');

  const exampleCode = `<AppButtonGroup
  size="${size}"
  color="${color}"
  items={[
    { label: 'Board', value: 'board' },
    { label: 'List', value: 'list' },
    { label: 'Split', value: 'split' },
  ]}
  value={textValue}
  onChange={setTextValue}
/>

<AppButtonGroup
  size="${size}"
  color="${color}"
  items={[
    { label: '# Board', value: 'board' },
    { label: '= List', value: 'list' },
    { label: '| Split', value: 'split' },
  ]}
  value={iconValue}
  onChange={setIconValue}
/>`;

  return (
    <GuideSection
      title="Content"
      description="Use short labels for compact mode switching, or pair a simple symbol with text when faster recognition matters."
      example={
        <CodeExample
          code={exampleCode}
          className="flex-1 min-w-[320px]"
          maxHeight={340}
        >
          <AppButtonGroupPreviewFrame>
            <FlexWrapper direction="col" items="center" gap={3}>
              <AppButtonGroup
                size={size}
                color={color}
                items={textItems}
                value={textValue}
                onChange={setTextValue}
              />
              <Typography variant="C1">Text Only</Typography>
            </FlexWrapper>

            <FlexWrapper direction="col" items="center" gap={3}>
              <AppButtonGroup
                size={size}
                color={color}
                items={iconItems}
                value={iconValue}
                onChange={setIconValue}
              />
              <Typography variant="C1">Icon + Label</Typography>
            </FlexWrapper>
          </AppButtonGroupPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppButtonGroupContentGuide;
