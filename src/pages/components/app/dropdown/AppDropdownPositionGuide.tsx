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

const AppDropdownPositionGuide = ({
  size = 'md',
  buttonVariant = 'contain',
}: AppDropdownPreviewControls) => {
  const exampleCode = `<AppDropdown
  size="${size}"
  buttonVariant="${buttonVariant}"
  dialogPosition="left"
  label="Dropdown"
  items={items}
/>

<AppDropdown
  size="${size}"
  buttonVariant="${buttonVariant}"
  dialogPosition="right"
  label="Dropdown"
  items={items}
/>`;

  return (
    <GuideSection
      title="Position"
      description="Align the menu to the leading or trailing edge of the trigger depending on where the action sits in the layout."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <AppDropdownPreviewFrame>
            <FlexWrapper direction="col" items="stretch" gap={4} classes="w-full">
              <AppDropdown
                size={size}
                buttonVariant={buttonVariant}
                dialogPosition="left"
                label="Dropdown"
                items={widthItems}
              />
              <AppDropdown
                size={size}
                buttonVariant={buttonVariant}
                dialogPosition="right"
                label="Dropdown"
                items={widthItems}
              />
            </FlexWrapper>
          </AppDropdownPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppDropdownPositionGuide;
