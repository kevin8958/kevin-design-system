import AppProgress from '@/components/app/AppProgress';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppProgressTypeGuide = ({
  size,
}: {
  size: App.AppProgressSize;
}) => {
  const code = `<AppProgress value={40} size="${size}" />
<AppProgress value={72} size="${size}" showValue />`;

  return (
    <GuideSection
      title="Type"
      description="Choose whether the indicator should stay minimal or include a percentage label for extra clarity."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={280}>
          <AppDevicePreviewFrame minHeight={150}>
            <div className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Typography variant="C1">Bar Only</Typography>
                <AppProgress size={size} value={40} />
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="C1">With Percentage</Typography>
                <AppProgress showValue size={size} value={72} />
              </div>
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppProgressTypeGuide;
