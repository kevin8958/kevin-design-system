import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentAccordionPage from './ComponentAccordionPage';

describe('ComponentAccordionPage', () => {
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

  it('updates code examples when the controller changes', () => {
    render(
      <MemoryRouter>
        <ComponentAccordionPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: /lg/i }));
    fireEvent.click(screen.getByRole('button', { name: /multiple/i }));
    fireEvent.click(screen.getAllByRole('button', { name: 'Code' })[0]);

    expect(screen.getAllByText(/size="lg"/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/type="multiple"/).length).toBeGreaterThan(0);
  });
});
