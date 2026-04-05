import { useState } from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Pagination from '@/components/navigation/Pagination';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const TypeExample = () => {
  const [defaultPage, setDefaultPage] = useState(3);
  const [longRangePage, setLongRangePage] = useState(10);

  const exampleCode = `const [page, setPage] = useState(3);

<Pagination
  currentPage={page}
  totalPages={8}
  onPageChange={setPage}
/>

<Pagination
  currentPage={longRangePage}
  totalPages={20}
  siblingCount={1}
  onPageChange={setLongRangePage}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full">
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Default Range</Typography>
          <Pagination
            currentPage={defaultPage}
            totalPages={8}
            siblingCount={1}
            onPageChange={setDefaultPage}
          />
        </FlexWrapper>

        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Long Range</Typography>
          <Pagination
            currentPage={longRangePage}
            totalPages={20}
            siblingCount={1}
            onPageChange={setLongRangePage}
          />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const PaginationTypeGuide = () => {
  return (
    <GuideSection
      title="Range"
      description="Show short and long page ranges with automatic ellipsis handling."
      example={<TypeExample />}
    />
  );
};

export default PaginationTypeGuide;
