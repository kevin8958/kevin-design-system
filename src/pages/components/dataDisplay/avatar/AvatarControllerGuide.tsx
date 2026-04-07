import DataDisplayController from '@/pages/components/dataDisplay/shared/DataDisplayController';

const sizes: Data.AvatarSize[] = ['sm', 'md', 'lg'];

type AvatarControllerGuideProps = {
  size: Data.AvatarSize;
  onSizeChange: (next: Data.AvatarSize) => void;
};

const AvatarControllerGuide = ({
  size,
  onSizeChange,
}: AvatarControllerGuideProps) => {
  return (
    <DataDisplayController
      controls={[
        {
          label: 'Size',
          value: size,
          defaultValue: 'md',
          options: sizes,
          onChange: (next) => onSizeChange(next as Data.AvatarSize),
        },
      ]}
    />
  );
};

export default AvatarControllerGuide;
