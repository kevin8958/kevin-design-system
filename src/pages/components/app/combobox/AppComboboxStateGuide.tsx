import AppCombobox from '@/components/app/AppCombobox';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { appStatusOptions } from '@/pages/components/app/common/appInputSamples';

const AppComboboxStateGuide = ({ size = 'md' }: { size?: App.AppInputSize }) => {
  const code = `<AppCombobox label="Status" size="${size}" options={statusOptions} placeholder="Pick a status" />
<AppCombobox label="Status" size="${size}" options={statusOptions} value="published" />
<AppCombobox label="Status" size="${size}" options={statusOptions} invalid errorMsg="Please choose a status." />`;

  return (
    <GuideSection
      title="State"
      description="Keep empty, selected, and invalid combobox states aligned with the rest of the input family."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={720}>
          <AppDevicePreviewFrame minHeight={420}>
            <div className="flex w-full flex-col gap-4">
              <AppCombobox
                label="Status"
                options={appStatusOptions}
                placeholder="Pick a status"
                size={size}
              />
              <AppCombobox label="Status" options={appStatusOptions} size={size} value="published" />
              <AppCombobox
                errorMsg="Please choose a status."
                invalid
                label="Status"
                options={appStatusOptions}
                size={size}
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppComboboxStateGuide;
