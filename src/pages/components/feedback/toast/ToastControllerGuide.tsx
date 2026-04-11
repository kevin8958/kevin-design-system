import FeedbackController from '@/pages/components/feedback/shared/FeedbackController';

const variants: Feedback.ToastVariant[] = ['info', 'success', 'warning', 'danger'];
const placements: Feedback.ToastPlacement[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

type ToastControllerGuideProps = {
  variant: Feedback.ToastVariant;
  placement: Feedback.ToastPlacement;
  onVariantChange: (next: Feedback.ToastVariant) => void;
  onPlacementChange: (next: Feedback.ToastPlacement) => void;
};

const ToastControllerGuide = ({
  variant,
  placement,
  onVariantChange,
  onPlacementChange,
}: ToastControllerGuideProps) => {
  return (
    <FeedbackController
      controls={[
        {
          label: 'Variant',
          value: variant,
          defaultValue: 'info',
          options: variants,
          onChange: (next) => onVariantChange(next as Feedback.ToastVariant),
        },
        {
          label: 'Placement',
          value: placement,
          defaultValue: 'top-right',
          options: placements,
          onChange: (next) => onPlacementChange(next as Feedback.ToastPlacement),
        },
      ]}
    />
  );
};

export default ToastControllerGuide;
