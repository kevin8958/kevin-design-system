import { fireEvent, render, screen } from '@testing-library/react';
import Toast from './Toast';

describe('Toast', () => {
  it('renders title and description', () => {
    render(<Toast title="Saved" description="Changes applied." />);

    expect(screen.getByText('Saved')).toBeInTheDocument();
    expect(screen.getByText('Changes applied.')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    render(<Toast title="Danger" variant="danger" />);

    expect(screen.getByRole('status')).toHaveClass('border-danger/20');
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(<Toast title="Closable" closable onClose={handleClose} />);

    fireEvent.click(screen.getByRole('button', { name: /close toast/i }));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
