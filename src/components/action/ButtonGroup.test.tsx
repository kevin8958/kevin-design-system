import { fireEvent, render, screen } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';

describe('ButtonGroup', () => {
  const items: Action.ButtonGroupItem[] = [
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three', disabled: true },
  ];

  it('renders all options', () => {
    render(<ButtonGroup items={items} value="one" />);

    expect(screen.getByRole('button', { name: 'One' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Two' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Three' })).toBeInTheDocument();
  });

  it('calls onChange when a new option is clicked', () => {
    const handleChange = jest.fn();

    render(<ButtonGroup items={items} value="one" onChange={handleChange} />);

    fireEvent.click(screen.getByRole('button', { name: 'Two' }));

    expect(handleChange).toHaveBeenCalledWith('two');
  });

  it('does not call onChange for disabled options', () => {
    const handleChange = jest.fn();

    render(<ButtonGroup items={items} value="one" onChange={handleChange} />);

    fireEvent.click(screen.getByRole('button', { name: 'Three' }));

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('expands to fill available width when fullWidth is true', () => {
    const { container } = render(
      <ButtonGroup items={items} value="one" fullWidth />,
    );

    expect(container.firstChild).toHaveClass('w-full');
  });

  it('passes the selected color through to active items', () => {
    render(<ButtonGroup items={items} value="one" color="danger" />);

    expect(screen.getByRole('button', { name: 'One' }).className).toContain(
      'bg-danger',
    );
  });

  it('does not call onChange when the whole group is disabled', () => {
    const handleChange = jest.fn();

    render(
      <ButtonGroup
        items={items}
        value="one"
        disabled
        onChange={handleChange}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Two' }));

    expect(handleChange).not.toHaveBeenCalled();
  });
});
