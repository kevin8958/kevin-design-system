import DataDisplayController from '@/pages/components/dataDisplay/shared/DataDisplayController';

const sizes: Data.BadgeSize[] = ['sm', 'md', 'lg'];

type BadgeControllerGuideProps = {
  size: Data.BadgeSize;
  onSizeChange: (next: Data.BadgeSize) => void;
};

const BadgeControllerGuide = ({
  size,
  onSizeChange,
}: BadgeControllerGuideProps) => {
  return (
    <DataDisplayController
      controls={[
        {
          label: 'Size',
          value: size,
          defaultValue: 'md',
          options: sizes,
          onChange: (next) => onSizeChange(next as Data.BadgeSize),
        },
      ]}
    />
  );
};

export default BadgeControllerGuide;
