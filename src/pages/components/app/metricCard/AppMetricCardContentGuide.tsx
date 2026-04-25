import AppMetricCard from '@/components/app/AppMetricCard';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppMetricCardContentGuide = ({ size }: { size: App.AppCardSize }) => {
  const code = `<AppMetricCard
  title="Monthly revenue"
  value={48210}
  change={8.4}
  size="${size}"
  prefix="$"
  changeSuffix="%"
/>`;

  return (
    <GuideSection
      title="Content"
      description="Use a metric card when the value itself is the main story and the label only supplies context."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={420}>
          <AppDevicePreviewFrame minHeight={220}>
            <AppMetricCard
              change={8.4}
              changeSuffix="%"
              prefix="$"
              size={size}
              title="Monthly revenue"
              value={48210}
            />
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppMetricCardContentGuide;
