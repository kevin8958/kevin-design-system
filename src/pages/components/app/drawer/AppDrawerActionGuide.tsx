import { useState } from 'react';
import AppButton from '@/components/app/AppButton';
import AppDrawer from '@/components/app/AppDrawer';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

type AppDrawerPreviewControls = Pick<App.DrawerProps, 'size'>;

const AppDrawerActionGuide = ({ size }: AppDrawerPreviewControls) => {
  const [open, setOpen] = useState(false);
  const exampleCode = `<AppDrawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="${size}"
  title="Action Drawer"
  confirmText="Save Changes"
  cancelText="Discard"
>
  ...
</AppDrawer>`;

  return (
    <GuideSection
      title="Actions & Footer"
      description="Customize footer button labels so the drawer matches the exact task language used in the flow."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <AppDevicePreviewFrame minHeight={460}>
            <AppButton label="Open Drawer" onPress={() => setOpen(true)} />
            <AppDrawer
              isOpen={open}
              onClose={() => setOpen(false)}
              size={size}
              title="Action Drawer"
              confirmText="Save Changes"
              cancelText="Discard"
            >
              Adjust the footer labels to reflect whether the user is saving,
              discarding, publishing, or applying a change set.
            </AppDrawer>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppDrawerActionGuide;
