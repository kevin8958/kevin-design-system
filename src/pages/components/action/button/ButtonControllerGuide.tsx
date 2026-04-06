import ButtonGroup from '@/components/action/ButtonGroup';
import Select from '@/components/input/Select';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';

const sizes: Action.ButtonSize[] = ['sm', 'md', 'lg'];
const variants: Action.ButtonVariant[] = ['contain', 'outline', 'clear'];
const colors: Action.ButtonColor[] = [
  'primary',
  'neutral',
  'info',
  'success',
  'warning',
  'danger',
];

type ButtonControllerProps = {
  size: Action.ButtonSize;
  variant: Action.ButtonVariant;
  color: Action.ButtonColor;
  onSizeChange: (next: Action.ButtonSize) => void;
  onVariantChange: (next: Action.ButtonVariant) => void;
  onColorChange: (next: Action.ButtonColor) => void;
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
      classes="uppercase font-mono opacity-60 md:w-[72px] md:shrink-0 md:pt-0.5"
    >
      {label}
    </Typography>
    <div className="hidden md:block">
      <ButtonGroup
        size="sm"
        items={options.map((option) => ({
          label: option,
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
          label: option.charAt(0).toUpperCase() + option.slice(1),
          value: option,
        }))}
        value={value}
        onChange={(next) => onChange(next as T)}
        placeholder={`Select ${label.toLowerCase()}`}
        classes="min-w-[180px]"
      />
    </div>
  </FlexWrapper>
);

const ButtonControllerGuide = ({
  size,
  variant,
  color,
  onSizeChange,
  onVariantChange,
  onColorChange,
}: ButtonControllerProps) => {
  return (
    <FlexWrapper direction="col" items="start" gap={5}>
      {renderControlRow('Size', sizes, size, onSizeChange)}
      {renderControlRow('Variant', variants, variant, onVariantChange)}
      {renderControlRow('Color', colors, color, onColorChange)}
    </FlexWrapper>
  );
};

export default ButtonControllerGuide;
