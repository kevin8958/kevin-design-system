import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import AppControllerRow from '@/pages/components/app/common/AppControllerRow';

const sizes = ['sm', 'md', 'lg'].map((value) => ({ value: value as App.AppNavigationSize }));

const AppTabsControllerGuide = ({
  size,
  onSizeChange,
}: {
  size: App.AppNavigationSize;
  onSizeChange: (next: App.AppNavigationSize) => void;
}) => {
  return (
    <FlexWrapper direction="col" items="start" gap={5}>
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
};

export default AppTabsControllerGuide;
