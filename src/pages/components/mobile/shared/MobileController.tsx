import ButtonGroup from '@/components/action/ButtonGroup';
import Typography from '@/components/foundation/Typography';
import Select from '@/components/input/Select';
import FlexWrapper from '@/components/layout/FlexWrapper';

type MobileControlItem = {
  label: string;
  value: string;
  defaultValue: string;
  options: string[];
  onChange: (next: string) => void;
  selectMinWidth?: string;
};

type MobileControllerProps = {
  controls: MobileControlItem[];
};

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

const MobileController = ({ controls }: MobileControllerProps) => {
  return (
    <FlexWrapper direction="col" items="start" gap={5}>
      <Typography variant="C1">* : Default</Typography>
      {controls.map(({ label, value, defaultValue, options, onChange, selectMinWidth }) => (
        <FlexWrapper
          key={label}
          items="start"
          gap={3}
          classes="w-full flex-col md:flex-row md:items-center"
        >
          <Typography
            variant="C1"
            classes="uppercase font-mono opacity-60 md:w-[92px] md:shrink-0 md:pt-0.5"
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
      ))}
    </FlexWrapper>
  );
};

export default MobileController;
