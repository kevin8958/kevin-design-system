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

  it('applies classes to the outer wrapper', () => {
    const { container } = render(
      <Table columns={columns} data={data} classes="bg-white/10 backdrop-blur-md" />,
    );

    expect(container.firstChild).toHaveClass('bg-white/10', 'backdrop-blur-md');
  });
});
