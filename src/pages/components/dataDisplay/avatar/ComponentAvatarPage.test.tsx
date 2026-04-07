import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentAvatarPage from './ComponentAvatarPage';

describe('ComponentAvatarPage', () => {
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

  it('applies top controls to avatar guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentAvatarPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'lg' }));

    expect(screen.getAllByText(/size="lg"/).length).toBeGreaterThan(0);
  });
});
