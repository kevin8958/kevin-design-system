import AppFeedbackController from '@/pages/components/app/common/AppFeedbackController';

const sizes = ['sm', 'md', 'lg'].map((value) => ({ value }));

const AppProgressControllerGuide = ({
  size,
  onSizeChange,
}: {
  size: App.AppProgressSize;
  onSizeChange: (next: App.AppProgressSize) => void;
}) => {
  return (
    <AppFeedbackController
      controls={[
        {
          label: 'Size',
          value: size,
          defaultValue: 'md',
          options: sizes,
          onChange: (next) => onSizeChange(next as App.AppProgressSize),
        },
      ]}
    />
  );
};

export default AppProgressControllerGuide;
