import React from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Dropdown from '@/components/action/Dropdown';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type DropdownPreviewControls = Pick<
  Action.DropdownProps,
  'size' | 'buttonVariant'
>;

const PositionExample = ({ size, buttonVariant }: DropdownPreviewControls) => {
  const positionOptions: {
    id: 'left' | 'right';
    value: string;
  }[] = [
    { id: 'left', value: 'Left' },
    { id: 'right', value: 'Right' },
  ];

  const menuItems: Action.DropdownItem[] = [
    { type: 'item', id: '1', label: 'Item 1' },
    { type: 'item', id: '2', label: 'Item 2' },
    { type: 'item', id: '3', label: 'Item 3' },
  ];

  const exampleCode = `<Dropdown dialogPosition="left" buttonItem="Left" items={items} />
<Dropdown dialogPosition="right" buttonItem="Right" items={items} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
      <FlexWrapper items="center" justify="center" gap={6} classes="w-full">
        {positionOptions.map((option) => (
          <FlexWrapper
            key={option.id}
            direction="col"
            items="center"
            gap={3}
            classes="shrink-0"
          >
            <Dropdown
              items={menuItems}
              size={size}
              buttonVariant={buttonVariant}
              dialogPosition={option.id}
              label="Dropdown"
              dialogWidth={100}
              buttonClasses="w-[100px]"
            />
            <Typography variant="C1">
              {option.value}
            </Typography>
          </FlexWrapper>
        ))}
      </FlexWrapper>
    </CodeExample>
  );
};

const DropdownPositionGuide = (props: DropdownPreviewControls) => {
  return (
    <GuideSection
      title="Position"
      description="Control the alignment of the dropdown menu relative to the trigger button. Use left or right to set the anchor point."
      example={<PositionExample {...props} />}
    />
  );
};

export default DropdownPositionGuide;
