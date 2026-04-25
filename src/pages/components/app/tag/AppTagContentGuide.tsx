import AppTag from '@/components/app/AppTag';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppTagContentGuide = ({ size }: { size: App.AppLabelSize }) => {
  const code = `<AppTag label="Owner" size="${size}" />
<AppTag label="Figma" size="${size}" />
<AppTag label="Mobile" size="${size}" variant="primary" />`;

  return (
    <GuideSection
      title="Content"
      description="Tags work best with short categorical labels that group or filter nearby content."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={300}>
          <AppDevicePreviewFrame minHeight={140}>
            <div className="flex w-full flex-wrap items-center gap-3">
              <AppTag label="Owner" size={size} />
              <AppTag label="Figma" size={size} />
              <AppTag label="Mobile" size={size} variant="primary" />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppTagContentGuide;
