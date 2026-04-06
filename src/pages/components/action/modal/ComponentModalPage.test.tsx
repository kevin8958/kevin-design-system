import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentModalPage from './ComponentModalPage';

describe('ComponentModalPage', () => {
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

  it('applies top controls to the modal guide previews', async () => {
    const { baseElement } = render(
      <MemoryRouter>
        <ComponentModalPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'lg' }));
    fireEvent.click(screen.getByRole('button', { name: 'warning' }));
    fireEvent.click(screen.getByRole('button', { name: 'bottom' }));

    fireEvent.click(screen.getAllByRole('button', { name: 'Button' })[0]);

    expect(await screen.findByRole('dialog')).toBeInTheDocument();
    await waitFor(() => {
      const panel = baseElement.querySelector('.border-warning\\!');
      expect(panel).toBeInTheDocument();
    });
  });
});
