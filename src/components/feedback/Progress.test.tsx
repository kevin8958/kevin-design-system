import { render, screen } from '@testing-library/react';
import Progress from './Progress';

describe('Progress', () => {
  it('renders with progressbar role', () => {
    render(<Progress value={40} />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('clamps values above max', () => {
    render(<Progress value={200} max={100} />);

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  });

  it('shows percentage text when enabled', () => {
    render(<Progress value={56} showValue />);

    expect(screen.getByText('56%')).toBeInTheDocument();
  });
});
