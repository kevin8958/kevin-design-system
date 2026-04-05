import Table from '@/components/data/Table';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Role', key: 'role' },
  { label: 'Status', key: 'status' },
];

const data = [
  {
    id: '1',
    name: 'Alice Kim',
    role: 'Designer',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Bob Lee',
    role: 'Engineer',
    status: 'Review',
  },
  {
    id: '3',
    name: 'Charlie Park',
    role: 'PM',
    status: 'Offline',
  },
];

const TypeExample = () => {
  const exampleCode = `const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Role', key: 'role' },
  { label: 'Status', key: 'status' },
];

<Table columns={columns} data={data} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1" maxHeight={700}>
      <FlexWrapper classes="w-full p-4">
        <Table columns={columns} data={data} />
      </FlexWrapper>
    </CodeExample>
  );
};

const TableTypeGuide = () => {
  return (
    <GuideSection
      title="Type"
      description="Use tables to present structured, multi-column data with consistent spacing and clear headers."
      example={<TypeExample />}
    />
  );
};

export default TableTypeGuide;
