import { useState } from 'react';
import AppTabs from '@/components/app/AppTabs';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { appTabsItems } from '@/pages/components/app/common/appNavigationSamples';

const AppTabsTypeGuide = ({ size }: { size: App.AppNavigationSize }) => {
  const [value, setValue] = useState('overview');
  const code = `const [value, setValue] = useState('overview');

<AppTabs
  items={items}
  value={value}
  size="${size}"
  onChange={setValue}
/>`;

  return (
    <GuideSection
      title="Type"
      description="Use tabs to switch between related views without leaving the current screen."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={620}>
          <AppDevicePreviewFrame minHeight={360}>
            <div className="flex w-full flex-col gap-3">
              <Typography variant="C1">Default Tabs</Typography>
              <AppTabs items={appTabsItems} onChange={setValue} size={size} value={value} />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppTabsTypeGuide;
