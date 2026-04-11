import DataDisplayController from '@/pages/components/dataDisplay/shared/DataDisplayController';

const sizes: Data.EmptyStateSize[] = ['sm', 'md', 'lg'];

type EmptyStateControllerGuideProps = {
  size: Data.EmptyStateSize;
  onSizeChange: (next: Data.EmptyStateSize) => void;
};

const EmptyStateControllerGuide = ({
  size,
  onSizeChange,
}: EmptyStateControllerGuideProps) => {
  return (
    <DataDisplayController
      controls={[
        {
          label: 'Size',
          value: size,
          defaultValue: 'md',
          options: sizes,
          onChange: (next) => onSizeChange(next as Data.EmptyStateSize),
        },
      ]}
    />
  );
};

export default EmptyStateControllerGuide;
