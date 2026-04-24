import FlexWrapper from '@/components/layout/FlexWrapper';
import AppButton from '@/components/app/AppButton';
import AppPopover from '@/components/app/AppPopover';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

type AppPopoverPreviewControls = Pick<App.PopoverProps, 'side' | 'align'>;

const AppPopoverStateGuide = ({
  side = 'bottom',
  align = 'center',
}: AppPopoverPreviewControls) => {
  const exampleCode = `<AppPopover
  side="${side}"
  align="${align}"
  showArrow={false}
  trigger={<AppButton label="No Arrow" variant="outline" color="neutral" />}
>
  Arrowless surface
</AppPopover>

<AppPopover
  disabled
  trigger={<AppButton label="Disabled" variant="outline" color="neutral" />}
>
  Disabled trigger
</AppPopover>`;

  return (
    <GuideSection
      title="State"
      description="Use the arrow when anchoring context matters, or disable the trigger entirely when supplemental details are unavailable."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <AppDevicePreviewFrame
            minHeight={320}
            contentClasses="flex items-center justify-center"
          >
            <FlexWrapper direction="col" items="center" gap={4}>
              <AppPopover
                side={side}
                align={align}
                showArrow={false}
                title="Arrowless"
                description="Useful when the popover is visually grouped with the trigger."
                trigger={
                  <AppButton
                    label="No Arrow"
                    variant="outline"
                    color="neutral"
                  />
                }
              >
                Keep the surface clean when the trigger and card already feel connected.
              </AppPopover>

              <AppPopover
                disabled
                title="Disabled"
                trigger={
                  <AppButton
                    label="Disabled"
                    variant="outline"
                    color="neutral"
                  />
                }
              >
                This should not open.
              </AppPopover>
            </FlexWrapper>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppPopoverStateGuide;
