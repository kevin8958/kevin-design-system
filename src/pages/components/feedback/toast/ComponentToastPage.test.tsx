import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentToastPage from './ComponentToastPage';

describe('ComponentToastPage', () => {
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

  it('applies top controls to toast guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentToastPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'warning' }));

    expect(screen.getAllByText(/variant="warning"/).length).toBeGreaterThan(0);
    expect(screen.getByText('System')).toBeInTheDocument();
    expect(screen.getByText('Provider Props')).toBeInTheDocument();
  });
});
