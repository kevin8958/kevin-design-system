import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentEmptyStatePage from './ComponentEmptyStatePage';

describe('ComponentEmptyStatePage', () => {
  beforeAll(() => {
    class ResizeObserverMock {
      observe() {}
      disconnect() {}
      unobserve() {}
    }

    class IntersectionObserverMock {
      observe() {}
      disconnect() {}
      unobserve() {}
    }

    Object.defineProperty(window, 'ResizeObserver', {
      writable: true,
      value: ResizeObserverMock,
    });

    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: IntersectionObserverMock,
    });
  });

  it('applies top controls to empty state guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentEmptyStatePage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'lg' }));

    expect(screen.getAllByText(/size="lg"/).length).toBeGreaterThan(0);
  });
});
