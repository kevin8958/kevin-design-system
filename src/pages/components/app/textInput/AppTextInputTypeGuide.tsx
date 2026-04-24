import AppTextInput from '@/components/app/AppTextInput';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppTextInputTypeGuide = ({ size = 'md' }: { size?: App.AppInputSize }) => {
  const code = `<AppTextInput label="Email" size="${size}" type="email" placeholder="name@company.com" />
<AppTextInput label="Password" size="${size}" type="password" placeholder="Enter password" />
<AppTextInput label="Quantity" size="${size}" type="number" placeholder="0" />`;

  return (
    <GuideSection
      title="Type"
      description="Map each field to the right keyboard and masking behavior so mobile entry feels intentional."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={560}>
          <AppDevicePreviewFrame minHeight={320}>
            <div className="flex w-full flex-col gap-4">
              <AppTextInput
                label="Email"
                placeholder="name@company.com"
                size={size}
                type="email"
              />
              <AppTextInput
                label="Password"
                placeholder="Enter password"
                size={size}
                type="password"
              />
              <AppTextInput
                label="Quantity"
                placeholder="0"
                size={size}
                type="number"
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppTextInputTypeGuide;
