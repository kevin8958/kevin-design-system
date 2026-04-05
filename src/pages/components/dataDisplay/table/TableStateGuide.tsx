import Table from '@/components/data/Table';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const compactColumns = [
  { label: 'Token', key: 'token' },
  { label: 'Value', key: 'value' },
];

const compactData = [
  { id: '1', token: 'spacing-2', value: '8px' },
  { id: '2', token: 'spacing-4', value: '16px' },
];

const stateColumns = [
  { label: 'Task', key: 'task' },
  { label: 'Owner', key: 'owner' },
  { label: 'Status', key: 'status' },
];

const stateData = [
  { id: '1', task: 'Audit docs', owner: 'Alice', status: 'Done' },
  { id: '2', task: 'Refine tokens', owner: 'Bob', status: 'In progress' },
];

const StateExample = () => {
  const exampleCode = `<Table columns={compactColumns} data={compactData} />
<Table columns={stateColumns} data={stateData} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1" maxHeight={900}>
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Compact Data</Typography>
          <Table columns={compactColumns} data={compactData} />
        </FlexWrapper>
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Status Overview</Typography>
          <Table columns={stateColumns} data={stateData} />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const TableStateGuide = () => {
  return (
    <GuideSection
      title="State"
      description="Tables can adapt to different data densities while preserving header structure and row readability."
      example={<StateExample />}
    />
  );
};

export default TableStateGuide;
