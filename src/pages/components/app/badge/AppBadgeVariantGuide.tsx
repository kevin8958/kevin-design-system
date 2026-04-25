import AppBadge from '@/components/app/AppBadge';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const variants: App.AppSemanticColor[] = [
  'neutral',
  'primary',
  'info',
  'success',
  'warning',
  'danger',
];

const AppBadgeVariantGuide = ({ size }: { size: App.AppLabelSize }) => {
  const code = variants
    .map((variant) => `<AppBadge label="${variant}" size="${size}" variant="${variant}" />`)
    .join('\n');

  return (
    <GuideSection
      title="Variant"
      description="Use semantic badge colors to reinforce status without relying on longer supporting copy."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={380}>
          <AppDevicePreviewFrame minHeight={180}>
            <div className="flex w-full flex-wrap items-center gap-3">
              {variants.map((variant) => (
                <AppBadge key={variant} label={variant} size={size} variant={variant} />
              ))}
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppBadgeVariantGuide;
