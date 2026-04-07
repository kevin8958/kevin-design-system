import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentPaginationPage from './ComponentPaginationPage';

describe('ComponentPaginationPage', () => {
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

  it('renders pagination guides and updates sibling controls', () => {
    render(
      <MemoryRouter>
        <ComponentPaginationPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Range' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'State' })).toBeInTheDocument();

    const zeroButton = screen.getByRole('button', { name: '0' });
    fireEvent.click(zeroButton);

    expect(zeroButton).toHaveAttribute('aria-pressed', 'true');
  });
});
