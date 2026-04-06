import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentDropdownPage from './ComponentDropdownPage';

describe('ComponentDropdownPage', () => {
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

  it('applies top controls to the dropdown guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentDropdownPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'lg' }));

    let previewButtons = screen.getAllByRole('button', { name: 'Dropdown' });
    expect(
      previewButtons.some((button) => button.className.includes('h-[44px]')),
    ).toBe(true);

    fireEvent.click(screen.getByRole('button', { name: 'outline' }));

    previewButtons = screen.getAllByRole('button', { name: 'Dropdown' });
    expect(
      previewButtons.some(
        (button) =>
          button.className.includes('border') &&
          button.className.includes('bg-transparent'),
      ),
    ).toBe(true);
  });
});
