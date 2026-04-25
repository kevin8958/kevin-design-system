import AppPagination from '@/components/app/AppPagination';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppPaginationStateGuide = ({ siblingCount }: { siblingCount: number }) => {
  const code = `<AppPagination currentPage={1} totalPages={5} siblingCount={${siblingCount}} />
<AppPagination currentPage={5} totalPages={5} siblingCount={${siblingCount}} />
<AppPagination currentPage={3} totalPages={5} siblingCount={${siblingCount}} disabled />`;

  return (
    <GuideSection
      title="State"
      description="Cover boundary and disabled states so list navigation remains predictable in app layouts."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={620}>
          <AppDevicePreviewFrame minHeight={360}>
            <div className="flex w-full flex-col gap-6">
              <div className="flex w-full flex-col gap-3">
                <Typography variant="C1">First Page</Typography>
                <AppPagination currentPage={1} siblingCount={siblingCount} totalPages={5} />
              </div>
              <div className="flex w-full flex-col gap-3">
                <Typography variant="C1">Last Page</Typography>
                <AppPagination currentPage={5} siblingCount={siblingCount} totalPages={5} />
              </div>
              <div className="flex w-full flex-col gap-3">
                <Typography variant="C1">Disabled</Typography>
                <AppPagination
                  currentPage={3}
                  disabled
                  siblingCount={siblingCount}
                  totalPages={5}
                />
              </div>
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppPaginationStateGuide;
