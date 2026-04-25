import AppButton from '@/components/app/AppButton';
import AppTooltip from '@/components/app/AppTooltip';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const positions: App.AppTooltipPosition[] = ['top', 'right', 'bottom', 'left'];

const AppTooltipPositionGuide = ({ color }: { color: App.AppSemanticColor }) => {
  const code = positions
    .map(
      (position) => `<AppTooltip content="${position} tooltip" position="${position}" color="${color}" defaultOpen>
  <AppButton label="${position}" variant="outline" />
</AppTooltip>`,
    )
    .join('\n\n');

  return (
    <GuideSection
      title="Position"
      description="Preview different placements so supporting text avoids clipping against nearby UI."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={960}>
          <AppDevicePreviewFrame minHeight={680}>
            <div className="grid w-full grid-cols-2 gap-8 py-6">
              {positions.map((position) => (
                <div key={position} className="flex min-h-[120px] flex-col items-center justify-center gap-3">
                  <Typography variant="C1">{position}</Typography>
                  <AppTooltip color={color} content={`${position} tooltip`} defaultOpen position={position}>
                    <AppButton label={position} variant="outline" />
                  </AppTooltip>
                </div>
              ))}
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppTooltipPositionGuide;
