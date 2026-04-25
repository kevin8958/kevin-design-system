import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import AppControllerRow from '@/pages/components/app/common/AppControllerRow';

const sizes = ['sm', 'md', 'lg'].map((value) => ({
  value: value as App.AppCardSize,
}));
const columns = ['1', '2'].map((value) => ({ value: value as '1' | '2' }));

const AppDescriptionListControllerGuide = ({
  size,
  columns: currentColumns,
  onSizeChange,
  onColumnsChange,
}: {
  size: App.AppCardSize;
  columns: App.AppDescriptionListColumns;
  onSizeChange: (next: App.AppCardSize) => void;
  onColumnsChange: (next: App.AppDescriptionListColumns) => void;
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
    <AppControllerRow
      defaultValue="1"
      label="Columns"
      onChange={(next) => onColumnsChange(Number(next) as App.AppDescriptionListColumns)}
      options={columns}
      value={String(currentColumns) as '1' | '2'}
    />
  </FlexWrapper>
);

export default AppDescriptionListControllerGuide;
