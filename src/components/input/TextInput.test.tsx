import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from '@/components/input/TextInput';
import userEvent from '@testing-library/user-event';

describe('TextInput Component', () => {
  it('should render correctly with a label and placeholder', () => {
    render(
      <TextInput
        label="Username"
        placeholder="Enter your name"
        id="username"
      />,
    );

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your name/i)).toBeInTheDocument();
  });

  it('should display the required asterisk when the required prop is true', () => {
    render(<TextInput label="Email" required id="email" />);
    const label = screen.getByText(/email/i);
    expect(label).toHaveClass("after:content-['*']");
  });

  it('should call onChange when the user types', () => {
    const handleChange = jest.fn();
    render(<TextInput label="Search" onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Kevin Lee' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('Kevin Lee');
  });

  it('should be disabled and not allow typing when the disabled prop is true', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(
      <TextInput
        label="Disabled Input"
        id="disabled-input"
        disabled
        onChange={handleChange}
      />,
    );

    const input = screen.getByLabelText(/disabled input/i);
    expect(input).toBeDisabled();

    await user.type(input, 'Attempt');

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should display an error message and apply error styles', () => {
    const errorMsg = 'Invalid email address';
    render(<TextInput label="Email" error errorMsg={errorMsg} id="email" />);

    const message = screen.getByText(errorMsg);
    expect(message).toBeInTheDocument();
    expect(message).toHaveClass('text-danger');

    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('!border-danger');
  });

  it('should render prefix and suffix elements correctly', () => {
    render(
      <TextInput
        label="Price"
        prefix={<span data-testid="prefix-icon">$</span>}
        suffix={<span data-testid="suffix-icon">USD</span>}
      />,
    );

    expect(screen.getByTestId('prefix-icon')).toBeInTheDocument();
    expect(screen.getByTestId('suffix-icon')).toBeInTheDocument();
  });

  it('should handle focus and blur events', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    render(<TextInput onFocus={handleFocus} onBlur={handleBlur} />);

    const input = screen.getByRole('textbox');

    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();

    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });

  it('should not show the spinner for number types due to custom styles', () => {
    render(<TextInput type="number" label="Age" id="age-input" />);
    const input = screen.getByLabelText(/age/i);

    expect(input).toHaveClass('[appearance:textfield]');
  });
});
