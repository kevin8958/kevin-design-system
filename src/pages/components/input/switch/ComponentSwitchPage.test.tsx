import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentSwitchPage from './ComponentSwitchPage';

describe('ComponentSwitchPage', () => {
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

  it('applies top controls to the switch guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentSwitchPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'lg' }));

    const switches = screen.getAllByRole('switch');
    expect(
      switches.some((switchButton) => switchButton.className.includes('h-7')),
    ).toBe(true);
  });
});
