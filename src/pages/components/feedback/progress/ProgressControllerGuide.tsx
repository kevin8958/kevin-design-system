import FeedbackController from '@/pages/components/feedback/shared/FeedbackController';

const sizes: Feedback.ProgressSize[] = ['sm', 'md', 'lg'];

type ProgressControllerGuideProps = {
  size: Feedback.ProgressSize;
  onSizeChange: (next: Feedback.ProgressSize) => void;
};

const ProgressControllerGuide = ({
  size,
  onSizeChange,
}: ProgressControllerGuideProps) => {
  return (
    <FeedbackController
      controls={[
        {
          label: 'Size',
          value: size,
          defaultValue: 'md',
          options: sizes,
          onChange: (next) => onSizeChange(next as Feedback.ProgressSize),
        },
      ]}
    />
  );
};

export default ProgressControllerGuide;
