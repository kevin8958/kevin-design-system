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

const AppSkeletonTypeGuide = ({
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
/>`;

  return (
    <GuideSection
      title="Type"
      description="Match the placeholder shape to the content that is still loading so the layout feels predictable."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={300}>
          <AppDevicePreviewFrame minHeight={160}>
            <div className="flex w-full flex-col items-center gap-3 py-4">
              <AppSkeleton
                height={shapeProps.height}
                variant={variant}
                width={shapeProps.width}
              />
              <Typography variant="C1">Base Placeholder</Typography>
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppSkeletonTypeGuide;
