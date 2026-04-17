import ButtonGroup from '@/components/action/ButtonGroup';
import Typography from '@/components/foundation/Typography';
import Select from '@/components/input/Select';
import FlexWrapper from '@/components/layout/FlexWrapper';

const sizes: App.AppButtonSize[] = ['sm', 'md', 'lg'];
const variants: App.AppButtonVariant[] = ['contain', 'outline', 'clear'];

const defaultValues = {
  Size: 'md',
  Variant: 'contain',
} as const;

type AppDropdownControllerGuideProps = {
  size: App.AppButtonSize;
  buttonVariant: App.AppButtonVariant;
  onSizeChange: (next: App.AppButtonSize) => void;
  onVariantChange: (next: App.AppButtonVariant) => void;
};

const renderControlRow = <T extends string>(
  label: string,
  options: readonly T[],
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
        classes="min-w-[180px]"
      />
    </div>
  </FlexWrapper>
);

const AppDropdownControllerGuide = ({
  size,
  buttonVariant,
  onSizeChange,
  onVariantChange,
}: AppDropdownControllerGuideProps) => {
  return (
    <FlexWrapper direction="col" items="start" gap={5}>
      <Typography variant="C1">* : Default</Typography>
      {renderControlRow('Size', sizes, size, onSizeChange)}
      {renderControlRow('Variant', variants, buttonVariant, onVariantChange)}
    </FlexWrapper>
  );
};

export default AppDropdownControllerGuide;
