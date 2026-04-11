import ButtonGroup from '@/components/action/ButtonGroup';
import Select from '@/components/input/Select';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';

const sizes: Navigation.StepperSize[] = ['sm', 'md', 'lg'];
const orientations: Navigation.StepperOrientation[] = [
  'horizontal',
  'vertical',
];

const defaultValues = {
  Size: 'md',
  Orientation: 'horizontal',
} as const;

type StepperControllerGuideProps = {
  size: Navigation.StepperSize;
  orientation: Navigation.StepperOrientation;
  onSizeChange: (next: Navigation.StepperSize) => void;
  onOrientationChange: (next: Navigation.StepperOrientation) => void;
};

const renderControlRow = <T extends string>(
  label: string,
  options: T[],
  value: T,
  onChange: (next: T) => void,
) => (
  <FlexWrapper
    items="start"
    gap={3}
    classes="w-full flex-col md:flex-row md:items-center"
  >
    <Typography
      variant="C1"
      classes="uppercase font-mono opacity-60 md:w-[88px] md:shrink-0 md:pt-0.5"
    >
      {label}
    </Typography>
    <div className="hidden md:block">
      <ButtonGroup
        size="sm"
        color="neutral"
        items={options.map((option) => ({
          label:
            option === defaultValues[label as keyof typeof defaultValues]
              ? `${option} *`
              : option,
          value: option,
        }))}
        value={value}
        onChange={(next) => onChange(next as T)}
        itemClasses="capitalize"
      />
    </div>
    <div className="w-full md:hidden">
      <Select
        size="sm"
        options={options.map((option) => ({
          label:
            option === defaultValues[label as keyof typeof defaultValues]
              ? `${option.charAt(0).toUpperCase() + option.slice(1)} *`
              : option.charAt(0).toUpperCase() + option.slice(1),
          value: option,
        }))}
        value={value}
        onChange={(next) => onChange(next as T)}
        placeholder={`Select ${label.toLowerCase()}`}
        classes={label === 'Orientation' ? 'min-w-[220px]' : 'min-w-[180px]'}
      />
    </div>
  </FlexWrapper>
);

const StepperControllerGuide = ({
  size,
  orientation,
  onSizeChange,
  onOrientationChange,
}: StepperControllerGuideProps) => {
  return (
    <FlexWrapper direction="col" items="start" gap={5}>
      <Typography variant="C1">* : Default</Typography>
      {renderControlRow('Size', sizes, size, onSizeChange)}
      {renderControlRow(
        'Orientation',
        orientations,
        orientation,
        onOrientationChange,
      )}
    </FlexWrapper>
  );
};

export default StepperControllerGuide;
