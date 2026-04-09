import MobileController from '@/pages/components/mobile/shared/MobileController';

const sizes: Mobile.NavDrawerSize[] = ['sm', 'md'];

type MobileNavDrawerControllerGuideProps = {
  size: Mobile.NavDrawerSize;
  onSizeChange: (next: Mobile.NavDrawerSize) => void;
};

const MobileNavDrawerControllerGuide = ({
  size,
  onSizeChange,
}: MobileNavDrawerControllerGuideProps) => {
  return (
    <MobileController
      controls={[
        {
          label: 'Size',
          value: size,
          defaultValue: 'md',
          options: sizes,
          onChange: (next) => onSizeChange(next as Mobile.NavDrawerSize),
        },
      ]}
    />
  );
};

export default MobileNavDrawerControllerGuide;
