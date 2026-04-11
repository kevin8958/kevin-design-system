import { render, screen } from '@testing-library/react';
import Button from '@/components/action/Button';
import EmptyState from './EmptyState';

describe('EmptyState', () => {
  it('renders the title and description', () => {
    render(
      <EmptyState
        title="No results found"
        description="Try updating your filters."
      />,
    );

    expect(screen.getByText('No results found')).toBeInTheDocument();
    expect(screen.getByText('Try updating your filters.')).toBeInTheDocument();
  });

  it('renders actions when provided', () => {
    render(
      <EmptyState
        title="No results found"
        primaryAction={<Button>Try Again</Button>}
        secondaryAction={<Button variant="outline">Clear Filters</Button>}
      />,
    );

    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /clear filters/i }),
    ).toBeInTheDocument();
  });

  it('applies large spacing for lg size', () => {
    render(<EmptyState title="No results found" size="lg" />);

    expect(screen.getByTestId('empty-state')).toHaveClass('py-12');
  });
});
