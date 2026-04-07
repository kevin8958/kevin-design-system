import FeedbackController from '@/pages/components/feedback/shared/FeedbackController';

const variants: Feedback.AlertVariant[] = ['info', 'success', 'warning', 'danger'];

type AlertControllerGuideProps = {
  variant: Feedback.AlertVariant;
  onVariantChange: (next: Feedback.AlertVariant) => void;
};

const AlertControllerGuide = ({
  variant,
  onVariantChange,
}: AlertControllerGuideProps) => {
  return (
    <FeedbackController
      controls={[
        {
          label: 'Variant',
          value: variant,
          defaultValue: 'info',
          options: variants,
          onChange: (next) => onVariantChange(next as Feedback.AlertVariant),
        },
      ]}
    />
  );
};

export default AlertControllerGuide;
