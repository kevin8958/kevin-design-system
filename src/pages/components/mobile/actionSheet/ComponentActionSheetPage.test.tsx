import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentActionSheetPage from './ComponentActionSheetPage';

describe('ComponentActionSheetPage', () => {
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

  it('renders the action sheet docs page', () => {
    render(
      <MemoryRouter>
        <ComponentActionSheetPage />
      </MemoryRouter>,
    );

    expect(screen.getAllByText('ActionSheet').length).toBeGreaterThan(0);
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('State')).toBeInTheDocument();
  });
});
