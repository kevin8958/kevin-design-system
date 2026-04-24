import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import AppControllerRow from '@/pages/components/app/common/AppControllerRow';

const sizes: { label: string; value: App.AppInputSize }[] = [
  { label: 'sm', value: 'sm' },
  { label: 'md', value: 'md' },
  { label: 'lg', value: 'lg' },
];

type AppTextInputControllerGuideProps = {
  size: App.AppInputSize;
  onSizeChange: (next: App.AppInputSize) => void;
};

const AppTextInputControllerGuide = ({
  size,
  onSizeChange,
}: AppTextInputControllerGuideProps) => {
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

export default AppTextInputControllerGuide;
