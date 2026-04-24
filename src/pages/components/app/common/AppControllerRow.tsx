import ButtonGroup from '@/components/action/ButtonGroup';
import Typography from '@/components/foundation/Typography';
import Select from '@/components/input/Select';
import FlexWrapper from '@/components/layout/FlexWrapper';

type AppControllerOption<T extends string> = {
  label?: string;
  value: T;
};

type AppControllerRowProps<T extends string> = {
  label: string;
  options: AppControllerOption<T>[];
  value: T;
  defaultValue?: T;
  onChange: (next: T) => void;
};

const AppControllerRow = <T extends string>({
  label,
  options,
  value,
  defaultValue,
  onChange,
}: AppControllerRowProps<T>) => {
  const selectOptions = options.map((option) => {
    const resolvedLabel = option.label ?? option.value;

    return {
      label:
        defaultValue && option.value === defaultValue
          ? `${resolvedLabel} *`
          : resolvedLabel,
      value: option.value,
    };
  });

  return (
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
          color="neutral"
          items={selectOptions}
          onChange={(next) => onChange(next as T)}
          size="sm"
          value={value}
          itemClasses="capitalize"
        />
      </div>
      <div className="w-full md:hidden">
        <Select
          classes="min-w-[180px]"
          onChange={(next) => onChange(next as T)}
          options={selectOptions.map((option) => ({
            ...option,
            label:
              option.label.charAt(0).toUpperCase() + option.label.slice(1),
          }))}
          placeholder={`Select ${label.toLowerCase()}`}
          size="sm"
          value={value}
        />
      </div>
    </FlexWrapper>
  );
};

export default AppControllerRow;
