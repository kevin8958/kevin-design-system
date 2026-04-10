import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentComboboxPage from './ComponentComboboxPage';

describe('ComponentComboboxPage', () => {
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

  it('applies top controls to the combobox guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentComboboxPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'lg' }));

    const comboboxes = screen.getAllByRole('combobox');
    expect(
      comboboxes.some((combobox) => combobox.parentElement?.className.includes('h-[48px]')),
    ).toBe(true);
  });
});
