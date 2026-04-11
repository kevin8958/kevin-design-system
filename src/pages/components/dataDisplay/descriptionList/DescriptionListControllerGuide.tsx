import DataDisplayController from '@/pages/components/dataDisplay/shared/DataDisplayController';

const sizes: Data.DescriptionListSize[] = ['sm', 'md', 'lg'];
const columnOptions = ['1', '2'];

type DescriptionListControllerGuideProps = {
  size: Data.DescriptionListSize;
  columns: Data.DescriptionListColumns;
  onSizeChange: (next: Data.DescriptionListSize) => void;
  onColumnsChange: (next: Data.DescriptionListColumns) => void;
};

const DescriptionListControllerGuide = ({
  size,
  columns,
  onSizeChange,
  onColumnsChange,
}: DescriptionListControllerGuideProps) => {
  return (
    <DataDisplayController
      controls={[
        {
          label: 'Size',
          value: size,
          defaultValue: 'md',
          options: sizes,
          onChange: (next) => onSizeChange(next as Data.DescriptionListSize),
        },
        {
          label: 'Columns',
          value: String(columns),
          defaultValue: '1',
          options: columnOptions,
          onChange: (next) =>
            onColumnsChange(Number(next) as Data.DescriptionListColumns),
        },
      ]}
    />
  );
};

export default DescriptionListControllerGuide;
