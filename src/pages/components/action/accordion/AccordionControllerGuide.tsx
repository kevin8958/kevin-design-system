import ButtonGroup from '@/components/action/ButtonGroup';
import Select from '@/components/input/Select';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';

const sizes: Action.ButtonSize[] = ['sm', 'md', 'lg'];
const types: Action.AccordionType[] = ['single', 'multiple'];

const defaultValues = {
  Size: 'md',
  Type: 'single',
} as const;

type AccordionControllerProps = {
  size: Action.ButtonSize;
  type: Action.AccordionType;
  onSizeChange: (next: Action.ButtonSize) => void;
  onTypeChange: (next: Action.AccordionType) => void;
};

const formatOptionLabel = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

const renderControlRow = <T extends string>(
  label: keyof typeof defaultValues,
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
        color="neutral"
        items={options.map((option) => ({
          label:
            option === defaultValues[label] ? `${formatOptionLabel(option)} *` : formatOptionLabel(option),
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
            option === defaultValues[label] ? `${formatOptionLabel(option)} *` : formatOptionLabel(option),
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

const AccordionControllerGuide = ({
  size,
  type,
  onSizeChange,
  onTypeChange,
}: AccordionControllerProps) => {
  return (
    <FlexWrapper direction="col" items="start" gap={5}>
      <Typography variant="C1">* : Default</Typography>
      {renderControlRow('Size', sizes, size, onSizeChange)}
      {renderControlRow('Type', types, type, onTypeChange)}
    </FlexWrapper>
  );
};

export default AccordionControllerGuide;
