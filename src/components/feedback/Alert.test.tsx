import { fireEvent, render, screen } from '@testing-library/react';
import Alert from './Alert';

describe('Alert', () => {
  it('renders title and description', () => {
    render(<Alert title="Heads up" description="Helpful message." />);

    expect(screen.getByText('Heads up')).toBeInTheDocument();
    expect(screen.getByText('Helpful message.')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    render(<Alert title="Warning" variant="warning" />);

    expect(screen.getByRole('alert')).toHaveClass('border-warning/20');
  });

  it('calls onClose when dismiss button is clicked', () => {
    const handleClose = jest.fn();
    render(<Alert title="Closable" closable onClose={handleClose} />);

    fireEvent.click(screen.getByRole('button', { name: /close alert/i }));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
