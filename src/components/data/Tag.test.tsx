import { render, screen } from '@testing-library/react';
import Tag from './Tag';

describe('Tag', () => {
  it('renders the label', () => {
    render(<Tag label="Design Token" />);

    expect(screen.getByText('Design Token')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    render(<Tag label="Large" size="lg" />);

    expect(screen.getByText('Large')).toHaveClass('px-3');
  });

  it('applies variant classes', () => {
    render(<Tag label="Primary" variant="primary" />);

    expect(screen.getByText('Primary')).toHaveClass('bg-secondary-50');
  });
});
