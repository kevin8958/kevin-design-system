import Accordion from '@/components/action/Accordion';
import Typography from '@/components/foundation/Typography';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import { LuBell, LuCreditCard, LuUsers } from 'react-icons/lu';

type AccordionPreviewControls = Pick<Action.AccordionProps, 'size' | 'type'>;

const createItems = (): Action.AccordionItem[] => [
  {
    id: 'account',
    title: 'Account overview',
    description: 'Profile, billing, and access control in one place.',
    icon: <LuUsers />,
    content: (
      <Typography variant="B1">
        Review plan details, permission updates, and recent activity without
        leaving the current page.
      </Typography>
    ),
  },
  {
    id: 'notifications',
    title: 'Notifications',
    description: 'Choose which updates should reach your team.',
    icon: <LuBell />,
    badge: (
      <span className="rounded-full bg-secondary-500/10 px-2 py-0.5 text-[11px] font-semibold text-secondary-600 dark:bg-primary-400/15 dark:text-primary-300">
        3
      </span>
    ),
    content: (
      <Typography variant="B1">
        Control email digests, issue alerts, and release summaries with
        per-channel preferences.
      </Typography>
    ),
  },
  {
    id: 'billing',
    title: 'Billing & invoices',
    description: 'Track renewals and download monthly statements.',
    icon: <LuCreditCard />,
    content: (
      <Typography variant="B1">
        Access invoices, update card details, and confirm renewal schedules
        from a single section.
      </Typography>
    ),
  },
];

const AccordionContentExample = ({ size, type }: AccordionPreviewControls) => {
  const exampleCode = `<Accordion
  size="${size}"
  type="${type}"
  defaultValue={${type === 'multiple' ? "['account', 'notifications']" : "['account']"}}
  items={items}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[340px]">
      <FlexWrapper classes="w-full max-w-[640px]" direction="col" items="start">
        <Accordion
          size={size}
          type={type}
          defaultValue={
            type === 'multiple' ? ['account', 'notifications'] : ['account']
          }
          items={createItems()}
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const AccordionContentGuide = (props: AccordionPreviewControls) => {
  return (
    <GuideSection
      title="Content"
      description="Use rich labels, descriptions, and badges to make dense information easier to scan."
      example={<AccordionContentExample {...props} />}
    />
  );
};

export default AccordionContentGuide;
