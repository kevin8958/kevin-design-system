import AppFeedbackController from '@/pages/components/app/common/AppFeedbackController';

const variants = ['info', 'success', 'warning', 'danger'].map((value) => ({
  value,
}));
const placements = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
].map((value) => ({ value }));

const AppToastControllerGuide = ({
  variant,
  placement,
  onVariantChange,
  onPlacementChange,
}: {
  variant: App.AppFeedbackVariant;
  placement: App.AppToastPlacement;
  onVariantChange: (next: App.AppFeedbackVariant) => void;
  onPlacementChange: (next: App.AppToastPlacement) => void;
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
        {
          label: 'Placement',
          value: placement,
          defaultValue: 'top-right',
          options: placements,
          onChange: (next) => onPlacementChange(next as App.AppToastPlacement),
        },
      ]}
    />
  );
};

export default AppToastControllerGuide;
