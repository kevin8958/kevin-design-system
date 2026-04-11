import { render, screen } from '@testing-library/react';
import DescriptionList from './DescriptionList';

const items: Data.DescriptionListItem[] = [
  {
    label: 'Workspace',
    value: 'Kevin Design System',
    hint: 'Production environment',
  },
  {
    label: 'Owner',
    value: 'Kevin Lee',
  },
];

describe('DescriptionList', () => {
  it('renders labels and values', () => {
    render(<DescriptionList items={items} />);

    expect(screen.getByText('Workspace')).toBeInTheDocument();
    expect(screen.getByText('Kevin Design System')).toBeInTheDocument();
  });

  it('renders hints when provided', () => {
    render(<DescriptionList items={items} />);

    expect(screen.getByText('Production environment')).toBeInTheDocument();
  });

  it('applies two-column layout when requested', () => {
    render(<DescriptionList items={items} columns={2} />);

    expect(screen.getByTestId('description-list')).toHaveClass('md:grid-cols-2');
  });

  it('applies large size spacing to items', () => {
    render(<DescriptionList items={items} size="lg" />);

    expect(screen.getAllByTestId('description-list-item')[0]).toHaveClass('p-6');
  });
});
