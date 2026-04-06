import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentDrawerPage from './ComponentDrawerPage';

describe('ComponentDrawerPage', () => {
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

  it('applies top controls to the drawer guide previews', async () => {
    render(
      <MemoryRouter>
        <ComponentDrawerPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'xl' }));
    fireEvent.click(screen.getAllByRole('button', { name: 'Custom Footer' })[0]);

    expect(await screen.findByRole('dialog')).toBeInTheDocument();
    expect(screen.getAllByText('Action Configuration').length).toBeGreaterThan(0);
  });
});
