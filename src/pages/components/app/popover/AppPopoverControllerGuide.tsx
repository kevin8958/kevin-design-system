import ButtonGroup from '@/components/action/ButtonGroup';
import Select from '@/components/input/Select';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';

const sides: App.AppPopoverSide[] = ['top', 'right', 'bottom', 'left'];
const aligns: App.AppPopoverAlign[] = ['start', 'center', 'end'];

const defaultValues = {
  Side: 'bottom',
  Align: 'center',
} as const;

type AppPopoverControllerGuideProps = {
  side: App.AppPopoverSide;
  align: App.AppPopoverAlign;
  onSideChange: (next: App.AppPopoverSide) => void;
  onAlignChange: (next: App.AppPopoverAlign) => void;
};

const formatOptionLabel = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

const renderControlRow = <T extends string>(
  label: keyof typeof defaultValues,
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
            option === defaultValues[label]
              ? `${formatOptionLabel(option)} *`
              : formatOptionLabel(option),
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
            option === defaultValues[label]
              ? `${formatOptionLabel(option)} *`
              : formatOptionLabel(option),
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

const AppPopoverControllerGuide = ({
  side,
  align,
  onSideChange,
  onAlignChange,
}: AppPopoverControllerGuideProps) => {
  return (
    <FlexWrapper direction="col" items="start" gap={5}>
      <Typography variant="C1">* : Default</Typography>
      {renderControlRow('Side', sides, side, onSideChange)}
      {renderControlRow('Align', aligns, align, onAlignChange)}
    </FlexWrapper>
  );
};

export default AppPopoverControllerGuide;
