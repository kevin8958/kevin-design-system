import Dropdown from '@/components/action/Dropdown';
import CodeExample from '@/components/interaction/CodeExample';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import GuideSection from '@/components/layout/GuideSection';

type DropdownPreviewControls = Pick<
  Action.DropdownProps,
  'size' | 'buttonVariant'
>;

const menuItems: Action.DropdownItem[] = [
  { type: 'item', id: 'one', label: 'Button' },
  { type: 'item', id: 'two', label: 'Button' },
  { type: 'item', id: 'three', label: 'Button' },
];

const DropdownStateGuide = ({
  size,
  buttonVariant,
}: DropdownPreviewControls) => {
  const exampleCode = `<Dropdown
  size="${size}"
  buttonVariant="${buttonVariant}"
  label="Dropdown"
  items={[
    { type: 'item', id: 'one', label: 'Button' },
    { type: 'item', id: 'two', label: 'Button' },
    { type: 'item', id: 'three', label: 'Button' },
  ]}
/>

<Dropdown
  size="${size}"
  buttonVariant="${buttonVariant}"
  label="Dropdown"
  disabled
  items={[
    { type: 'item', id: 'one', label: 'Button' },
    { type: 'item', id: 'two', label: 'Button' },
    { type: 'item', id: 'three', label: 'Button' },
  ]}
/>`;

  return (
    <GuideSection
      title="State"
      description="Use the default trigger for available actions and disable the entire dropdown when changes should be temporarily blocked."
      example={
        <CodeExample
          code={exampleCode}
          className="flex-1 min-w-[320px]"
          maxHeight={240}
        >
          <FlexWrapper items="center" justify="center" gap={6} classes="w-full">
            <FlexWrapper direction="col" items="center" gap={3}>
              <Dropdown
                size={size}
                buttonVariant={buttonVariant}
                label="Dropdown"
                items={menuItems}
              />
              <Typography variant="C1">Default</Typography>
            </FlexWrapper>
            <FlexWrapper direction="col" items="center" gap={3}>
              <Dropdown
                size={size}
                buttonVariant={buttonVariant}
                label="Dropdown"
                disabled
                items={menuItems}
              />
              <Typography variant="C1">Disabled</Typography>
            </FlexWrapper>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

export default DropdownStateGuide;
