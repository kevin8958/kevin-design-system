import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentUploadDropzonePage from './ComponentUploadDropzonePage';

describe('ComponentUploadDropzonePage', () => {
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

  it('renders the selection and state guides', () => {
    render(
      <MemoryRouter>
        <ComponentUploadDropzonePage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Selection Mode' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'States' }),
    ).toBeInTheDocument();
  });
});
