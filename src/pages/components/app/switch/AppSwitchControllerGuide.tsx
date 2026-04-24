import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import AppControllerRow from '@/pages/components/app/common/AppControllerRow';

const options = ['sm', 'md', 'lg'].map((value) => ({ value: value as App.AppInputSize }));

const AppSwitchControllerGuide = ({
  size,
  onSizeChange,
}: {
  size: App.AppInputSize;
  onSizeChange: (next: App.AppInputSize) => void;
}) => {
  return (
    <FlexWrapper direction="col" items="start" gap={5}>
      <Typography variant="C1">* : Default</Typography>
      <AppControllerRow
        defaultValue="md"
        label="Size"
        onChange={onSizeChange}
        options={options}
        value={size}
      />
    </FlexWrapper>
  );
};

export default AppSwitchControllerGuide;
