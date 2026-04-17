import AppDropdown from '@/components/app/AppDropdown';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import AppDropdownPreviewFrame from '@/pages/components/app/dropdown/AppDropdownPreviewFrame';
import { widthItems } from '@/pages/components/app/dropdown/appDropdownItems';

type AppDropdownPreviewControls = Pick<
  App.DropdownProps,
  'size' | 'buttonVariant'
>;

const AppDropdownWidthGuide = ({
  size = 'md',
  buttonVariant = 'contain',
}: AppDropdownPreviewControls) => {
  const exampleCode = `<AppDropdown
  size="${size}"
  buttonVariant="${buttonVariant}"
  label="Dropdown"
  defaultOpen
  items={items}
/>

<AppDropdown
  size="${size}"
  buttonVariant="${buttonVariant}"
  label="Dropdown"
  dialogWidth={280}
  defaultOpen
  items={items}
/>`;

  return (
    <GuideSection
      title="Width"
      description="Keep the panel compact for short action lists, or widen it when labels become more descriptive and need comfortable scanning space."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <AppDropdownPreviewFrame>
            <FlexWrapper direction="col" items="stretch" gap={4} classes="w-full">
              <AppDropdown
                size={size}
                buttonVariant={buttonVariant}
                label="Dropdown"
                defaultOpen
                items={widthItems}
              />
              <AppDropdown
                size={size}
                buttonVariant={buttonVariant}
                label="Dropdown"
                dialogWidth={280}
                defaultOpen
                items={widthItems}
              />
            </FlexWrapper>
          </AppDropdownPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppDropdownWidthGuide;
