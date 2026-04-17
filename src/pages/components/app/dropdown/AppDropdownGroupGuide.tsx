import AppDropdown from '@/components/app/AppDropdown';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDropdownPreviewFrame from '@/pages/components/app/dropdown/AppDropdownPreviewFrame';
import { groupedItems } from '@/pages/components/app/dropdown/appDropdownItems';

type AppDropdownPreviewControls = Pick<
  App.DropdownProps,
  'size' | 'buttonVariant'
>;

const AppDropdownGroupGuide = ({
  size = 'md',
  buttonVariant = 'contain',
}: AppDropdownPreviewControls) => {
  const exampleCode = `<AppDropdown
  size="${size}"
  buttonVariant="${buttonVariant}"
  label="Dropdown"
  defaultOpen
  items={[
    {
      type: 'group',
      id: 'views',
      label: 'Views',
      items: [
        { type: 'item', id: 'board', label: 'Board' },
        { type: 'item', id: 'list', label: 'List' },
        { type: 'item', id: 'calendar', label: 'Calendar' },
      ],
    },
    {
      type: 'group',
      id: 'actions',
      label: 'Actions',
      items: [
        { type: 'item', id: 'share', label: 'Share' },
        { type: 'item', id: 'duplicate', label: 'Duplicate' },
      ],
    },
  ]}
/>`;

  return (
    <GuideSection
      title="Group"
      description="Use grouped sections to separate view modes, actions, and account-level choices inside the same menu."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <AppDropdownPreviewFrame>
            <AppDropdown
              size={size}
              buttonVariant={buttonVariant}
              label="Dropdown"
              defaultOpen
              items={groupedItems}
            />
          </AppDropdownPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppDropdownGroupGuide;
