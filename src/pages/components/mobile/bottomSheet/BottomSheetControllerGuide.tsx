import MobileController from '@/pages/components/mobile/shared/MobileController';

const sizes: Mobile.BottomSheetSize[] = ['sm', 'md', 'lg', 'full'];

type BottomSheetControllerGuideProps = {
  size: Mobile.BottomSheetSize;
  onSizeChange: (next: Mobile.BottomSheetSize) => void;
};

const BottomSheetControllerGuide = ({
  size,
  onSizeChange,
}: BottomSheetControllerGuideProps) => {
  return (
    <MobileController
      controls={[
        {
          label: 'Size',
          value: size,
          defaultValue: 'md',
          options: sizes,
          onChange: (next) => onSizeChange(next as Mobile.BottomSheetSize),
        },
      ]}
    />
  );
};

export default BottomSheetControllerGuide;
