import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentTopAppBarPage from './ComponentTopAppBarPage';

describe('ComponentTopAppBarPage', () => {
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

  it('applies top controls to top app bar examples', () => {
    render(
      <MemoryRouter>
        <ComponentTopAppBarPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'center' }));

    expect(screen.getAllByText(/align="center"/).length).toBeGreaterThan(0);
  });
});
