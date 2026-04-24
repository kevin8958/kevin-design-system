import AppCombobox from '@/components/app/AppCombobox';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { appStatusOptions } from '@/pages/components/app/common/appInputSamples';

const AppComboboxContentGuide = ({ size = 'md' }: { size?: App.AppInputSize }) => {
  const code = `<AppCombobox label="Status" size="${size}" options={statusOptions} defaultOpen queryPlaceholder="Search status" />`;

  return (
    <GuideSection
      title="Content"
      description="Surface searchable option sets without forcing the user into a separate full-screen selection flow."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={760}>
          <AppDevicePreviewFrame minHeight={460}>
            <div className="flex w-full flex-col gap-4">
              <AppCombobox
                defaultOpen
                label="Status"
                options={appStatusOptions}
                queryPlaceholder="Search status"
                size={size}
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppComboboxContentGuide;
