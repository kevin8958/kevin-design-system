import AppTag from '@/components/app/AppTag';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppTagVariantGuide = ({ size }: { size: App.AppLabelSize }) => {
  const code = `<AppTag label="Neutral" size="${size}" />
<AppTag label="Primary" size="${size}" variant="primary" />`;

  return (
    <GuideSection
      title="Variant"
      description="Use the primary variant sparingly to pull a single category or filter above the rest."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={260}>
          <AppDevicePreviewFrame minHeight={120}>
            <div className="flex w-full flex-wrap items-center gap-3">
              <AppTag label="Neutral" size={size} />
              <AppTag label="Primary" size={size} variant="primary" />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppTagVariantGuide;
