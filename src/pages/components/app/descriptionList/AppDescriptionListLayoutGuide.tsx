import AppDescriptionList from '@/components/app/AppDescriptionList';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { appDescriptionItems } from '@/pages/components/app/common/appDataDisplaySamples';

const AppDescriptionListLayoutGuide = ({
  size,
}: {
  size: App.AppCardSize;
}) => {
  const code = `<AppDescriptionList items={items} size="${size}" columns={1} />
<AppDescriptionList items={items} size="${size}" columns={2} />`;

  return (
    <GuideSection
      title="Layout"
      description="Switch between single and two-column layouts depending on how dense the summary needs to feel."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={920}>
          <AppDevicePreviewFrame minHeight={700}>
            <div className="flex w-full flex-col gap-5">
              <div className="flex w-full flex-col gap-3">
                <Typography variant="C1">Single Column</Typography>
                <AppDescriptionList columns={1} items={appDescriptionItems} size={size} />
              </div>
              <div className="flex w-full flex-col gap-3">
                <Typography variant="C1">Two Columns</Typography>
                <AppDescriptionList columns={2} items={appDescriptionItems} size={size} />
              </div>
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppDescriptionListLayoutGuide;
