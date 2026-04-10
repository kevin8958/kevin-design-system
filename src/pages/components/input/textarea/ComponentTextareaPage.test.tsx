import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentTextareaPage from './ComponentTextareaPage';

describe('ComponentTextareaPage', () => {
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

  it('applies top controls to the textarea guide previews', () => {
    render(
      <MemoryRouter>
        <ComponentTextareaPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'lg' }));

    const textareas = screen.getAllByRole('textbox');
    expect(
      textareas.some((textarea) => textarea.className.includes('min-h-[148px]')),
    ).toBe(true);
  });
});
