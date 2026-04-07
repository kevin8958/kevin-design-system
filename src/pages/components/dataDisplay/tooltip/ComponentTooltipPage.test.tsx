import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentTooltipPage from './ComponentTooltipPage';

describe('ComponentTooltipPage', () => {
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

  it('applies top controls to tooltip guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentTooltipPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'primary' }));

    expect(screen.getAllByText(/color="primary"/).length).toBeGreaterThan(0);
  });
});
