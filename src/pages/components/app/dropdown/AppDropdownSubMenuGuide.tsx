import AppDropdown from '@/components/app/AppDropdown';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDropdownPreviewFrame from '@/pages/components/app/dropdown/AppDropdownPreviewFrame';
import { submenuItems } from '@/pages/components/app/dropdown/appDropdownItems';

type AppDropdownPreviewControls = Pick<
  App.DropdownProps,
  'size' | 'buttonVariant'
>;

const AppDropdownSubMenuGuide = ({
  size = 'md',
  buttonVariant = 'contain',
}: AppDropdownPreviewControls) => {
  const exampleCode = `<AppDropdown
  size="${size}"
  buttonVariant="${buttonVariant}"
  label="Dropdown"
  items={[
    { type: 'item', id: 'profile', label: 'Profile' },
    {
      type: 'submenu',
      id: 'notifications',
      label: 'Notifications',
      items: [
        { type: 'item', id: 'all', label: 'All activity' },
        { type: 'item', id: 'mentions', label: 'Mentions only' },
        { type: 'item', id: 'none', label: 'Mute thread' },
      ],
    },
    { type: 'item', id: 'settings', label: 'Settings' },
  ]}
/>`;

  return (
    <GuideSection
      title="Sub Menu"
      description="Nested menus help keep the first layer short while still exposing related preferences one step deeper."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <AppDropdownPreviewFrame>
            <AppDropdown
              size={size}
              buttonVariant={buttonVariant}
              label="Dropdown"
              items={submenuItems}
            />
          </AppDropdownPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppDropdownSubMenuGuide;
