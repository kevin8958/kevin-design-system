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

const AppDropdownStateGuide = ({
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
  disabled
  items={items}
/>`;

  return (
    <GuideSection
      title="State"
      description="Keep the menu available when actions can be taken, and disable the trigger entirely when the current context should block changes."
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
                disabled
                items={widthItems}
              />
            </FlexWrapper>
          </AppDropdownPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppDropdownStateGuide;
