import ButtonGroup from '@/components/action/ButtonGroup';
import Select from '@/components/input/Select';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';

type FeedbackControlItem = {
  label: string;
  value: string;
  defaultValue: string;
  options: string[];
  onChange: (next: string) => void;
  selectMinWidth?: string;
};

type FeedbackControllerProps = {
  controls: FeedbackControlItem[];
};

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

const renderControlRow = ({
  label,
  value,
  defaultValue,
  options,
  onChange,
  selectMinWidth,
}: FeedbackControlItem) => (
  <FlexWrapper
    key={label}
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
          label: option === defaultValue ? `${option} *` : option,
          value: option,
        }))}
        value={value}
        onChange={onChange}
        itemClasses="capitalize"
      />
    </div>
    <div className="w-full md:hidden">
      <Select
        size="sm"
        options={options.map((option) => ({
          label:
            option === defaultValue
              ? `${capitalize(option)} *`
              : capitalize(option),
          value: option,
        }))}
        value={value}
        onChange={onChange}
        placeholder={`Select ${label.toLowerCase()}`}
        classes={selectMinWidth || 'min-w-[180px]'}
      />
    </div>
  </FlexWrapper>
);

const FeedbackController = ({ controls }: FeedbackControllerProps) => {
  return (
    <FlexWrapper direction="col" items="start" gap={5}>
      <Typography variant="C1">* : Default</Typography>
      {controls.map(renderControlRow)}
    </FlexWrapper>
  );
};

export default FeedbackController;
