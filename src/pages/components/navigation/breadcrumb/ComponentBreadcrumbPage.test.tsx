import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentBreadcrumbPage from './ComponentBreadcrumbPage';

describe('ComponentBreadcrumbPage', () => {
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

  it('renders breadcrumb guides', () => {
    render(
      <MemoryRouter>
        <ComponentBreadcrumbPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Type' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'State' })).toBeInTheDocument();
  });
});
