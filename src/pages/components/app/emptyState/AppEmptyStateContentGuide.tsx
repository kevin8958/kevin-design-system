import AppEmptyState from '@/components/app/AppEmptyState';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppEmptyStateContentGuide = ({ size }: { size: App.AppCardSize }) => {
  const code = `<AppEmptyState
  title="Nothing scheduled today"
  description="When tasks appear, they will show up here with quick actions."
  size="${size}"
/>`;

  return (
    <GuideSection
      title="Content"
      description="Lead with a clear explanation of what is empty before adding optional actions or illustration."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={620}>
          <AppDevicePreviewFrame minHeight={360}>
            <AppEmptyState
              description="When tasks appear, they will show up here with quick actions."
              size={size}
              title="Nothing scheduled today"
            />
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppEmptyStateContentGuide;
