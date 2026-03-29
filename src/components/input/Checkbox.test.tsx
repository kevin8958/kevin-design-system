import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
  it('should render correctly with a label', () => {
    render(<Checkbox label="Agree to Terms" id="terms" />);
    expect(screen.getByLabelText(/agree to terms/i)).toBeInTheDocument();
  });

  it('should call onChange with correct data when clicked', () => {
    const handleChange = jest.fn();
    render(
      <Checkbox label="Subscribe" id="subscribe" onChange={handleChange} />,
    );

    const checkbox = screen.getByLabelText(/subscribe/i);
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith({
      id: 'subscribe',
      checked: true,
    });
  });

  it('should be checked when the checked prop is true', () => {
    render(<Checkbox label="Checked Item" id="checked-item" checked={true} />);

    // id인 'checked-item'이 아니라 라벨 텍스트인 'Checked Item'으로 수정합니다.
    const checkbox = screen.getByLabelText(/checked item/i) as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('should be disabled and not trigger onChange when clicked', () => {
    const handleChange = jest.fn();
    render(
      <Checkbox
        label="Disabled"
        id="disabled-cb"
        disabled
        onChange={handleChange}
      />,
    );

    const checkbox = screen.getByLabelText(/disabled/i);
    expect(checkbox).toBeDisabled();

    fireEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should apply invalid styles when invalid prop is true', () => {
    const { container } = render(
      <Checkbox label="Invalid" id="invalid-cb" invalid />,
    );
    const visualBox = container.querySelector('span');
    expect(visualBox).toHaveClass('border-danger');
  });

  it('should apply correct size classes based on the size prop', () => {
    const { container: smContainer } = render(<Checkbox id="sm" size="sm" />);
    const { container: lgContainer } = render(<Checkbox id="lg" size="lg" />);

    const smBox = smContainer.querySelector('span');
    const lgBox = lgContainer.querySelector('span');

    expect(smBox).toHaveClass('size-5');
    expect(lgBox).toHaveClass('size-8');
  });

  it('should maintain accessibility with auto-generated IDs if id is not provided', () => {
    render(<Checkbox label="Auto ID" />);
    const input = screen.getByLabelText(/auto id/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id');
  });
});
