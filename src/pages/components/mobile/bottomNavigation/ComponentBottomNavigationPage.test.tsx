import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentBottomNavigationPage from './ComponentBottomNavigationPage';

describe('ComponentBottomNavigationPage', () => {
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

  it('renders the mobile bottom navigation guides', () => {
    render(
      <MemoryRouter>
        <ComponentBottomNavigationPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'BottomNavigation' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
