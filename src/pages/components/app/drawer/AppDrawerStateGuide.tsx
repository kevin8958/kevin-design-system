import { useState } from 'react';
import AppButton from '@/components/app/AppButton';
import AppDrawer from '@/components/app/AppDrawer';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

type AppDrawerPreviewControls = Pick<App.DrawerProps, 'size'>;

const AppDrawerStateGuide = ({ size }: AppDrawerPreviewControls) => {
  const [open, setOpen] = useState(false);
  const exampleCode = `<AppDrawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="${size}"
  title="Drawer"
  hideBottom
>
  Read-only content
</AppDrawer>`;

  return (
    <GuideSection
      title="State"
      description="Hide the footer when the drawer is used for browsing, reviewing, or reading without requiring an immediate confirmation action."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <AppDevicePreviewFrame minHeight={460}>
            <AppButton label="Open Drawer" onPress={() => setOpen(true)} />
            <AppDrawer
              isOpen={open}
              onClose={() => setOpen(false)}
              size={size}
              title="Read-only Drawer"
              hideBottom
            >
              Use hideBottom for drawers that only need browsing, reading, or
              passive review.
            </AppDrawer>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppDrawerStateGuide;
