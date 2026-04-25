import { useState } from 'react';
import AppTabs from '@/components/app/AppTabs';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { appTabsStateItems } from '@/pages/components/app/common/appNavigationSamples';

const AppTabsStateGuide = ({ size }: { size: App.AppNavigationSize }) => {
  const [value, setValue] = useState('details');
  const code = `const [value, setValue] = useState('details');

<AppTabs items={items} value={value} size="${size}" onChange={setValue} />
<AppTabs items={items} value="details" size="${size}" disabled />`;

  return (
    <GuideSection
      title="State"
      description="Communicate selected and unavailable tab states with clear contrast inside compact app surfaces."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={820}>
          <AppDevicePreviewFrame minHeight={520}>
            <div className="flex w-full flex-col gap-6">
              <div className="flex w-full flex-col gap-3">
                <Typography variant="C1">With Disabled Tab</Typography>
                <AppTabs
                  items={appTabsStateItems}
                  onChange={setValue}
                  size={size}
                  value={value}
                />
              </div>
              <div className="flex w-full flex-col gap-3">
                <Typography variant="C1">Disabled Group</Typography>
                <AppTabs disabled items={appTabsStateItems} size={size} value="details" />
              </div>
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppTabsStateGuide;
