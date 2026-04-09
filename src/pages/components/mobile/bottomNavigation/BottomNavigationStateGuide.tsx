import {
  LuBell,
  LuHouse,
  LuSearch,
  LuUserRound,
} from 'react-icons/lu';
import BottomNavigation from '@/components/mobile/BottomNavigation';
import TopAppBar from '@/components/mobile/TopAppBar';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import MobilePreviewFrame from '@/pages/components/mobile/shared/MobilePreviewFrame';

const BottomNavigationStateGuide = () => {
  const exampleCode = `<BottomNavigation
  items={[
    { id: 'home', label: 'Home', icon: <LuHouse /> },
    { id: 'search', label: 'Search', icon: <LuSearch /> },
    { id: 'alerts', label: 'Alerts', icon: <LuBell />, badge: 12 },
    { id: 'profile', label: 'Profile', icon: <LuUserRound />, disabled: true },
  ]}
  value="alerts"
/>`;

  return (
    <GuideSection
      title="State"
      description="Badges help surface urgency, while disabled items signal destinations that are present but currently unavailable."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-0">
          <MobilePreviewFrame classes="flex-1">
            <div className="flex min-h-[640px] w-full flex-col bg-neutral-50 dark:bg-neutral-950 sm:h-full">
              <TopAppBar title="Alerts" subtitle="Monitor what needs attention" />
              <div className="flex-1 px-4 py-5">
                <div className="w-full rounded-3xl bg-white p-5 shadow-sm dark:bg-neutral-900">
                  <Typography variant="H4">Unread updates</Typography>
                  <Typography variant="B1" classes="mt-2 !text-neutral-500 dark:!text-neutral-400">
                    Priority changes and reminders stay visible without leaving the main navigation.
                  </Typography>
                </div>
              </div>
              <BottomNavigation
                items={[
                  { id: 'home', label: 'Home', icon: <LuHouse /> },
                  { id: 'search', label: 'Search', icon: <LuSearch /> },
                  { id: 'alerts', label: 'Alerts', icon: <LuBell />, badge: 12 },
                  {
                    id: 'profile',
                    label: 'Profile',
                    icon: <LuUserRound />,
                    disabled: true,
                  },
                ]}
                value="alerts"
              />
            </div>
          </MobilePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default BottomNavigationStateGuide;
