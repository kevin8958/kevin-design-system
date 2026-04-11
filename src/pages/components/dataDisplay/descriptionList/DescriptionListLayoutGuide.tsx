import DescriptionList from '@/components/data/DescriptionList';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';

type DescriptionListPreviewControls = Pick<
  Data.DescriptionListProps,
  'size' | 'columns'
>;

const items: Data.DescriptionListItem[] = [
  {
    label: 'Contract',
    value: 'Enterprise',
    hint: 'Custom legal terms approved',
  },
  {
    label: 'Support Tier',
    value: 'Priority',
    hint: '24-hour SLA',
  },
  {
    label: 'Security Review',
    value: 'Completed',
    hint: 'Updated 3 days ago',
  },
  {
    label: 'Last Invoice',
    value: '$12,430',
    hint: 'Paid via corporate card',
  },
  {
    label: 'Workspace Seats',
    value: '42 active',
    hint: '4 pending invitations',
  },
  {
    label: 'Region',
    value: 'US West',
    hint: 'Customer data residency enabled',
  },
];

const DescriptionListLayoutExample = ({
  size,
  columns,
}: DescriptionListPreviewControls) => {
  const exampleCode = `<DescriptionList
  size="${size}"
  columns={${columns}}
  items={workspaceDetails}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[340px]">
      <FlexWrapper classes="w-full max-w-[720px]" direction="col" items="start">
        <DescriptionList size={size} columns={columns} items={items} />
      </FlexWrapper>
    </CodeExample>
  );
};

const DescriptionListLayoutGuide = (
  props: DescriptionListPreviewControls,
) => {
  return (
    <GuideSection
      title="Layout"
      description="Switch between one and two columns depending on how much metadata should be visible before the user needs to scroll."
      example={<DescriptionListLayoutExample {...props} />}
    />
  );
};

export default DescriptionListLayoutGuide;
