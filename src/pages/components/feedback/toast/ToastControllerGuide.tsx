import FeedbackController from '@/pages/components/feedback/shared/FeedbackController';

const variants: Feedback.ToastVariant[] = ['info', 'success', 'warning', 'danger'];

type ToastControllerGuideProps = {
  variant: Feedback.ToastVariant;
  onVariantChange: (next: Feedback.ToastVariant) => void;
};

const ToastControllerGuide = ({
  variant,
  onVariantChange,
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
      ]}
    />
  );
};

export default ToastControllerGuide;
