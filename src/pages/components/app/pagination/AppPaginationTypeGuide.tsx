import { useState } from 'react';
import AppPagination from '@/components/app/AppPagination';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppPaginationTypeGuide = ({ siblingCount }: { siblingCount: number }) => {
  const [defaultPage, setDefaultPage] = useState(3);
  const [longRangePage, setLongRangePage] = useState(10);
  const code = `const [page, setPage] = useState(3);

<AppPagination
  currentPage={page}
  totalPages={8}
  siblingCount={${siblingCount}}
  onPageChange={setPage}
/>

<AppPagination
  currentPage={longRangePage}
  totalPages={20}
  siblingCount={${siblingCount}}
  onPageChange={setLongRangePage}
/>`;

  return (
    <GuideSection
      title="Range"
      description="Show compact and long page ranges with the same ellipsis behavior used in the web docs."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={520}>
          <AppDevicePreviewFrame minHeight={260}>
            <div className="flex w-full flex-col gap-6">
              <div className="flex w-full flex-col gap-3">
                <Typography variant="C1">Default Range</Typography>
                <AppPagination
                  currentPage={defaultPage}
                  onPageChange={setDefaultPage}
                  siblingCount={siblingCount}
                  totalPages={8}
                />
              </div>
              <div className="flex w-full flex-col gap-3">
                <Typography variant="C1">Long Range</Typography>
                <AppPagination
                  currentPage={longRangePage}
                  onPageChange={setLongRangePage}
                  siblingCount={siblingCount}
                  totalPages={20}
                />
              </div>
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppPaginationTypeGuide;
