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

  it('shows all pages when the total page count fits within the sibling range', () => {
    render(<Pagination currentPage={3} totalPages={7} siblingCount={2} />);

    for (let page = 1; page <= 7; page += 1) {
      expect(
        screen.getByRole('button', { name: new RegExp(`page ${page}`, 'i') }),
      ).toBeInTheDocument();
    }
  });

  it('shows a left ellipsis with the trailing sibling range near the end', () => {
    render(<Pagination currentPage={6} totalPages={8} siblingCount={2} />);

    expect(screen.getByRole('button', { name: /page 1/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /page 4/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /page 5/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /page 6/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /page 7/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /page 8/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /page 2/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /page 3/i })).not.toBeInTheDocument();
  });

  it('keeps two visible siblings when the current page is 5 near the end', () => {
    render(<Pagination currentPage={5} totalPages={8} siblingCount={2} />);

    expect(screen.getByRole('button', { name: /page 1/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /page 3/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /page 4/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /page 5/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /page 6/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /page 7/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /page 8/i })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /page 8/i })).toHaveLength(1);
    expect(screen.queryByRole('button', { name: /page 2/i })).not.toBeInTheDocument();
  });
});
