import { render, screen, fireEvent } from '@testing-library/react';
import UploadDropzone from './UploadDropzone';

describe('UploadDropzone', () => {
  it('renders with label and helper text', () => {
    render(
      <UploadDropzone
        label="Project Files"
        helperText="Upload one or more documents."
        files={[]}
        onChange={() => {}}
      />,
    );

    expect(screen.getByText(/project files/i)).toBeInTheDocument();
    expect(screen.getByText(/upload one or more documents/i)).toBeInTheDocument();
  });

  it('calls onChange when files are selected from the input', () => {
    const handleChange = jest.fn();
    render(<UploadDropzone files={[]} onChange={handleChange} />);

    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(['resume'], 'resume.pdf', {
      type: 'application/pdf',
    });

    fireEvent.change(input, { target: { files: [file] } });

    expect(handleChange).toHaveBeenCalledWith([file]);
  });

  it('limits the selected files when multiple is false', () => {
    const handleChange = jest.fn();
    render(<UploadDropzone files={[]} multiple={false} onChange={handleChange} />);

    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    const firstFile = new File(['a'], 'first.png', { type: 'image/png' });
    const secondFile = new File(['b'], 'second.png', { type: 'image/png' });

    fireEvent.change(input, { target: { files: [firstFile, secondFile] } });

    expect(handleChange).toHaveBeenCalledWith([firstFile]);
  });

  it('does not trigger browse interaction when disabled', () => {
    render(<UploadDropzone disabled files={[]} onChange={() => {}} />);

    const button = screen.getByText(/browse files/i).closest('button');
    expect(button).not.toBeNull();
    expect(button).toBeDisabled();

    const dropzone = screen.getByRole('button', {
      name: /upload files/i,
    });
    expect(dropzone).toHaveAttribute('aria-disabled', 'true');
  });

  it('removes a selected file when the remove action is pressed', () => {
    const handleChange = jest.fn();
    const file = new File(['avatar'], 'avatar.png', { type: 'image/png' });

    render(<UploadDropzone files={[file]} onChange={handleChange} />);

    fireEvent.click(screen.getByRole('button', { name: /remove avatar\.png/i }));

    expect(handleChange).toHaveBeenCalledWith([]);
  });
});
