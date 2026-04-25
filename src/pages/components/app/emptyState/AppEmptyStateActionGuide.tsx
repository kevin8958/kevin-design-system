import AppButton from '@/components/app/AppButton';
import AppEmptyState from '@/components/app/AppEmptyState';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppEmptyStateActionGuide = ({ size }: { size: App.AppCardSize }) => {
  const code = `<AppEmptyState
  title="No projects yet"
  description="Create your first project to start inviting teammates."
  size="${size}"
  primaryAction={<AppButton label="Create project" />}
  secondaryAction={<AppButton label="Learn more" variant="outline" />}
/>`;

  return (
    <GuideSection
      title="Action"
      description="Provide a clear recovery path so empty moments immediately suggest the next step."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={760}>
          <AppDevicePreviewFrame minHeight={460}>
            <AppEmptyState
              description="Create your first project to start inviting teammates."
              primaryAction={<AppButton label="Create project" />}
              secondaryAction={<AppButton label="Learn more" variant="outline" />}
              size={size}
              title="No projects yet"
            />
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppEmptyStateActionGuide;
