import AppFeedbackController from '@/pages/components/app/common/AppFeedbackController';

const variants = ['info', 'success', 'warning', 'danger'].map((value) => ({
  value,
}));

const AppAlertControllerGuide = ({
  variant,
  onVariantChange,
}: {
  variant: App.AppFeedbackVariant;
  onVariantChange: (next: App.AppFeedbackVariant) => void;
}) => {
  return (
    <AppFeedbackController
      controls={[
        {
          label: 'Variant',
          value: variant,
          defaultValue: 'info',
          options: variants,
          onChange: (next) => onVariantChange(next as App.AppFeedbackVariant),
        },
      ]}
    />
  );
};

export default AppAlertControllerGuide;
