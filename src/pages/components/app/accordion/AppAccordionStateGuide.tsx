import AppAccordion from '@/components/app/AppAccordion';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppAccordionPreviewFrame from '@/pages/components/app/accordion/AppAccordionPreviewFrame';
import { createAppAccordionStateItems } from '@/pages/components/app/accordion/appAccordionItems';

type AppAccordionPreviewControls = Pick<App.AccordionProps, 'size' | 'type'>;

const createExampleCode = (size: App.AppAccordionSize, type: App.AppAccordionType) => `const items = [
  {
    id: 'security',
    title: 'Security controls',
    description: 'Audit logs, sessions, and protection defaults.',
    icon: '#',
    content: 'Keep MFA, device trust, and session history close to your most sensitive settings.',
  },
  {
    id: 'automation',
    title: 'Automation rules',
    description: 'Rule-based cleanup and workflow triggers.',
    icon: '*',
    content: 'Connect follow-up actions to events such as submissions, escalations, or payment retries.',
  },
  {
    id: 'advanced',
    title: 'Advanced access',
    description: 'Available on enterprise plans only.',
    icon: '+',
    disabled: true,
    content: 'This section stays unavailable until the account reaches the required plan tier.',
  },
];

<AppAccordion
  size="${size}"
  type="${type}"
  defaultValue={['security']}
  items={items}
/>`;

const AppAccordionStateGuide = ({
  size = 'md',
  type = 'single',
}: AppAccordionPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Disabled sections can remain visible in the hierarchy while clearly showing that expansion is not currently available."
      example={
        <CodeExample
          code={createExampleCode(size, type)}
          className="flex-1 min-w-[320px]"
        >
          <AppAccordionPreviewFrame>
            <AppAccordion
              size={size}
              type={type}
              defaultValue={['security']}
              items={createAppAccordionStateItems()}
            />
          </AppAccordionPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppAccordionStateGuide;
