import AppMetricCard from '@/components/app/AppMetricCard';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppMetricCardTrendGuide = ({ size }: { size: App.AppCardSize }) => {
  const code = `<AppMetricCard title="Conversion" value={12.4} change={1.8} changeSuffix="%" trend="up" size="${size}" />
<AppMetricCard title="Churn" value={3.1} change={0.4} changeSuffix="%" trend="down" size="${size}" />
<AppMetricCard title="Stability" value={99.9} trend="neutral" size="${size}" />`;

  return (
    <GuideSection
      title="Trend"
      description="Pair the primary value with a direction cue when the change over time matters as much as the number itself."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={820}>
          <AppDevicePreviewFrame minHeight={540}>
            <div className="flex w-full flex-col gap-4">
              <AppMetricCard
                change={1.8}
                changeSuffix="%"
                size={size}
                title="Conversion"
                trend="up"
                value={12.4}
              />
              <AppMetricCard
                change={0.4}
                changeSuffix="%"
                size={size}
                title="Churn"
                trend="down"
                value={3.1}
              />
              <AppMetricCard size={size} title="Stability" trend="neutral" value={99.9} />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppMetricCardTrendGuide;
