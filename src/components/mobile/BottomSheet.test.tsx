import { fireEvent, render, screen } from '@testing-library/react';
import BottomSheet from './BottomSheet';

describe('BottomSheet', () => {
  it('renders title and description when open', () => {
    render(
      <BottomSheet
        isOpen
        title="Filter results"
        description="Adjust visible items."
        contained
      >
        <div>Sheet content</div>
      </BottomSheet>,
    );

    expect(screen.getByText('Filter results')).toBeInTheDocument();
    expect(screen.getByText('Adjust visible items.')).toBeInTheDocument();
    expect(screen.getByText('Sheet content')).toBeInTheDocument();
  });

  it('calls onClose when clicking the overlay', () => {
    const handleClose = jest.fn();
    render(
      <BottomSheet isOpen onClose={handleClose} contained>
        <div>Sheet content</div>
      </BottomSheet>,
    );

    fireEvent.click(screen.getByTestId('bottom-sheet-overlay'));

    expect(handleClose).toHaveBeenCalled();
  });

  it('applies visible size differences even with short content', () => {
    const { rerender } = render(
      <BottomSheet isOpen size="md" contained>
        <div>Sheet content</div>
      </BottomSheet>,
    );

    expect(screen.getByTestId('bottom-sheet-panel')).toHaveClass('min-h-[48%]');

    rerender(
      <BottomSheet isOpen size="lg" contained>
        <div>Sheet content</div>
      </BottomSheet>,
    );

    expect(screen.getByTestId('bottom-sheet-panel')).toHaveClass('min-h-[64%]');
  });
});
