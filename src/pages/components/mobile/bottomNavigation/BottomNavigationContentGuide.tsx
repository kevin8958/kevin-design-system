import { useState } from 'react';
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

const items = [
  { id: 'home', label: 'Home', icon: <LuHouse /> },
  { id: 'search', label: 'Search', icon: <LuSearch /> },
  { id: 'alerts', label: 'Alerts', icon: <LuBell />, badge: 3 },
  { id: 'profile', label: 'Profile', icon: <LuUserRound /> },
];

const BottomNavigationContentGuide = () => {
  const [value, setValue] = useState('home');
  const exampleCode = `<BottomNavigation
  items={[
    { id: 'home', label: 'Home', icon: <LuHouse /> },
    { id: 'search', label: 'Search', icon: <LuSearch /> },
    { id: 'alerts', label: 'Alerts', icon: <LuBell />, badge: 3 },
    { id: 'profile', label: 'Profile', icon: <LuUserRound /> },
  ]}
  value="${value}"
  onChange={setValue}
/>`;

  return (
    <GuideSection
      title="Content"
      description="Use bottom navigation for the few destinations users need to jump between constantly on mobile."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-0">
          <MobilePreviewFrame classes="flex-1">
            <div className="flex min-h-[640px] w-full flex-col bg-neutral-50 dark:bg-neutral-950 sm:h-full">
              <TopAppBar title="Overview" subtitle="Product performance" />
              <div className="flex-1 space-y-3 px-4 py-5">
                <div className="rounded-3xl bg-white p-5 shadow-sm dark:bg-neutral-900">
                  <Typography variant="H4">Current Section</Typography>
                  <Typography variant="B1" classes="mt-2 !text-neutral-500 dark:!text-neutral-400">
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </Typography>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="rounded-3xl bg-white p-4 shadow-sm dark:bg-neutral-900"
                    >
                      <Typography variant="C1">Card {index + 1}</Typography>
                    </div>
                  ))}
                </div>
              </div>
              <BottomNavigation items={items} value={value} onChange={setValue} />
            </div>
          </MobilePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default BottomNavigationContentGuide;
