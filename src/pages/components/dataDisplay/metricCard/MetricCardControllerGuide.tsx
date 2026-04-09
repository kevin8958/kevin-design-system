import DataDisplayController from '@/pages/components/dataDisplay/shared/DataDisplayController';

const sizes: Data.MetricCardSize[] = ['sm', 'md', 'lg'];

type MetricCardControllerGuideProps = {
  size: Data.MetricCardSize;
  onSizeChange: (next: Data.MetricCardSize) => void;
};

const MetricCardControllerGuide = ({
  size,
  onSizeChange,
}: MetricCardControllerGuideProps) => {
  return (
    <DataDisplayController
      controls={[
        {
          label: 'Size',
          value: size,
          defaultValue: 'md',
          options: sizes,
          onChange: (next) => onSizeChange(next as Data.MetricCardSize),
        },
      ]}
    />
  );
};

export default MetricCardControllerGuide;
