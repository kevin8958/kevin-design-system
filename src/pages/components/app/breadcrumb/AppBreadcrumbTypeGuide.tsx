import AppBreadcrumb from '@/components/app/AppBreadcrumb';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { appBreadcrumbItems } from '@/pages/components/app/common/appNavigationSamples';

const AppBreadcrumbTypeGuide = () => {
  const code = `<AppBreadcrumb
  items={[
    { label: 'Components' },
    { label: 'Navigation' },
    { label: 'Breadcrumb', current: true },
  ]}
/>`;

  return (
    <GuideSection
      title="Type"
      description="Use breadcrumb trails to expose the current location inside a deeper navigation structure."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={420}>
          <AppDevicePreviewFrame minHeight={200}>
            <div className="flex w-full flex-col gap-3">
              <Typography variant="C1">Default Breadcrumb</Typography>
              <AppBreadcrumb items={appBreadcrumbItems} />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppBreadcrumbTypeGuide;
