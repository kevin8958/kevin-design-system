import AppBadge from '@/components/app/AppBadge';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppBadgeContentGuide = ({ size }: { size: App.AppLabelSize }) => {
  const code = `<AppBadge label="Draft" size="${size}" />
<AppBadge label="99+" size="${size}" variant="danger" />
<AppBadge label="Synced" size="${size}" variant="success" />`;

  return (
    <GuideSection
      title="Content"
      description="Keep badge content short so status and counts stay legible in crowded app surfaces."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={300}>
          <AppDevicePreviewFrame minHeight={140}>
            <div className="flex w-full flex-wrap items-center gap-3">
              <AppBadge label="Draft" size={size} />
              <AppBadge label="99+" size={size} variant="danger" />
              <AppBadge label="Synced" size={size} variant="success" />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppBadgeContentGuide;
