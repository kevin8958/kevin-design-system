import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentSkeletonPage from './ComponentSkeletonPage';

describe('ComponentSkeletonPage', () => {
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

  it('applies top controls to skeleton guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentSkeletonPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'circle' }));

    expect(screen.getAllByText(/variant="circle"/).length).toBeGreaterThan(0);
  });
});
