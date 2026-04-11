import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentDescriptionListPage from './ComponentDescriptionListPage';

describe('ComponentDescriptionListPage', () => {
  beforeAll(() => {
    class ResizeObserverMock {
      observe() {}
      disconnect() {}
      unobserve() {}
    }

    class IntersectionObserverMock {
      observe() {}
      disconnect() {}
      unobserve() {}
    }

    Object.defineProperty(window, 'ResizeObserver', {
      writable: true,
      value: ResizeObserverMock,
    });

    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: IntersectionObserverMock,
    });
  });

  it('applies top controls to description list guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentDescriptionListPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: '2' }));

    expect(screen.getAllByText(/columns=\{2\}/).length).toBeGreaterThan(0);
  });
});
