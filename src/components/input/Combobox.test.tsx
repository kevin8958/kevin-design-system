import { fireEvent, render, screen } from '@testing-library/react';
import Combobox from './Combobox';

const options: Input.ComboboxOption[] = [
  { label: 'Design', value: 'design', description: 'Visual direction' },
  { label: 'Engineering', value: 'engineering', description: 'Product delivery' },
  { label: 'Support', value: 'support', disabled: true },
];

describe('Combobox', () => {
  it('renders the placeholder by default', () => {
    render(<Combobox options={options} value="" placeholder="Search team" />);

    expect(screen.getByRole('combobox')).toHaveAttribute(
      'placeholder',
      'Search team',
    );
  });

  it('filters options based on typed query', () => {
    render(<Combobox options={options} value="" placeholder="Search team" />);

    fireEvent.focus(screen.getByRole('combobox'));
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'engi' },
    });

    expect(screen.getByRole('option', { name: /engineering/i })).toBeInTheDocument();
    expect(screen.queryByRole('option', { name: /design/i })).not.toBeInTheDocument();
  });

  it('calls onChange when an option is selected', () => {
    const handleChange = jest.fn();
    render(
      <Combobox
        options={options}
        value=""
        placeholder="Search team"
        onChange={handleChange}
      />,
    );

    fireEvent.focus(screen.getByRole('combobox'));
    fireEvent.click(screen.getByRole('option', { name: /engineering/i }));

    expect(handleChange).toHaveBeenCalledWith('engineering');
  });

  it('does not open when disabled', () => {
    render(
      <Combobox
        options={options}
        value=""
        placeholder="Search team"
        disabled
      />,
    );

    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeDisabled();

    fireEvent.focus(trigger);

    expect(screen.queryByRole('option', { name: /design/i })).not.toBeInTheDocument();
  });
});
