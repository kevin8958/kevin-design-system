import DataDisplayController from '@/pages/components/dataDisplay/shared/DataDisplayController';

const colors: Data.TooltipColor[] = [
  'neutral',
  'primary',
  'info',
  'success',
  'warning',
  'danger',
];

type TooltipControllerGuideProps = {
  color: Data.TooltipColor;
  onColorChange: (next: Data.TooltipColor) => void;
};

const TooltipControllerGuide = ({
  color,
  onColorChange,
}: TooltipControllerGuideProps) => {
  return (
    <DataDisplayController
      controls={[
        {
          label: 'Color',
          value: color,
          defaultValue: 'neutral',
          options: colors,
          onChange: (next) => onColorChange(next as Data.TooltipColor),
        },
      ]}
    />
  );
};

export default TooltipControllerGuide;
