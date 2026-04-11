import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import GnbSearch from './GnbSearch';

const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

const RenderWithRouter = () => (
  <MemoryRouter initialEntries={['/components']}>
    <Routes>
      <Route
        path="*"
        element={
          <>
            <GnbSearch />
            <LocationDisplay />
          </>
        }
      />
    </Routes>
  </MemoryRouter>
);

describe('GnbSearch', () => {
  it('opens and filters search results', () => {
    render(<RenderWithRouter />);

    fireEvent.click(screen.getByRole('button', { name: /open search/i }));
    fireEvent.change(
      screen.getByPlaceholderText(/search components, categories, or docs/i),
      {
        target: { value: 'popover' },
      },
    );

    expect(screen.getByText('Popover')).toBeInTheDocument();
    expect(screen.queryByText('Typography')).not.toBeInTheDocument();
  });

  it('opens with the keyboard shortcut', () => {
    render(<RenderWithRouter />);

    fireEvent.keyDown(window, { key: 'k', metaKey: true });

    expect(
      screen.getByPlaceholderText(/search components, categories, or docs/i),
    ).toBeInTheDocument();
  });

  it('moves into results with arrow keys and navigates on enter', () => {
    render(<RenderWithRouter />);

    fireEvent.click(screen.getByRole('button', { name: /open search/i }));

    const input = screen.getByPlaceholderText(
      /search components, categories, or docs/i,
    );

    fireEvent.change(input, {
      target: { value: 'popover' },
    });
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/components/action/popover',
    );
  });
});
