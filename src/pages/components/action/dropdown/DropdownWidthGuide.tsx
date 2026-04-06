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

const WidthExample = ({ size, buttonVariant }: DropdownPreviewControls) => {
  const exampleCode = `<Dropdown 
  size="${size}"
  buttonVariant="${buttonVariant}"
  label="Dropdown" 
  items={items} 
/>
<Dropdown 
  size="${size}"
  buttonVariant="${buttonVariant}"
  label="Dropdown" 
  buttonClasses="w-[100px]" 
  dialogWidth={100} 
  items={items} 
/>`;

  const menuItems: Action.DropdownItem[] = [
    { type: 'item', id: '1', label: 'Short' },
    { type: 'item', id: '2', label: 'Very Long Item Label' },
  ];

  return (
    <CodeExample
      code={exampleCode}
      className="flex-1 min-w-[320px]"
      maxHeight={200}
    >
      <FlexWrapper items="center" justify="center" gap={6} classes="w-full">
        <FlexWrapper direction="col" items="center" gap={3} classes="shrink-0">
          <Dropdown
            size={size}
            buttonVariant={buttonVariant}
            items={menuItems}
            label="Dropdown"
          />
          <Typography variant="C1">
            Fit Content
          </Typography>
        </FlexWrapper>

        <FlexWrapper direction="col" items="center" gap={3} classes="shrink-0">
          <Dropdown
            size={size}
            buttonVariant={buttonVariant}
            items={menuItems}
            label="Dropdown"
            buttonClasses="w-[100px]"
            dialogWidth={100}
          />
          <Typography variant="C1">
            Fixed Width (100px)
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const DropdownWidthGuide = (props: DropdownPreviewControls) => {
  return (
    <GuideSection
      title="Width"
      description="Control how the dropdown menu handles its width. By default, it shrinks or expands to fit the content."
      example={<WidthExample {...props} />}
    />
  );
};

export default DropdownWidthGuide;
