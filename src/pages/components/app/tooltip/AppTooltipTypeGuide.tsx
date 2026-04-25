import AppButton from '@/components/app/AppButton';
import AppTooltip from '@/components/app/AppTooltip';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppTooltipTypeGuide = ({ color }: { color: App.AppSemanticColor }) => {
  const code = `<AppTooltip content="Helpful context for the current action." color="${color}" defaultOpen>
  <AppButton label="Tap target" variant="outline" />
</AppTooltip>`;

  return (
    <GuideSection
      title="Type"
      description="Use tooltips for short clarifications that support a control without creating a separate help screen."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={420}>
          <AppDevicePreviewFrame minHeight={220}>
            <div className="flex w-full items-center justify-center py-6">
              <AppTooltip color={color} content="Helpful context for the current action." defaultOpen>
                <AppButton label="Tap target" variant="outline" />
              </AppTooltip>
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppTooltipTypeGuide;
