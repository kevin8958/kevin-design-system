import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import TopAppBar from '@/components/mobile/TopAppBar';
import MobilePreviewFrame from '@/pages/components/mobile/shared/MobilePreviewFrame';
import { LuArrowLeft, LuSearch, LuShare2 } from 'react-icons/lu';

type TopAppBarPreviewControls = Pick<Mobile.TopAppBarProps, 'align'>;

const TopAppBarNavigationGuide = ({ align = 'left' }: TopAppBarPreviewControls) => {
  const exampleCode = `<TopAppBar
  title="Project Details"
  subtitle="March summary"
  align="${align}"
  leading={<BackButton />}
  actions={<TopActions />}
/>`;

  return (
    <GuideSection
      title="Navigation"
      description="Top app bars anchor the current screen with lightweight navigation and a small set of high-priority actions."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-0">
          <MobilePreviewFrame classes="flex-1">
            <div className="flex min-h-[640px] w-full flex-col bg-neutral-50 dark:bg-neutral-950 sm:h-full">
              <TopAppBar
                title="Project Details"
                subtitle="March summary"
                align={align}
                leading={
                  <Button
                    aria-label="Go back"
                    variant="clear"
                    color="neutral"
                    size="sm"
                    shape="circle"
                  >
                    <LuArrowLeft size={18} />
                  </Button>
                }
                actions={
                  <>
                    <Button
                      aria-label="Search"
                      variant="clear"
                      color="neutral"
                      size="sm"
                      shape="circle"
                    >
                      <LuSearch size={18} />
                    </Button>
                    <Button
                      aria-label="Share"
                      variant="clear"
                      color="neutral"
                      size="sm"
                      shape="circle"
                    >
                      <LuShare2 size={18} />
                    </Button>
                  </>
                }
              />
              <div className="flex-1 space-y-3 px-4 py-5">
                <div className="rounded-3xl bg-white p-5 shadow-sm dark:bg-neutral-900">
                  <Typography variant="H4">Recent Activity</Typography>
                  <Typography variant="B1" classes="mt-2 !text-neutral-500 dark:!text-neutral-400">
                    Contextual actions stay available while the screen content remains readable.
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

export default TopAppBarNavigationGuide;
