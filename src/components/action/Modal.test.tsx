import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  const defaultProps: Action.ModalProps = {
    isOpen: true,
    onClose: jest.fn(),
    title: 'Modal Title',
    children: <div>Modal Content</div>,
  };

  it('should render title and children correctly', async () => {
    render(<Modal {...defaultProps} />);

    // Portal로 렌더링되므로 findBy를 사용해 비동기로 요소를 찾습니다.
    expect(await screen.findByText('Modal Title')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('should not render when isOpen is false', () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByText('Modal Title')).not.toBeInTheDocument();
  });

  it('should call onClose when cancel button is clicked', async () => {
    render(<Modal {...defaultProps} />);
    const cancelButton = await screen.findByRole('button', { name: /cancel/i });
    fireEvent.click(cancelButton);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('should apply state-specific styles', async () => {
    // Portal 대응을 위해 baseElement를 사용하거나 screen에서 직접 쿼리합니다.
    const { baseElement } = render(<Modal {...defaultProps} state="danger" />);

    await waitFor(() => {
      // Tailwind의 ! (important) 클래스는 선택자에서 이스케이프 처리가 필요합니다.
      const panel = baseElement.querySelector('.border-danger\\!');
      expect(panel).toBeInTheDocument();
    });
  });

  it('should show loading spinner on confirm button when loading is true', async () => {
    render(<Modal {...defaultProps} loading={true} />);

    // loading일 때는 텍스트가 없을 수 있으므로, role로만 찾거나 버튼을 특정합니다.
    const buttons = await screen.findAllByRole('button');
    // 보통 footer의 마지막 버튼이 Confirm 버튼입니다.
    const confirmButton = buttons[buttons.length - 1];

    // Button 컴포넌트에 loading 프롭이 전달되었는지 확인 (구현 방식에 따라 다름)
    // 아래는 제공된 로그에서 SVG(animate-spin)가 존재하는지 확인하는 방식입니다.
    expect(confirmButton.querySelector('.animate-spin')).toBeInTheDocument();
    expect(confirmButton).toBeDisabled();
  });
});
