import { useState } from 'react';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import NavDrawer from '@/components/mobile/MobileNavDrawer';
import TopAppBar from '@/components/mobile/TopAppBar';
import MobilePreviewFrame from '@/pages/components/mobile/shared/MobilePreviewFrame';
import {
  LuBell,
  LuHouse,
  LuMenu,
  LuSettings2,
  LuUserRound,
} from 'react-icons/lu';

type NavDrawerPreviewControls = Pick<Mobile.NavDrawerProps, 'size'>;

const items = [
  { id: 'home', label: 'Home', description: 'Overview and highlights', icon: <LuHouse />, active: true },
  { id: 'activity', label: 'Activity', description: 'Recent actions and updates', icon: <LuBell />, badge: 8 },
  { id: 'settings', label: 'Settings', description: 'Team preferences', icon: <LuSettings2 /> },
  { id: 'profile', label: 'Profile', description: 'Account and security', icon: <LuUserRound /> },
];

const MobileNavDrawerContentGuide = ({
  size = 'md',
}: NavDrawerPreviewControls) => {
  const [open, setOpen] = useState(true);
  const exampleCode = `<NavDrawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Workspace"
  subtitle="Open sections quickly"
  size="${size}"
  items={navigationItems}
/>`;

  return (
    <GuideSection
      title="Content"
      description="A mobile navigation drawer collects broader destinations that do not belong in the persistent bottom navigation."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-0">
          <MobilePreviewFrame classes="flex-1">
            <div className="relative flex min-h-[640px] w-full flex-col overflow-hidden bg-neutral-50 dark:bg-neutral-950 sm:h-full">
              <TopAppBar
                title="Workspace"
                leading={
                  <Button
                    aria-label="Open menu"
                    variant="clear"
                    color="neutral"
                    size="sm"
                    shape="circle"
                    onClick={() => setOpen(true)}
                  >
                    <LuMenu size={18} />
                  </Button>
                }
              />
              <div className="flex-1 px-4 py-5">
                <div className="rounded-3xl bg-white p-5 shadow-sm dark:bg-neutral-900">
                  <Typography variant="H4">Team feed</Typography>
                  <Typography variant="B1" classes="mt-2 !text-neutral-500 dark:!text-neutral-400">
                    Keep secondary destinations close without occupying the main content canvas.
                  </Typography>
                </div>
              </div>
              <NavDrawer
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Workspace"
                subtitle="Open sections quickly"
                size={size}
                items={items}
                contained
              />
            </div>
          </MobilePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default MobileNavDrawerContentGuide;
