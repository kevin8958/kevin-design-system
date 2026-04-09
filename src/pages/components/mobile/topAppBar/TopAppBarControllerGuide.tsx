import MobileController from '@/pages/components/mobile/shared/MobileController';

const aligns: Mobile.TopAppBarAlign[] = ['left', 'center'];

type TopAppBarControllerGuideProps = {
  align: Mobile.TopAppBarAlign;
  onAlignChange: (next: Mobile.TopAppBarAlign) => void;
};

const TopAppBarControllerGuide = ({
  align,
  onAlignChange,
}: TopAppBarControllerGuideProps) => {
  return (
    <MobileController
      controls={[
        {
          label: 'Align',
          value: align,
          defaultValue: 'left',
          options: aligns,
          onChange: (next) => onAlignChange(next as Mobile.TopAppBarAlign),
        },
      ]}
    />
  );
};

export default TopAppBarControllerGuide;
