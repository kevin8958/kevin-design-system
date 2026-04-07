import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentDatePickerPage from './ComponentDatePickerPage';

describe('ComponentDatePickerPage', () => {
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

  it('applies top controls to the datepicker guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentDatePickerPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'lg' }));

    const inputs = screen.getAllByRole('textbox');
    expect(inputs.some((input) => input.className.includes('h-[48px]'))).toBe(
      true,
    );
  });
});
