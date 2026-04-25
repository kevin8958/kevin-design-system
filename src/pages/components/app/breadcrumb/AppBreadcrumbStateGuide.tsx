import AppBreadcrumb from '@/components/app/AppBreadcrumb';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import {
  appBreadcrumbItems,
  appBreadcrumbLongItems,
} from '@/pages/components/app/common/appNavigationSamples';

const AppBreadcrumbStateGuide = () => {
  const code = `<AppBreadcrumb items={items} />
<AppBreadcrumb items={longPathItems} />`;

  return (
    <GuideSection
      title="State"
      description="Keep previous levels readable while highlighting the current page as the terminal item."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={520}>
          <AppDevicePreviewFrame minHeight={280}>
            <div className="flex w-full flex-col gap-6">
              <div className="flex w-full flex-col gap-3">
                <Typography variant="C1">Current Page</Typography>
                <AppBreadcrumb items={appBreadcrumbItems} />
              </div>
              <div className="flex w-full flex-col gap-3">
                <Typography variant="C1">Deeper Path</Typography>
                <AppBreadcrumb items={appBreadcrumbLongItems} />
              </div>
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppBreadcrumbStateGuide;
