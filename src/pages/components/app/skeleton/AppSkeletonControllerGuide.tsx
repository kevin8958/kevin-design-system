import AppFeedbackController from '@/pages/components/app/common/AppFeedbackController';

const variants = ['line', 'rect', 'circle'].map((value) => ({ value }));

const AppSkeletonControllerGuide = ({
  variant,
  onVariantChange,
}: {
  variant: App.AppSkeletonVariant;
  onVariantChange: (next: App.AppSkeletonVariant) => void;
}) => {
  return (
    <AppFeedbackController
      controls={[
        {
          label: 'Variant',
          value: variant,
          defaultValue: 'line',
          options: variants,
          onChange: (next) => onVariantChange(next as App.AppSkeletonVariant),
        },
      ]}
    />
  );
};

export default AppSkeletonControllerGuide;
