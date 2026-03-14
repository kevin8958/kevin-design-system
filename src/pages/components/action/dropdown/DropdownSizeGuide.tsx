import React from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Dropdown from '@/components/action/Dropdown';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const SizeExample = () => {
  const sizes: Action.ButtonSize[] = ['sm', 'md', 'lg'];

  const menuItems: Action.DropdownItem[] = [
    { type: 'item', id: '1', label: 'Option 1' },
    { type: 'item', id: '2', label: 'Option 2' },
    { type: 'item', id: '3', label: 'Option 3' },
  ];

  const exampleCode = `<Dropdown buttonSize="sm" buttonItem="Small" items={items} />
<Dropdown buttonSize="md" buttonItem="Medium" items={items} />
<Dropdown buttonSize="lg" buttonItem="Large" items={items} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
      <FlexWrapper items="end" justify="center" gap={6} classes="w-full">
        {sizes.map((size) => (
          <FlexWrapper
            key={size}
            direction="col"
            items="center"
            gap={3}
            classes="shrink-0"
          >
            <Dropdown items={menuItems} size={size} label="Dropdown" />
            <Typography
              variant="C1"
              classes="text-primary-500 font-medium uppercase"
            >
              {size}
            </Typography>
          </FlexWrapper>
        ))}
      </FlexWrapper>
    </CodeExample>
  );
};
const DropdownSizeGuide = () => {
  return (
    <GuideSection
      title="Size"
      description="Adjust the trigger button size to fit different layout contexts. The dropdown supports sm, md, and lg variants."
      example={<SizeExample />}
    />
  );
};

export default DropdownSizeGuide;
