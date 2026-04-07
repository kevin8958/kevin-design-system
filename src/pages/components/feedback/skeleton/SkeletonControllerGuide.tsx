import FeedbackController from '@/pages/components/feedback/shared/FeedbackController';

const variants: Feedback.SkeletonVariant[] = ['line', 'rect', 'circle'];

type SkeletonControllerGuideProps = {
  variant: Feedback.SkeletonVariant;
  onVariantChange: (next: Feedback.SkeletonVariant) => void;
};

const SkeletonControllerGuide = ({
  variant,
  onVariantChange,
}: SkeletonControllerGuideProps) => {
  return (
    <FeedbackController
      controls={[
        {
          label: 'Variant',
          value: variant,
          defaultValue: 'line',
          options: variants,
          onChange: (next) => onVariantChange(next as Feedback.SkeletonVariant),
        },
      ]}
    />
  );
};

export default SkeletonControllerGuide;
