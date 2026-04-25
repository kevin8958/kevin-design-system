import AppTable from '@/components/app/AppTable';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import {
  appTableColumns,
  appTableRows,
} from '@/pages/components/app/common/appDataDisplaySamples';

const AppTableTypeGuide = () => {
  const code = `<AppTable columns={columns} data={rows} />`;

  return (
    <GuideSection
      title="Type"
      description="Use tables for denser structured data where scanning across repeated fields matters."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={620}>
          <AppDevicePreviewFrame contentClasses="overflow-hidden" minHeight={340}>
            <AppTable columns={appTableColumns} data={appTableRows} />
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppTableTypeGuide;
