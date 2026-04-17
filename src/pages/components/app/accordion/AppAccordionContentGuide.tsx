import AppAccordion from '@/components/app/AppAccordion';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppAccordionPreviewFrame from '@/pages/components/app/accordion/AppAccordionPreviewFrame';
import { createAppAccordionContentItems } from '@/pages/components/app/accordion/appAccordionItems';

type AppAccordionPreviewControls = Pick<App.AccordionProps, 'size' | 'type'>;

const createExampleCode = (size: App.AppAccordionSize, type: App.AppAccordionType) => `const items = [
  {
    id: 'account',
    title: 'Account overview',
    description: 'Profile, billing, and access control in one place.',
    icon: '@',
    content: 'Review plan details, permission updates, and recent activity without leaving the current screen.',
  },
  {
    id: 'notifications',
    title: 'Notifications',
    description: 'Choose which updates should reach your team.',
    icon: '!',
    badge: '3',
    content: 'Control email digests, issue alerts, and release summaries with per-channel preferences.',
  },
  {
    id: 'billing',
    title: 'Billing and invoices',
    description: 'Track renewals and download monthly statements.',
    icon: '$',
    content: 'Access invoices, update card details, and confirm renewal schedules from a single section.',
  },
];

<AppAccordion
  size="${size}"
  type="${type}"
  defaultValue={${type === 'multiple' ? "['account', 'notifications']" : "['account']"}}
  items={items}
/>`;

const AppAccordionContentGuide = ({
  size = 'md',
  type = 'single',
}: AppAccordionPreviewControls) => {
  return (
    <GuideSection
      title="Content"
      description="Use descriptive titles, supporting copy, and optional badges so app settings remain scannable even in tighter layouts."
      example={
        <CodeExample
          code={createExampleCode(size, type)}
          className="flex-1 min-w-[320px]"
        >
          <AppAccordionPreviewFrame>
            <AppAccordion
              size={size}
              type={type}
              defaultValue={
                type === 'multiple'
                  ? ['account', 'notifications']
                  : ['account']
              }
              items={createAppAccordionContentItems()}
            />
          </AppAccordionPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppAccordionContentGuide;
