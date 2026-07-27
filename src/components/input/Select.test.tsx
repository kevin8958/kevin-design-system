import { fireEvent, render, screen } from '@testing-library/react';
import Select from './Select';

describe('Select', () => {
  const options: Input.SelectOption[] = [
    { label: 'Primary', value: 'primary' },
    { label: 'Neutral', value: 'neutral' },
    { label: 'Danger', value: 'danger', disabled: true },
  ];

  it('renders placeholder by default', () => {
    render(<Select options={options} value="" placeholder="Select color" />);

    expect(screen.getByRole('combobox', { name: /select color/i })).toBeInTheDocument();
  });

  it('opens options and calls onChange', () => {
    const handleChange = jest.fn();

    render(
      <Select
        options={options}
        value=""
        placeholder="Select color"
        onChange={handleChange}
      />,
    );

    fireEvent.click(screen.getByRole('combobox', { name: /select color/i }));
    fireEvent.click(screen.getByRole('option', { name: 'Neutral' }));

    expect(handleChange).toHaveBeenCalledWith('neutral');
  });

  it('does not open when disabled', () => {
    render(<Select options={options} value="" placeholder="Disabled" disabled />);

    const trigger = screen.getByRole('combobox', { name: /disabled/i });
    expect(trigger).toBeDisabled();

    fireEvent.click(trigger);

    expect(screen.queryByRole('option', { name: 'Primary' })).not.toBeInTheDocument();
  });

  it('applies a custom focusColor', () => {
    render(
      <Select options={options} value="" placeholder="Pick" focusColor="warning" />,
    );

    expect(screen.getByRole('combobox', { name: /pick/i })).toHaveClass(
      'focus:ring-warning',
    );
  });

  it('keeps the invalid color even when focusColor is set', () => {
    render(
      <Select options={options} value="" placeholder="Pick" invalid focusColor="warning" />,
    );

    const trigger = screen.getByRole('combobox', { name: /pick/i });
    expect(trigger).toHaveClass('!border-danger', 'focus:ring-danger');
    expect(trigger).not.toHaveClass('focus:ring-warning');
  });
});
