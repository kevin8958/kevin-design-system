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
    label: 'Workspace',
    value: 'Kevin Design System',
    hint: 'Production environment',
  },
  {
    label: 'Owner',
    value: 'Kevin Lee',
    hint: 'Primary contact',
  },
  {
    label: 'Billing Cycle',
    value: 'Annual',
    hint: 'Renews on Apr 10',
  },
  {
    label: 'Region',
    value: 'US West',
    hint: 'Vancouver edge',
  },
];

const DescriptionListContentExample = ({
  size,
  columns,
}: DescriptionListPreviewControls) => {
  const exampleCode = `<DescriptionList
  size="${size}"
  columns={${columns}}
  items={accountSummaryItems}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[340px]">
      <FlexWrapper classes="w-full max-w-[720px]" direction="col" items="start">
        <DescriptionList size={size} columns={columns} items={items} />
      </FlexWrapper>
    </CodeExample>
  );
};

const DescriptionListContentGuide = (
  props: DescriptionListPreviewControls,
) => {
  return (
    <GuideSection
      title="Content"
      description="DescriptionList works well for metadata that benefits from a calm label-value rhythm instead of dense table formatting."
      example={<DescriptionListContentExample {...props} />}
    />
  );
};

export default DescriptionListContentGuide;
