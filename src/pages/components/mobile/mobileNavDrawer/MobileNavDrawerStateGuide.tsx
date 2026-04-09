import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import NavDrawer from '@/components/mobile/MobileNavDrawer';
import MobilePreviewFrame from '@/pages/components/mobile/shared/MobilePreviewFrame';
import {
  LuBell,
  LuHouse,
  LuSettings2,
  LuUserRound,
} from 'react-icons/lu';

type NavDrawerPreviewControls = Pick<Mobile.NavDrawerProps, 'size'>;

const MobileNavDrawerStateGuide = ({
  size = 'md',
}: NavDrawerPreviewControls) => {
  const exampleCode = `<NavDrawer
  isOpen
  title="Workspace"
  subtitle="Open sections quickly"
  size="${size}"
  items={navigationItems}
  footer={<DrawerFooter />}
/>`;

  return (
    <GuideSection
      title="State"
      description="Use the footer for account switching or sign-out actions, and keep the active destination visually anchored in the list."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-0">
          <MobilePreviewFrame classes="flex-1">
            <div className="relative flex min-h-[640px] w-full flex-col overflow-hidden bg-neutral-50 dark:bg-neutral-950 sm:h-full">
              <NavDrawer
                isOpen
                title="Workspace"
                subtitle="Open sections quickly"
                size={size}
                items={[
                  {
                    id: 'home',
                    label: 'Home',
                    description: 'Overview and highlights',
                    icon: <LuHouse />,
                    active: true,
                  },
                  {
                    id: 'activity',
                    label: 'Activity',
                    description: 'Recent actions and updates',
                    icon: <LuBell />,
                    badge: 8,
                  },
                  {
                    id: 'settings',
                    label: 'Settings',
                    description: 'Team preferences',
                    icon: <LuSettings2 />,
                  },
                  {
                    id: 'profile',
                    label: 'Profile',
                    description: 'Account and security',
                    icon: <LuUserRound />,
                  },
                ]}
                footer={
                  <FlexWrapper direction="col" items="start" gap={2}>
                    <Button variant="outline" color="neutral" fullWidth>
                      Switch workspace
                    </Button>
                    <Button variant="clear" color="danger">
                      Sign out
                    </Button>
                  </FlexWrapper>
                }
                contained
              />
            </div>
          </MobilePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default MobileNavDrawerStateGuide;
