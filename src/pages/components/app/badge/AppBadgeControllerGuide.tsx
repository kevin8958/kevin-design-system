import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import AppControllerRow from '@/pages/components/app/common/AppControllerRow';

const sizes = ['sm', 'md', 'lg'].map((value) => ({
  value: value as App.AppLabelSize,
}));

const AppBadgeControllerGuide = ({
  size,
  onSizeChange,
}: {
  size: App.AppLabelSize;
  onSizeChange: (next: App.AppLabelSize) => void;
}) => (
  <FlexWrapper direction="col" gap={5} items="start">
    <Typography variant="C1">* : Default</Typography>
    <AppControllerRow
      defaultValue="md"
      label="Size"
      onChange={onSizeChange}
      options={sizes}
      value={size}
    />
  </FlexWrapper>
);

export default AppBadgeControllerGuide;
