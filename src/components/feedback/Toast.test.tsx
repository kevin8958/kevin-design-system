import { act, fireEvent, render, screen } from '@testing-library/react';
import Toast from './Toast';

describe('Toast', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders title and description', () => {
    render(<Toast title="Saved" description="Changes applied." />);

    expect(screen.getByText('Saved')).toBeInTheDocument();
    expect(screen.getByText('Changes applied.')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    render(<Toast title="Danger" variant="danger" />);

    expect(screen.getByRole('status')).toHaveClass('bg-danger');
    expect(screen.getByRole('status')).toHaveClass('border-danger');
    expect(screen.getByTestId('toast-icon')).toHaveClass('text-white');
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(<Toast title="Closable" closable onClose={handleClose} />);

    fireEvent.click(screen.getByRole('button', { name: /close toast/i }));

    act(() => {
      jest.advanceTimersByTime(220);
    });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('auto closes after the specified duration', () => {
    const handleClose = jest.fn();
    render(
      <Toast
        title="Auto close"
        description="This toast should disappear."
        autoClose={1200}
        onClose={handleClose}
      />,
    );

    expect(screen.getByTestId('toast-progress-bar')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1200);
    });

    act(() => {
      jest.advanceTimersByTime(220);
    });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('supports placement and stack offset within a positioned parent', () => {
    render(
      <div className="relative h-80">
        <Toast title="Placed" placement="bottom-right" stackIndex={2} />
      </div>,
    );

    const positioner = screen.getByTestId('toast-positioner');
    expect(positioner).toHaveClass('right-4');
    expect(positioner.style.bottom).toBe('84px');
    expect(positioner.style.zIndex).toBe('122');
  });
});
