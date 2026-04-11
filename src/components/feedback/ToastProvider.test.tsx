import { act, fireEvent, render, screen } from '@testing-library/react';
import Button from '@/components/action/Button';
import ToastProvider, { useToast } from './ToastProvider';

const Trigger = () => {
  const toast = useToast();

  return (
    <Button
      onClick={() =>
        toast.success({
          title: 'Toast',
          description: 'Saved successfully.',
          autoClose: 1200,
        })
      }
    >
      Trigger
    </Button>
  );
};

describe('ToastProvider', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('pushes toasts from descendants', () => {
    render(
      <ToastProvider>
        <Trigger />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: /trigger/i }));

    expect(screen.getByText('Saved successfully.')).toBeInTheDocument();
  });

  it('removes auto-closing toasts after the duration', () => {
    render(
      <ToastProvider>
        <Trigger />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: /trigger/i }));

    act(() => {
      jest.advanceTimersByTime(1200);
    });

    act(() => {
      jest.advanceTimersByTime(220);
    });

    expect(screen.queryByText('Saved successfully.')).not.toBeInTheDocument();
  });
});
