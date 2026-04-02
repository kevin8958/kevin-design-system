import { render, screen, fireEvent } from '@testing-library/react';
import Switch from './Switch';

describe('Switch Component', () => {
  it('should render label and description correctly', () => {
    render(
      <Switch label="Active Status" description="Enable or disable status" />,
    );

    expect(screen.getByText('Active Status')).toBeInTheDocument();
    expect(screen.getByText('Enable or disable status')).toBeInTheDocument();
  });

  it('should toggle state and call onChange when clicked', () => {
    const handleChange = jest.fn();
    render(<Switch label="Toggle" checked={false} onChange={handleChange} />);

    const switchButton = screen.getByRole('switch');
    fireEvent.click(switchButton);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('should reflect the checked state via aria-checked', () => {
    const { rerender } = render(<Switch label="Toggle" checked={true} />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');

    rerender(<Switch label="Toggle" checked={false} />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
  });

  it('should not call onChange when disabled', () => {
    const handleChange = jest.fn();
    render(<Switch label="Disabled" disabled onChange={handleChange} />);

    const switchButton = screen.getByRole('switch');
    fireEvent.click(switchButton);

    expect(handleChange).not.toHaveBeenCalled();
    expect(switchButton).toBeDisabled();
  });

  it('should render error message and apply invalid styles', () => {
    render(
      <Switch
        label="Invalid"
        invalid
        errorMsg="Error occurred"
        checked={false}
      />,
    );

    expect(screen.getByText('Error occurred')).toBeInTheDocument();

    const switchButton = screen.getByRole('switch');
    expect(switchButton).toHaveClass('bg-danger');
  });

  it('should trigger toggle when clicking the label', () => {
    const handleChange = jest.fn();
    render(
      <Switch label="Label Click" checked={false} onChange={handleChange} />,
    );

    const labelText = screen.getByText('Label Click');
    fireEvent.click(labelText);

    expect(handleChange).toHaveBeenCalledWith(true);
  });
});
