import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import AppControllerRow from '@/pages/components/app/common/AppControllerRow';

const options = ['0', '1', '2'].map((value) => ({ value: value as '0' | '1' | '2' }));

const AppPaginationControllerGuide = ({
  siblingCount,
  onSiblingCountChange,
}: {
  siblingCount: number;
  onSiblingCountChange: (next: number) => void;
}) => {
  return (
    <FlexWrapper direction="col" items="start" gap={5}>
      <Typography variant="C1">* : Default</Typography>
      <AppControllerRow
        defaultValue="1"
        label="Each Side"
        onChange={(next) => onSiblingCountChange(Number(next))}
        options={options}
        value={String(siblingCount) as '0' | '1' | '2'}
      />
    </FlexWrapper>
  );
};

export default AppPaginationControllerGuide;
