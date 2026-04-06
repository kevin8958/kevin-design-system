import { useState } from 'react';
import { LuPanelsTopLeft, LuRows3, LuStretchHorizontal } from 'react-icons/lu';
import ButtonGroup from '@/components/action/ButtonGroup';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import GuideSection from '@/components/layout/GuideSection';
import Typography from '@/components/foundation/Typography';

type ButtonGroupPreviewControls = Pick<Action.ButtonGroupProps, 'size' | 'color'>;

const textItems: Action.ButtonGroupItem[] = [
  { label: 'Board', value: 'board' },
  { label: 'List', value: 'list' },
  { label: 'Split', value: 'split' },
];

const iconItems: Action.ButtonGroupItem[] = [
  {
    label: (
      <span className="inline-flex items-center gap-2">
        <LuPanelsTopLeft />
        Board
      </span>
    ),
    value: 'board',
  },
  {
    label: (
      <span className="inline-flex items-center gap-2">
        <LuRows3 />
        List
      </span>
    ),
    value: 'list',
  },
  {
    label: (
      <span className="inline-flex items-center gap-2">
        <LuStretchHorizontal />
        Split
      </span>
    ),
    value: 'split',
  },
];

const ButtonGroupContentGuide = ({ size, color }: ButtonGroupPreviewControls) => {
  const [textValue, setTextValue] = useState('board');
  const [iconValue, setIconValue] = useState('board');

  const exampleCode = `<ButtonGroup
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

<ButtonGroup
  size="${size}"
  color="${color}"
  items={[
    { label: <><LuPanelsTopLeft /> Board</>, value: 'board' },
    { label: <><LuRows3 /> List</>, value: 'list' },
    { label: <><LuStretchHorizontal /> Split</>, value: 'split' },
  ]}
  value={iconValue}
  onChange={setIconValue}
/>`;

  return (
    <GuideSection
      title="Content"
      description="Use concise text labels or pair labels with icons when view changes need faster recognition."
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
            classes="w-full py-2"
          >
            <FlexWrapper direction="col" items="center" gap={3}>
              <ButtonGroup
                size={size}
                color={color}
                items={textItems}
                value={textValue}
                onChange={setTextValue}
              />
              <Typography variant="C1">
                Text Only
              </Typography>
            </FlexWrapper>

            <FlexWrapper direction="col" items="center" gap={3}>
              <ButtonGroup
                size={size}
                color={color}
                items={iconItems}
                value={iconValue}
                onChange={setIconValue}
              />
              <Typography variant="C1">
                Icon + Label
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

export default ButtonGroupContentGuide;
