import FlexWrapper from '@/components/layout/FlexWrapper';
import Pagination from '@/components/navigation/Pagination';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type PaginationPreviewControls = Pick<
  Navigation.PaginationProps,
  'siblingCount'
>;

const StateExample = ({ siblingCount }: PaginationPreviewControls) => {
  const exampleCode = `<Pagination currentPage={1} totalPages={5} siblingCount={${siblingCount}} />
<Pagination currentPage={5} totalPages={5} siblingCount={${siblingCount}} />
<Pagination currentPage={3} totalPages={5} siblingCount={${siblingCount}} disabled />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">First Page</Typography>
          <Pagination currentPage={1} totalPages={5} siblingCount={siblingCount} />
        </FlexWrapper>

        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Last Page</Typography>
          <Pagination currentPage={5} totalPages={5} siblingCount={siblingCount} />
        </FlexWrapper>

        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Disabled</Typography>
          <Pagination currentPage={3} totalPages={5} siblingCount={siblingCount} disabled />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const PaginationStateGuide = (props: PaginationPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Handle boundary navigation and disabled interaction with clear visual feedback."
      example={<StateExample {...props} />}
    />
  );
};

export default PaginationStateGuide;
