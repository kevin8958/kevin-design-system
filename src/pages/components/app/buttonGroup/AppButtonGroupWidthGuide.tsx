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

const items: App.AppButtonGroupItem[] = [
  { label: 'Button', value: 'first' },
  { label: 'Button', value: 'second' },
  { label: 'Button', value: 'third' },
];

const AppButtonGroupWidthGuide = ({
  size = 'md',
  color = 'neutral',
}: AppButtonGroupPreviewControls) => {
  const [autoValue, setAutoValue] = useState('first');
  const [fullValue, setFullValue] = useState('first');

  const exampleCode = `<AppButtonGroup
  size="${size}"
  color="${color}"
  items={[
    { label: 'Button', value: 'first' },
    { label: 'Button', value: 'second' },
    { label: 'Button', value: 'third' },
  ]}
  value={autoValue}
  onChange={setAutoValue}
/>

<AppButtonGroup
  size="${size}"
  color="${color}"
  fullWidth
  items={[
    { label: 'Button', value: 'first' },
    { label: 'Button', value: 'second' },
    { label: 'Button', value: 'third' },
  ]}
  value={fullValue}
  onChange={setFullValue}
/>`;

  return (
    <GuideSection
      title="Width"
      description="Keep groups compact for local view switching, or stretch them across wider toolbars when every option needs equal emphasis."
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
                items={items}
                value={autoValue}
                onChange={setAutoValue}
              />
              <Typography variant="C1">Auto Width</Typography>
            </FlexWrapper>

            <FlexWrapper direction="col" items="center" gap={3} classes="w-full">
              <AppButtonGroup
                size={size}
                color={color}
                items={items}
                value={fullValue}
                onChange={setFullValue}
                fullWidth
              />
              <Typography variant="C1">Full Width</Typography>
            </FlexWrapper>
          </AppButtonGroupPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppButtonGroupWidthGuide;
