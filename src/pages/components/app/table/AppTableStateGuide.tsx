import AppTable from '@/components/app/AppTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import {
  appTableColumns,
  appTableRows,
} from '@/pages/components/app/common/appDataDisplaySamples';

const AppTableStateGuide = () => {
  const code = `<AppTable columns={columns} data={rows} />
<AppTable columns={columns} data={[]} emptyState="No members found." />`;

  return (
    <GuideSection
      title="State"
      description="Document both populated and empty states so data-heavy screens never collapse into ambiguity."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={980}>
          <AppDevicePreviewFrame contentClasses="overflow-hidden" minHeight={700}>
            <div className="flex w-full flex-col gap-6">
              <div className="flex w-full flex-col gap-3">
                <Typography variant="C1">Default</Typography>
                <AppTable columns={appTableColumns} data={appTableRows} />
              </div>
              <div className="flex w-full flex-col gap-3">
                <Typography variant="C1">Empty</Typography>
                <AppTable columns={appTableColumns} data={[]} emptyState="No members found." />
              </div>
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppTableStateGuide;
