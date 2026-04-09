import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentBottomSheetPage from './ComponentBottomSheetPage';

describe('ComponentBottomSheetPage', () => {
  beforeAll(() => {
    class ResizeObserverMock {
      observe() {}
      disconnect() {}
      unobserve() {}
    }

    Object.defineProperty(window, 'ResizeObserver', {
      writable: true,
      value: ResizeObserverMock,
    });
  });

  it('renders the bottom sheet docs page', () => {
    render(
      <MemoryRouter>
        <ComponentBottomSheetPage />
      </MemoryRouter>,
    );

    expect(screen.getAllByText('BottomSheet').length).toBeGreaterThan(0);
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Scrollable')).toBeInTheDocument();
  });
});
