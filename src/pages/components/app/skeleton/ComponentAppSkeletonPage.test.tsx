import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentAppSkeletonPage from './ComponentAppSkeletonPage';

describe('ComponentAppSkeletonPage', () => {
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

  it('renders the app skeleton guides without crashing', () => {
    render(
      <MemoryRouter>
        <ComponentAppSkeletonPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'App Skeleton' }),
    ).toBeInTheDocument();
    expect(screen.getAllByText('Base Placeholder').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Animated').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Static').length).toBeGreaterThan(0);
  });
});
