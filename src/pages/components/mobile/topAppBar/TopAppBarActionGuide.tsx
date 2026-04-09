import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import TopAppBar from '@/components/mobile/TopAppBar';
import MobilePreviewFrame from '@/pages/components/mobile/shared/MobilePreviewFrame';
import { LuBell, LuMenu, LuUserRound } from 'react-icons/lu';

type TopAppBarPreviewControls = Pick<Mobile.TopAppBarProps, 'align'>;

const TopAppBarActionGuide = ({ align = 'left' }: TopAppBarPreviewControls) => {
  const exampleCode = `<TopAppBar
  title="Workspace"
  align="${align}"
  leading={<MenuButton />}
  actions={<ActionButtons />}
/>`;

  return (
    <GuideSection
      title="Actions"
      description="Use the leading edge for global access like a menu or back action, and keep trailing actions concise so the title remains legible."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-0">
          <MobilePreviewFrame classes="flex-1">
            <div className="flex min-h-[640px] w-full flex-col bg-neutral-50 dark:bg-neutral-950 sm:h-full">
              <TopAppBar
                title="Workspace"
                align={align}
                leading={
                  <Button
                    aria-label="Open menu"
                    variant="clear"
                    color="neutral"
                    size="sm"
                    shape="circle"
                  >
                    <LuMenu size={18} />
                  </Button>
                }
                actions={
                  <>
                    <Button
                      aria-label="Notifications"
                      variant="clear"
                      color="neutral"
                      size="sm"
                      shape="circle"
                    >
                      <LuBell size={18} />
                    </Button>
                    <Button
                      aria-label="Account"
                      variant="clear"
                      color="neutral"
                      size="sm"
                      shape="circle"
                    >
                      <LuUserRound size={18} />
                    </Button>
                  </>
                }
              />
              <div className="flex-1 px-4 py-5">
                <div className="rounded-3xl bg-white p-5 shadow-sm dark:bg-neutral-900">
                  <Typography variant="H4">Mobile Header</Typography>
                  <Typography variant="B1" classes="mt-2 !text-neutral-500 dark:!text-neutral-400">
                    Common actions stay in reach without overwhelming the first row of the interface.
                  </Typography>
                </div>
              </div>
            </div>
          </MobilePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default TopAppBarActionGuide;
