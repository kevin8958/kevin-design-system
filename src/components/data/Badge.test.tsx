import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge', () => {
  it('renders the label', () => {
    render(<Badge label="Beta" />);

    expect(screen.getByText('Beta')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    render(<Badge label="Large" size="lg" />);

    expect(screen.getByText('Large')).toHaveClass('px-3');
  });

  it('applies variant classes', () => {
    render(<Badge label="Danger" variant="danger" />);

    expect(screen.getByText('Danger')).toHaveClass('text-danger');
  });
});
