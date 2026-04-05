import { render, screen } from '@testing-library/react';
import Table from './Table';

const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Role', key: 'role' },
];

const data = [
  { id: '1', name: 'Alice Kim', role: 'Designer' },
  { id: '2', name: 'Bob Lee', role: 'Engineer' },
];

describe('Table', () => {
  it('renders columns and rows', () => {
    render(<Table columns={columns} data={data} />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('Alice Kim')).toBeInTheDocument();
    expect(screen.getByText('Engineer')).toBeInTheDocument();
  });
});
