import AppButton from '@/components/app/AppButton';
import AppPopover from '@/components/app/AppPopover';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

type AppPopoverPreviewControls = Pick<App.PopoverProps, 'side' | 'align'>;

const AppPopoverContentGuide = ({
  side = 'bottom',
  align = 'center',
}: AppPopoverPreviewControls) => {
  const exampleCode = `<AppPopover
  side="${side}"
  align="${align}"
  title="Workspace quick view"
  description="Stay close to the current flow."
  trigger={<AppButton label="Popover" variant="outline" color="neutral" />}
>
  Open the full screen for permissions and audit history.
</AppPopover>`;

  return (
    <GuideSection
      title="Content"
      description="Popover works well for quick details, secondary actions, and lightweight summaries around a trigger."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <AppDevicePreviewFrame
            minHeight={320}
            contentClasses="flex items-center justify-center"
          >
            <AppPopover
              side={side}
              align={align}
              title="Workspace quick view"
              description="Stay close to the current flow while keeping extra details one tap away."
              trigger={
                <AppButton
                  label="Popover"
                  variant="outline"
                  color="neutral"
                />
              }
            >
              Open the full screen for permissions, sharing rules, and audit
              history.
            </AppPopover>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppPopoverContentGuide;
