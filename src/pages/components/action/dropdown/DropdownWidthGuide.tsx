import React from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper'; // 경로 프로젝트 기준 수정
import Dropdown from '@/components/action/Dropdown';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const WidthExample = () => {
  const exampleCode = `<Dropdown 
  buttonItem="Menu" 
  items={items} 
/>
<Dropdown 
  buttonItem="Menu" 
  buttonClasses="w-[100px]" 
  dialogWidth={100} 
  items={items} 
/>`;

  const menuItems: Action.DropdownItem[] = [
    { type: 'item', id: '1', label: 'Short' },
    { type: 'item', id: '2', label: 'Very Long Item Label' },
  ];

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
      <FlexWrapper items="center" justify="center" gap={6} classes="w-full">
        {/* Fit Content Case */}
        <FlexWrapper direction="col" items="center" gap={3} classes="shrink-0">
          <Dropdown
            items={menuItems}
            label="Fit Content"
            buttonVariant="outline"
          />
          <Typography variant="C1" classes="text-primary-500 font-medium">
            Fit Content
          </Typography>
        </FlexWrapper>

        {/* Fixed Width Case */}
        <FlexWrapper direction="col" items="center" gap={3} classes="shrink-0">
          <Dropdown
            items={menuItems}
            label="Fixed"
            buttonClasses="w-[100px]"
            dialogWidth={100}
            buttonVariant="outline"
          />
          <Typography variant="C1" classes="text-primary-500 font-medium">
            Fixed Width (100px)
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const DropdownWidthGuide = () => {
  return (
    <GuideSection
      title="Width"
      description="Control how the dropdown menu handles its width. By default, it shrinks or expands to fit the content."
      example={<WidthExample />}
    />
  );
};

export default DropdownWidthGuide;
