import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import AppControllerRow from '@/pages/components/app/common/AppControllerRow';

const colors = ['neutral', 'primary', 'info', 'success', 'warning', 'danger'].map(
  (value) => ({ value: value as App.AppSemanticColor }),
);

const AppTooltipControllerGuide = ({
  color,
  onColorChange,
}: {
  color: App.AppSemanticColor;
  onColorChange: (next: App.AppSemanticColor) => void;
}) => (
  <FlexWrapper direction="col" gap={5} items="start">
    <Typography variant="C1">* : Default</Typography>
    <AppControllerRow
      defaultValue="neutral"
      label="Color"
      onChange={onColorChange}
      options={colors}
      value={color}
    />
  </FlexWrapper>
);

export default AppTooltipControllerGuide;
