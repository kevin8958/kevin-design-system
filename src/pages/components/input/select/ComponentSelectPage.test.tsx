import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentSelectPage from './ComponentSelectPage';

describe('ComponentSelectPage', () => {
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

  it('applies top controls to the select guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentSelectPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'lg' }));

    const triggers = screen.getAllByRole('combobox', {
      name: /select color|disabled|invalid/i,
    });
    expect(triggers.some((trigger) => trigger.className.includes('h-[48px]'))).toBe(true);
  });
});
