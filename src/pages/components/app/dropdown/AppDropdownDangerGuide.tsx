import AppDropdown from '@/components/app/AppDropdown';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDropdownPreviewFrame from '@/pages/components/app/dropdown/AppDropdownPreviewFrame';
import { dangerItems } from '@/pages/components/app/dropdown/appDropdownItems';

type AppDropdownPreviewControls = Pick<
  App.DropdownProps,
  'size' | 'buttonVariant'
>;

const AppDropdownDangerGuide = ({
  size = 'md',
  buttonVariant = 'contain',
}: AppDropdownPreviewControls) => {
  const exampleCode = `<AppDropdown
  size="${size}"
  buttonVariant="${buttonVariant}"
  label="Dropdown"
  items={[
    { type: 'item', id: 'rename', label: 'Rename' },
    { type: 'item', id: 'archive', label: 'Archive' },
    { type: 'item', id: 'delete', label: 'Delete', danger: true },
  ]}
/>`;

  return (
    <GuideSection
      title="Danger"
      description="Use danger styling sparingly to separate destructive choices from regular menu actions."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <AppDropdownPreviewFrame>
            <AppDropdown
              size={size}
              buttonVariant={buttonVariant}
              label="Dropdown"
              items={dangerItems}
            />
          </AppDropdownPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppDropdownDangerGuide;
