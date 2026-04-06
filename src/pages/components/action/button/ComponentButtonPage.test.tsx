import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentButtonPage from './ComponentButtonPage';

describe('ComponentButtonPage', () => {
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

  it('applies top controls to the button guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentButtonPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'lg' }));

    let previewButtons = screen.getAllByRole('button', { name: 'Button' });
    expect(
      previewButtons.some((button) => button.className.includes('h-[44px]')),
    ).toBe(true);

    fireEvent.click(screen.getByRole('button', { name: 'outline' }));

    previewButtons = screen.getAllByRole('button', { name: 'Button' });
    expect(
      previewButtons.some(
        (button) =>
          button.className.includes('border') &&
          button.className.includes('bg-transparent'),
      ),
    ).toBe(true);
  });
});
