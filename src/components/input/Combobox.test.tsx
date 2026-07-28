import { fireEvent, render, screen } from '@testing-library/react';
import Combobox from './Combobox';

const options: Input.ComboboxOption[] = [
  { label: 'Design', value: 'design', description: 'Visual direction' },
  { label: 'Engineering', value: 'engineering', description: 'Product delivery' },
  { label: 'Support', value: 'support', disabled: true },
];

const spacedSearchOptions: Input.ComboboxOption[] = [
  { label: 'TextInput', value: 'text-input', description: 'Single line field' },
  { label: 'UploadDropzone', value: 'upload-dropzone', description: 'File upload' },
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

  it('matches options when the query includes spaces', () => {
    render(
      <Combobox
        options={spacedSearchOptions}
        value=""
        placeholder="Search component"
      />,
    );

    fireEvent.focus(screen.getByRole('combobox'));
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'text input' },
    });

    expect(screen.getByRole('option', { name: /textinput/i })).toBeInTheDocument();
    expect(
      screen.queryByRole('option', { name: /uploaddropzone/i }),
    ).not.toBeInTheDocument();
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

  it('caps the option list height to roughly maxVisibleOptions rows', () => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      get() {
        return 40;
      },
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetTop', {
      configurable: true,
      get() {
        const parent = this.parentElement as HTMLElement | null;
        if (!parent) return 0;
        return Array.from(parent.children).indexOf(this) * 40;
      },
    });

    render(
      <Combobox options={options} value="" placeholder="Search team" maxVisibleOptions={2} />,
    );

    fireEvent.focus(screen.getByRole('combobox'));

    const list = document.querySelector('ul[role="listbox"]') as HTMLElement;
    expect(list).toHaveStyle({ maxHeight: '80px' });
  });

  it('leaves the list height unset when maxVisibleOptions is not provided', () => {
    render(<Combobox options={options} value="" placeholder="Search team" />);

    fireEvent.focus(screen.getByRole('combobox'));

    const list = document.querySelector('ul[role="listbox"]') as HTMLElement;
    expect(list.style.maxHeight).toBe('');
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
