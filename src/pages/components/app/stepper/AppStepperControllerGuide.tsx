import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import AppControllerRow from '@/pages/components/app/common/AppControllerRow';

const sizes = ['sm', 'md', 'lg'].map((value) => ({ value: value as App.AppNavigationSize }));
const orientations = ['horizontal', 'vertical'].map((value) => ({
  value: value as App.AppStepperOrientation,
}));

const AppStepperControllerGuide = ({
  size,
  orientation,
  onSizeChange,
  onOrientationChange,
}: {
  size: App.AppNavigationSize;
  orientation: App.AppStepperOrientation;
  onSizeChange: (next: App.AppNavigationSize) => void;
  onOrientationChange: (next: App.AppStepperOrientation) => void;
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
      <AppControllerRow
        defaultValue="horizontal"
        label="Orientation"
        onChange={onOrientationChange}
        options={orientations}
        value={orientation}
      />
    </FlexWrapper>
  );
};

export default AppStepperControllerGuide;
