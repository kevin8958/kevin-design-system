import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import AppControllerRow from '@/pages/components/app/common/AppControllerRow';

type AppFeedbackControl = {
  label: string;
  value: string;
  defaultValue?: string;
  options: { label?: string; value: string }[];
  onChange: (next: string) => void;
};

const AppFeedbackController = ({
  controls,
}: {
  controls: AppFeedbackControl[];
}) => {
  return (
    <FlexWrapper direction="col" gap={5} items="start">
      <Typography variant="C1">* : Default</Typography>
      {controls.map((control) => (
        <AppControllerRow
          key={control.label}
          defaultValue={control.defaultValue}
          label={control.label}
          onChange={control.onChange}
          options={control.options}
          value={control.value}
        />
      ))}
    </FlexWrapper>
  );
};

export default AppFeedbackController;
