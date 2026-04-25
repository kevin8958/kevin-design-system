import AppDescriptionList from '@/components/app/AppDescriptionList';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { appDescriptionItems } from '@/pages/components/app/common/appDataDisplaySamples';

const AppDescriptionListContentGuide = ({
  size,
  columns,
}: {
  size: App.AppCardSize;
  columns: App.AppDescriptionListColumns;
}) => {
  const code = `<AppDescriptionList
  items={items}
  size="${size}"
  columns={${columns}}
/>`;

  return (
    <GuideSection
      title="Content"
      description="Use description lists for compact entity summaries where labels and values need equal emphasis."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={620}>
          <AppDevicePreviewFrame minHeight={columns === 2 ? 360 : 420}>
            <AppDescriptionList columns={columns} items={appDescriptionItems} size={size} />
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppDescriptionListContentGuide;
