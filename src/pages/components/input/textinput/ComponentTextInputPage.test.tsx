import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentTextInputPage from './ComponentTextInputPage';

describe('ComponentTextInputPage', () => {
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

  it('applies top controls to the text input guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentTextInputPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'lg' }));

    const inputs = screen.getAllByRole('textbox');
    expect(inputs.some((input) => input.className.includes('h-[48px]'))).toBe(
      true,
    );
  });
});
