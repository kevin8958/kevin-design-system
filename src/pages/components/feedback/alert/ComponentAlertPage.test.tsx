import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentAlertPage from './ComponentAlertPage';

describe('ComponentAlertPage', () => {
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

  it('applies top controls to alert guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentAlertPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'success' }));

    expect(screen.getAllByText(/variant="success"/).length).toBeGreaterThan(0);
  });
});
