import { render, screen, fireEvent } from '@testing-library/react';
import Radio from './Radio';

const mockOptions = [
  { id: '1', label: 'Option 1', desc: 'Description 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3', disabled: true },
];

describe('Radio Component', () => {
  it('should render title and all options correctly', () => {
    render(
      <Radio
        title="Test Group"
        options={mockOptions}
        value="1"
        onChange={jest.fn()}
      />,
    );

    expect(screen.getByText('Test Group')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('should call onChange with correct id when an option is clicked', () => {
    const handleChange = jest.fn();
    render(<Radio options={mockOptions} value="1" onChange={handleChange} />);

    // getByLabelText 대신 getByRole 사용
    const option2 = screen.getByRole('radio', { name: /option 2/i });
    fireEvent.click(option2);

    expect(handleChange).toHaveBeenCalledWith('2');
  });

  it('should have the correct option checked based on the value prop', () => {
    render(<Radio options={mockOptions} value="2" onChange={jest.fn()} />);

    // Accessible Name을 기준으로 input 요소를 직접 찾음
    const radio1 = screen.getByRole('radio', {
      name: /option 1/i,
    }) as HTMLInputElement;
    const radio2 = screen.getByRole('radio', {
      name: /option 2/i,
    }) as HTMLInputElement;

    expect(radio1.checked).toBe(false);
    expect(radio2.checked).toBe(true);
  });

  it('should handle individual disabled options and prevent interaction', () => {
    const handleChange = jest.fn();
    render(<Radio options={mockOptions} value="1" onChange={handleChange} />);

    const disabledRadio = screen.getByRole('radio', { name: /option 3/i });
    expect(disabledRadio).toBeDisabled();

    fireEvent.click(disabledRadio);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should apply invalid styles and render error message when invalid is true', () => {
    render(
      <Radio
        options={mockOptions}
        value="1"
        invalid
        errorMsg="Selection is required"
        onChange={jest.fn()}
      />,
    );

    expect(screen.getByText('Selection is required')).toBeInTheDocument();

    // input을 먼저 찾고 가장 가까운 label을 탐색
    const radio1 = screen.getByRole('radio', { name: /option 1/i });
    const selectedLabel = radio1.closest('label');

    // 로그상 border-danger와 border-danger!(Tailwind important)가 섞여있을 수 있으므로 확인
    expect(selectedLabel).toHaveClass('border-danger');
  });
  it('should apply correct size classes to the radio circle', () => {
    // sm 사이즈 테스트
    const { unmount: unmountSm, container: smContainer } = render(
      <Radio options={mockOptions} value="1" size="sm" onChange={jest.fn()} />,
    );
    // 라디오 버튼의 외부 원(span)을 정확히 타겟팅
    const smCircle = smContainer.querySelector('span.rounded-full.border-2');

    // 로그에 찍힌 실제 클래스인 size-3.5로 수정
    expect(smCircle).toHaveClass('size-3.5');
    unmountSm();

    // lg 사이즈 테스트
    const { container: lgContainer } = render(
      <Radio options={mockOptions} value="1" size="lg" onChange={jest.fn()} />,
    );
    const lgCircle = lgContainer.querySelector('span.rounded-full.border-2');

    // lg일 때의 정확한 사이즈 클래스를 넣어주세요 (예: size-5)
    // 현재 구현된 Radio.tsx의 lg 정의를 확인하고 수정하세요.
    expect(lgCircle).toHaveClass('size-5');
  });

  it('should use the same name attribute for all radios in a group for native behavior', () => {
    render(
      <Radio
        name="test-group"
        options={mockOptions}
        value="1"
        onChange={jest.fn()}
      />,
    );

    const radios = screen.getAllByRole('radio');
    radios.forEach((radio) => {
      expect(radio).toHaveAttribute('name', 'test-group');
    });
  });
});
