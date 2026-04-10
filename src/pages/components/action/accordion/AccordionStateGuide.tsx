import Accordion from '@/components/action/Accordion';
import Typography from '@/components/foundation/Typography';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import { LuLock, LuShield, LuSparkles } from 'react-icons/lu';

type AccordionPreviewControls = Pick<Action.AccordionProps, 'size' | 'type'>;

const createItems = (): Action.AccordionItem[] => [
  {
    id: 'security',
    title: 'Security controls',
    description: 'Audit logs, sessions, and protection defaults.',
    icon: <LuShield />,
    content: (
      <Typography variant="B1">
        Keep MFA, device trust, and session history close to your most
        sensitive team settings.
      </Typography>
    ),
  },
  {
    id: 'automation',
    title: 'Automation rules',
    description: 'Rule-based cleanup and workflow triggers.',
    icon: <LuSparkles />,
    content: (
      <Typography variant="B1">
        Connect follow-up actions to events such as form submissions, escalated
        conversations, or payment retries.
      </Typography>
    ),
  },
  {
    id: 'advanced',
    title: 'Advanced access',
    description: 'Available on enterprise plans only.',
    icon: <LuLock />,
    disabled: true,
    content: (
      <Typography variant="B1">
        This section stays unavailable until the account reaches the required
        plan tier.
      </Typography>
    ),
  },
];

const AccordionStateExample = ({ size, type }: AccordionPreviewControls) => {
  const exampleCode = `<Accordion
  size="${size}"
  type="${type}"
  defaultValue={['security']}
  items={itemsWithDisabledSection}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[340px]">
      <FlexWrapper classes="w-full max-w-[640px]" direction="col" items="start">
        <Accordion
          size={size}
          type={type}
          defaultValue={['security']}
          items={createItems()}
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const AccordionStateGuide = (props: AccordionPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Disabled items can stay visible in the hierarchy while clearly communicating that expansion is unavailable."
      example={<AccordionStateExample {...props} />}
    />
  );
};

export default AccordionStateGuide;
