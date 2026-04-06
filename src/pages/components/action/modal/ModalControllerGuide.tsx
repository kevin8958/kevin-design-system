import ButtonGroup from '@/components/action/ButtonGroup';
import Select from '@/components/input/Select';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';

const sizes: Action.ModalSize[] = ['sm', 'md', 'lg', 'xl', '2xl', 'full'];
const states: Action.ModalState[] = ['default', 'info', 'success', 'warning', 'danger'];
const positions: Action.ModalPosition[] = ['top', 'center', 'bottom'];

const defaultValues = {
  Size: 'md',
  State: 'default',
  Position: 'center',
} as const;

type ModalControllerProps = {
  maxWidth: Action.ModalSize;
  state: Action.ModalState;
  position: Action.ModalPosition;
  onSizeChange: (next: Action.ModalSize) => void;
  onStateChange: (next: Action.ModalState) => void;
  onPositionChange: (next: Action.ModalPosition) => void;
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

const ModalControllerGuide = ({
  maxWidth,
  state,
  position,
  onSizeChange,
  onStateChange,
  onPositionChange,
}: ModalControllerProps) => {
  return (
    <FlexWrapper direction="col" items="start" gap={5}>
      <Typography variant="C1">* : Default</Typography>
      {renderControlRow('Size', sizes, maxWidth, onSizeChange)}
      {renderControlRow('State', states, state, onStateChange)}
      {renderControlRow('Position', positions, position, onPositionChange)}
    </FlexWrapper>
  );
};

export default ModalControllerGuide;
