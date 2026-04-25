import AppSkeleton from '@/components/app/AppSkeleton';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const skeletonPropsByVariant = {
  line: { width: 220, height: 16 },
  rect: { width: '100%', height: 96 },
  circle: { width: 56, height: 56 },
} satisfies Record<
  App.AppSkeletonVariant,
  { width: number | string; height: number | string }
>;

const AppSkeletonStateGuide = ({
  variant,
}: {
  variant: App.AppSkeletonVariant;
}) => {
  const shapeProps = skeletonPropsByVariant[variant];
  const widthCode =
    typeof shapeProps.width === 'number' ? shapeProps.width : `"${shapeProps.width}"`;
  const heightCode =
    typeof shapeProps.height === 'number'
      ? shapeProps.height
      : `"${shapeProps.height}"`;
  const code = `<AppSkeleton
  variant="${variant}"
  width={${widthCode}}
  height={${heightCode}}
/>
<AppSkeleton
  variant="${variant}"
  width={${widthCode}}
  height={${heightCode}}
  animated={false}
/>`;

  return (
    <GuideSection
      title="State"
      description="Use animated placeholders while content is actively loading, and turn animation off for calmer snapshots or reduced-motion contexts."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={320}>
          <AppDevicePreviewFrame minHeight={180}>
            <div className="flex w-full flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Typography variant="C1">Animated</Typography>
                <AppSkeleton
                  height={shapeProps.height}
                  variant={variant}
                  width={shapeProps.width}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="C1">Static</Typography>
                <AppSkeleton
                  animated={false}
                  height={shapeProps.height}
                  variant={variant}
                  width={shapeProps.width}
                />
              </div>
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppSkeletonStateGuide;
