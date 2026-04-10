import { fireEvent, render, screen } from '@testing-library/react';
import Textarea from './Textarea';

describe('Textarea', () => {
  it('renders label and placeholder', () => {
    render(
      <Textarea
        label="Description"
        placeholder="Write a short summary"
        id="description"
      />,
    );

    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/write a short summary/i),
    ).toBeInTheDocument();
  });

  it('calls onChange when typing', () => {
    const handleChange = jest.fn();

    render(<Textarea label="Description" onChange={handleChange} />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'New content' },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('shows error message and error styles', () => {
    render(
      <Textarea
        label="Description"
        error
        errorMsg="This field is required."
      />,
    );

    expect(screen.getByText('This field is required.')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveClass('!border-danger');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Textarea label="Description" disabled />);

    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
