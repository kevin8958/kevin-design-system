import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentPopoverPage from './ComponentPopoverPage';

describe('ComponentPopoverPage', () => {
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

  it('updates code examples when the controller changes', () => {
    render(
      <MemoryRouter>
        <ComponentPopoverPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: /right/i }));
    fireEvent.click(screen.getByRole('button', { name: /end/i }));
    fireEvent.click(screen.getAllByRole('button', { name: 'Code' })[0]);

    expect(screen.getAllByText(/side="right"/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/align="end"/).length).toBeGreaterThan(0);
  });
});
