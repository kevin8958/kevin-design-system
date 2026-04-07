import ButtonGroup from '@/components/action/ButtonGroup';
import Select from '@/components/input/Select';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';

const siblingCounts = [0, 1, 2] as const;

const defaultValues = {
  EachSide: '1',
} as const;

type PaginationControllerGuideProps = {
  siblingCount: number;
  onSiblingCountChange: (next: number) => void;
};

const PaginationControllerGuide = ({
  siblingCount,
  onSiblingCountChange,
}: PaginationControllerGuideProps) => {
  const options = siblingCounts.map((option) => String(option));

  return (
    <FlexWrapper direction="col" items="start" gap={5}>
      <Typography variant="C1">* : Default</Typography>
      <FlexWrapper
        items="start"
        gap={3}
        classes="w-full flex-col md:flex-row md:items-center"
      >
        <Typography
          variant="C1"
          classes="uppercase font-mono opacity-60 md:w-[72px] md:shrink-0 md:pt-0.5"
        >
          Each Side
        </Typography>
        <div className="hidden md:block">
          <ButtonGroup
            size="sm"
            color="neutral"
            items={options.map((option) => ({
              label: option === defaultValues.EachSide ? `${option} *` : option,
              value: option,
            }))}
            value={String(siblingCount)}
            onChange={(next) => onSiblingCountChange(Number(next))}
          />
        </div>
        <div className="w-full md:hidden">
          <Select
            size="sm"
            options={options.map((option) => ({
              label:
                option === defaultValues.EachSide
                  ? `${option} *`
                  : option,
              value: option,
            }))}
            value={String(siblingCount)}
            onChange={(next) => onSiblingCountChange(Number(next))}
            placeholder="Select each side"
            classes="min-w-[180px]"
          />
        </div>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default PaginationControllerGuide;
