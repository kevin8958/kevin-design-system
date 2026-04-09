import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import BottomSheet from '@/components/mobile/BottomSheet';
import TopAppBar from '@/components/mobile/TopAppBar';
import MobilePreviewFrame from '@/pages/components/mobile/shared/MobilePreviewFrame';

type BottomSheetPreviewControls = Pick<Mobile.BottomSheetProps, 'size'>;

const BottomSheetStateGuide = ({ size = 'md' }: BottomSheetPreviewControls) => {
  const exampleCode = `<BottomSheet
  isOpen
  title="Saved items"
  description="Scrollable content keeps long lists usable on small screens."
  size="${size}"
>
  <LongList />
</BottomSheet>`;

  return (
    <GuideSection
      title="Scrollable"
      description="When the sheet content grows, keep the panel open and let the body scroll instead of forcing a separate page."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-0">
          <MobilePreviewFrame classes="flex-1">
            <div className="relative flex min-h-[640px] w-full flex-col overflow-hidden bg-neutral-50 dark:bg-neutral-950 sm:h-full">
              <TopAppBar title="Saved items" subtitle="Review and organize quickly" />
              <BottomSheet
                isOpen
                title="Saved items"
                description="Scrollable content keeps long lists usable on small screens."
                size={size}
                contained
              >
                <div className="space-y-3 py-2">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div
                      key={index}
                      className="rounded-2xl bg-neutral-100 p-4 text-sm dark:bg-neutral-900"
                    >
                      Item {index + 1}
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

export default BottomSheetStateGuide;
