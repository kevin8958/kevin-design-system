import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentButtonGroupPage from './ComponentButtonGroupPage';

describe('ComponentButtonGroupPage', () => {
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

  it('applies top controls to button group guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentButtonGroupPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'lg' }));

    let previewButtons = screen.getAllByRole('button', { name: 'Button' });
    expect(
      previewButtons.some((button) => button.className.includes('h-[44px]')),
    ).toBe(true);

    fireEvent.click(screen.getByRole('button', { name: 'danger' }));

    previewButtons = screen.getAllByRole('button', { name: 'Button' });
    expect(
      previewButtons.some((button) => button.className.includes('bg-danger')),
    ).toBe(true);
  });
});
