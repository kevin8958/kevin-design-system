import { useState } from 'react';
import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import BottomSheet from '@/components/mobile/BottomSheet';
import TopAppBar from '@/components/mobile/TopAppBar';
import MobilePreviewFrame from '@/pages/components/mobile/shared/MobilePreviewFrame';

type BottomSheetPreviewControls = Pick<Mobile.BottomSheetProps, 'size'>;

const BottomSheetContentGuide = ({ size = 'md' }: BottomSheetPreviewControls) => {
  const [open, setOpen] = useState(false);
  const exampleCode = `<BottomSheet
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Filter results"
  description="Adjust the list without leaving the current screen."
  size="${size}"
  footer={<ActionButtons />}
>
  <SheetContent />
</BottomSheet>`;

  return (
    <GuideSection
      title="Content"
      description="Bottom sheets are useful for filters, pickers, and contextual actions that should stay close to the current task."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-0">
          <MobilePreviewFrame classes="flex-1">
            <div className="relative flex min-h-[640px] w-full flex-col overflow-hidden bg-neutral-50 dark:bg-neutral-950 sm:h-full">
              <TopAppBar title="Orders" subtitle="Refine the current list" />
              <div className="flex-1 px-4 py-5">
                <Button onClick={() => setOpen(true)}>Open Bottom Sheet</Button>
              </div>
              <BottomSheet
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Filter results"
                description="Adjust the list without leaving the current screen."
                size={size}
                contained
                footer={
                  <FlexWrapper justify="between">
                    <Button variant="clear" color="neutral" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setOpen(false)}>Apply</Button>
                  </FlexWrapper>
                }
              >
                <div className="space-y-3 py-2">
                  {['Status', 'Date range', 'Owner'].map((label) => (
                    <div
                      key={label}
                      className="rounded-2xl bg-neutral-100 p-4 text-sm dark:bg-neutral-900"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </BottomSheet>
            </div>
          </MobilePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default BottomSheetContentGuide;
