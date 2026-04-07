import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentRadioPage from './ComponentRadioPage';

describe('ComponentRadioPage', () => {
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

  it('applies top controls to the radio guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentRadioPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'lg' }));

    const radios = screen.getAllByRole('radio');
    expect(
      radios.some((radio) =>
        radio.closest('label')?.className.includes('p-5'),
      ),
    ).toBe(true);
  });
});
