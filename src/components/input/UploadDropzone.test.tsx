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

  it('overrides the default copy with the text props', () => {
    const file = new File(['avatar'], 'avatar.png', { type: 'image/png' });

    render(
      <UploadDropzone
        files={[file]}
        accept="image/*"
        onChange={() => {}}
        dragText="파일을 끌어다 놓으세요"
        selectedText={(count) => `${count}개 선택됨`}
        browseButtonText="파일 찾기"
        acceptedText={(accept) => `허용: ${accept}`}
        removeFileLabel={(name) => `${name} 삭제`}
        uploadAriaLabel="파일 업로드"
      />,
    );

    expect(screen.getByText('1개 선택됨')).toBeInTheDocument();
    expect(screen.getByText('파일 찾기')).toBeInTheDocument();
    expect(screen.getByText('허용: image/*')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'avatar.png 삭제' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '파일 업로드' })).toBeInTheDocument();
  });

  it('renders the default English copy when not simple', () => {
    render(<UploadDropzone files={[]} accept="image/*" onChange={() => {}} />);

    expect(screen.getByText(/drag files here or browse/i)).toBeInTheDocument();
    expect(screen.getByText(/browse files/i)).toBeInTheDocument();
    expect(screen.getByText(/accepted: image\/\*/i)).toBeInTheDocument();
  });

  it('drops the default English copy in simple mode', () => {
    render(<UploadDropzone simple files={[]} accept="image/*" onChange={() => {}} />);

    expect(screen.queryByText(/drag files here or browse/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/browse files/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/accepted: image\/\*/i)).not.toBeInTheDocument();
  });

  it('applies classes to the dropzone surface, not the outer wrapper', () => {
    render(
      <UploadDropzone
        label="Project Files"
        files={[]}
        onChange={() => {}}
        classes="bg-white/10 backdrop-blur-md"
      />,
    );

    const dropzone = screen.getByRole('button', { name: /project files/i });
    expect(dropzone).toHaveClass('bg-white/10', 'backdrop-blur-md');
    expect(screen.getByText('Project Files').closest('div')).not.toHaveClass(
      'bg-white/10',
    );
  });

  it('still shows an explicit helperText in simple mode', () => {
    render(
      <UploadDropzone
        simple
        files={[]}
        helperText="필요한 파일을 올려주세요"
        onChange={() => {}}
      />,
    );

    expect(screen.getByText('필요한 파일을 올려주세요')).toBeInTheDocument();
  });
});
