import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentTablePage from './ComponentTablePage';

describe('ComponentTablePage', () => {
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

  it('renders table guides', () => {
    render(
      <MemoryRouter>
        <ComponentTablePage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Type' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'State' })).toBeInTheDocument();
  });
});
