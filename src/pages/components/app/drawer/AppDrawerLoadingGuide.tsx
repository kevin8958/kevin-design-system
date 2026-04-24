import { useState } from 'react';
import AppButton from '@/components/app/AppButton';
import AppDrawer from '@/components/app/AppDrawer';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

type AppDrawerPreviewControls = Pick<App.DrawerProps, 'size'>;

const AppDrawerLoadingGuide = ({ size }: AppDrawerPreviewControls) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const exampleCode = `<AppDrawer
  isOpen={isOpen}
  onClose={close}
  size="${size}"
  loading={loading}
  onConfirm={handleConfirm}
>
  ...
</AppDrawer>`;

  return (
    <GuideSection
      title="Loading State"
      description="Use the loading state to show that a save or submission is still in progress while the drawer remains on screen."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <AppDevicePreviewFrame minHeight={460}>
            <AppButton label="Open Drawer" onPress={() => setOpen(true)} />
            <AppDrawer
              isOpen={open}
              onClose={() => {
                setLoading(false);
                setOpen(false);
              }}
              onConfirm={() => {
                setLoading(true);
                window.setTimeout(() => {
                  setLoading(false);
                  setOpen(false);
                }, 1200);
              }}
              size={size}
              title="Async Action"
              loading={loading}
            >
              Confirm the action to see the loading button state inside the drawer footer.
            </AppDrawer>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppDrawerLoadingGuide;
