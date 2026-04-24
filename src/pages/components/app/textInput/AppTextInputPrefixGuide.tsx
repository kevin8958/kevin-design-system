import AppTextInput from '@/components/app/AppTextInput';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppTextInputPrefixGuide = ({ size = 'md' }: { size?: App.AppInputSize }) => {
  const code = `<AppTextInput label="Budget" size="${size}" prefix="$" placeholder="0.00" />
<AppTextInput label="Search" size="${size}" prefix="⌕" placeholder="Search projects" />`;

  return (
    <GuideSection
      title="Prefix"
      description="Lead the field with compact context like currency, search, or lightweight identifiers."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]">
          <AppDevicePreviewFrame minHeight={220}>
            <div className="flex w-full flex-col gap-4">
              <AppTextInput label="Budget" placeholder="0.00" prefix="$" size={size} />
              <AppTextInput
                label="Search"
                placeholder="Search projects"
                prefix="⌕"
                size={size}
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppTextInputPrefixGuide;
