import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentMobileNavDrawerPage from './ComponentMobileNavDrawerPage';

describe('ComponentMobileNavDrawerPage', () => {
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

  it('renders the mobile nav drawer docs page', () => {
    render(
      <MemoryRouter>
        <ComponentMobileNavDrawerPage />
      </MemoryRouter>,
    );

    expect(screen.getAllByText('NavDrawer').length).toBeGreaterThan(0);
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('State')).toBeInTheDocument();
  });
});
