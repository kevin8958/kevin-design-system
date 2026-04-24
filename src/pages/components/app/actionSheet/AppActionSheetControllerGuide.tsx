import MobileController from '@/pages/components/mobile/shared/MobileController';

const sizes: App.AppActionSheetSize[] = ['sm', 'md', 'lg'];

type AppActionSheetControllerGuideProps = {
  size: App.AppActionSheetSize;
  onSizeChange: (next: App.AppActionSheetSize) => void;
};

const AppActionSheetControllerGuide = ({
  size,
  onSizeChange,
}: AppActionSheetControllerGuideProps) => {
  return (
    <MobileController
      controls={[
        {
          label: 'Size',
          value: size,
          defaultValue: 'sm',
          options: sizes,
          onChange: (next) => onSizeChange(next as App.AppActionSheetSize),
        },
      ]}
    />
  );
};

export default AppActionSheetControllerGuide;
