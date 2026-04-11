import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentStepperPage from './ComponentStepperPage';

describe('ComponentStepperPage', () => {
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

  it('applies top controls to stepper guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentStepperPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'vertical' }));

    expect(screen.getAllByText(/orientation="vertical"/).length).toBeGreaterThan(
      0,
    );
  });
});
