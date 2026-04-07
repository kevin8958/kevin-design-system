import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentBadgePage from './ComponentBadgePage';

describe('ComponentBadgePage', () => {
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

  it('applies top controls to badge guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentBadgePage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'lg' }));

    expect(screen.getAllByText(/size="lg"/).length).toBeGreaterThan(0);
  });
});
