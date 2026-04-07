import DataDisplayController from '@/pages/components/dataDisplay/shared/DataDisplayController';

const sizes: Data.TagSize[] = ['sm', 'md', 'lg'];

type TagControllerGuideProps = {
  size: Data.TagSize;
  onSizeChange: (next: Data.TagSize) => void;
};

const TagControllerGuide = ({
  size,
  onSizeChange,
}: TagControllerGuideProps) => {
  return (
    <DataDisplayController
      controls={[
        {
          label: 'Size',
          value: size,
          defaultValue: 'md',
          options: sizes,
          onChange: (next) => onSizeChange(next as Data.TagSize),
        },
      ]}
    />
  );
};

export default TagControllerGuide;
