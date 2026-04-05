import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('renders the current page as active', () => {
    render(<Pagination currentPage={3} totalPages={8} />);

    expect(screen.getByRole('button', { name: /page 3/i })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  it('calls onPageChange when clicking a page button', () => {
    const handleChange = jest.fn();
    render(
      <Pagination currentPage={2} totalPages={5} onPageChange={handleChange} />,
    );

    fireEvent.click(screen.getByRole('button', { name: /page 4/i }));

    expect(handleChange).toHaveBeenCalledWith(4);
  });

  it('calls onPageChange when clicking next', () => {
    const handleChange = jest.fn();
    render(
      <Pagination currentPage={2} totalPages={5} onPageChange={handleChange} />,
    );

    fireEvent.click(screen.getByRole('button', { name: /next page/i }));

    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it('disables previous on the first page', () => {
    render(<Pagination currentPage={1} totalPages={5} />);

    expect(
      screen.getByRole('button', { name: /previous page/i }),
    ).toBeDisabled();
  });

  it('does not trigger page changes when disabled', () => {
    const handleChange = jest.fn();
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        disabled
        onPageChange={handleChange}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /page 4/i }));

    expect(handleChange).not.toHaveBeenCalled();
  });
});
