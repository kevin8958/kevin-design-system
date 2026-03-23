import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Drawer from './Drawer';

describe('Drawer Component', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    onConfirm: jest.fn(),
    title: 'Test Drawer',
  };

  it('should render the title and children when open', () => {
    render(
      <Drawer {...defaultProps}>
        <div>Drawer Content</div>
      </Drawer>,
    );

    expect(screen.getByText('Test Drawer')).toBeInTheDocument();
    expect(screen.getByText('Drawer Content')).toBeInTheDocument();
  });

  it('should not render when isOpen is false', () => {
    render(
      <Drawer {...defaultProps} isOpen={false}>
        <div>Drawer Content</div>
      </Drawer>,
    );

    expect(screen.queryByText('Test Drawer')).not.toBeInTheDocument();
  });

  it('should call onClose when the close icon button is clicked', () => {
    render(<Drawer {...defaultProps} />);

    // LuX 아이콘이 포함된 닫기 버튼 클릭
    const closeButton = screen.getAllByRole('button')[0];
    fireEvent.click(closeButton);

    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('should call onConfirm when the confirm button is clicked', () => {
    render(<Drawer {...defaultProps} confirmText="Submit" />);

    const confirmButton = screen.getByText('Submit');
    fireEvent.click(confirmButton);

    expect(defaultProps.onConfirm).toHaveBeenCalled();
  });

  it('should show loading spinner and disable the button when loading is true', async () => {
    render(<Drawer {...defaultProps} loading={true} confirmText="Submit" />);

    // 1. 텍스트가 사라졌으므로, 버튼들 중 마지막 버튼(Confirm 버튼)을 가져옵니다.
    const buttons = screen.getAllByRole('button');
    const confirmButton = buttons[buttons.length - 1];

    // 2. 버튼이 비활성화 되었는지 확인
    expect(confirmButton).toBeDisabled();

    // 3. 버튼 내부에 스피너(SVG)가 렌더링 되었는지 확인 (class 기반)
    const spinner = confirmButton.querySelector('svg.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('should hide the footer when hideBottom is true', () => {
    render(<Drawer {...defaultProps} hideBottom={true} confirmText="Submit" />);

    expect(screen.queryByText('Submit')).not.toBeInTheDocument();
    expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
  });

  it('should trigger onClose when clicking the backdrop', async () => {
    render(<Drawer {...defaultProps} />);

    // act 경고를 방지하기 위해 backdrop 클릭 후의 상태 변화를 기다립니다.
    const backdrop = document.querySelector('.fixed.inset-0.bg-black\\/20');
    if (backdrop) {
      fireEvent.click(backdrop);
    }

    await waitFor(
      () => {
        expect(defaultProps.onClose).toHaveBeenCalled();
      },
      { timeout: 2000 },
    ); // Transition 애니메이션 시간을 고려
  });
});
