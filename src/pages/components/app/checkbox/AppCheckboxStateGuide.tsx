import AppCheckbox from '@/components/app/AppCheckbox';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppCheckboxStateGuide = () => {
  const code = `<AppCheckbox label="Receive weekly updates" />
<AppCheckbox label="Receive weekly updates" checked description="Summaries arrive every Friday morning." />
<AppCheckbox label="Receive weekly updates" invalid errorMsg="You must accept this setting to continue." />`;

  return (
    <GuideSection
      title="State"
      description="Model the unchecked, checked, and invalid states clearly so settings screens stay scannable."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={520}>
          <AppDevicePreviewFrame minHeight={300}>
            <div className="flex w-full flex-col gap-4">
              <AppCheckbox label="Receive weekly updates" />
              <AppCheckbox
                checked
                description="Summaries arrive every Friday morning."
                label="Receive weekly updates"
              />
              <AppCheckbox
                errorMsg="You must accept this setting to continue."
                invalid
                label="Receive weekly updates"
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppCheckboxStateGuide;
