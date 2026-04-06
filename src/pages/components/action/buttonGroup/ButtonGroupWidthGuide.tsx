import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import GuideSection from '@/components/layout/GuideSection';
import Typography from '@/components/foundation/Typography';

type ButtonGroupPreviewControls = Pick<Action.ButtonGroupProps, 'size' | 'color'>;

const items: Action.ButtonGroupItem[] = [
  { label: 'Button', value: 'first' },
  { label: 'Button', value: 'second' },
  { label: 'Button', value: 'third' },
];

const ButtonGroupWidthGuide = ({ size, color }: ButtonGroupPreviewControls) => {
  const [autoValue, setAutoValue] = useState('first');
  const [fullValue, setFullValue] = useState('first');

  const exampleCode = `<ButtonGroup
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

<ButtonGroup
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
      description="Keep groups compact for local view switching or stretch them across wider toolbars when every option needs equal emphasis."
      example={
        <CodeExample
          code={exampleCode}
          className="flex-1 min-w-[320px]"
          maxHeight={320}
        >
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
                items={items}
                value={autoValue}
                onChange={setAutoValue}
              />
              <Typography variant="C1">
                Auto Width
              </Typography>
            </FlexWrapper>

            <FlexWrapper
              direction="col"
              items="center"
              gap={3}
              classes="w-full max-w-lg"
            >
              <ButtonGroup
                size={size}
                color={color}
                fullWidth
                items={items}
                value={fullValue}
                onChange={setFullValue}
              />
              <Typography variant="C1">
                Full Width
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

export default ButtonGroupWidthGuide;
