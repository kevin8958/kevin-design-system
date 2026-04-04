import { render, screen, fireEvent } from '@testing-library/react';
import CustomDatePicker from './DatePicker';
import dayjs from 'dayjs';

describe('CustomDatePicker', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders with placeholder text', () => {
    render(
      <CustomDatePicker
        type="single"
        value={null}
        placeholder="Pick a day"
        onChange={mockOnChange}
      />,
    );
    expect(screen.getByPlaceholderText('Pick a day')).toBeInTheDocument();
  });

  it('calls onChange when a date is selected in single mode', () => {
    render(
      <CustomDatePicker type="single" value={null} onChange={mockOnChange} />,
    );

    const input = screen.getByRole('textbox');
    fireEvent.click(input);

    // 캘린더에서 '15'일 선택 (현재 월 기준)
    const day15 = screen.getByText('15');
    fireEvent.click(day15);

    expect(mockOnChange).toHaveBeenCalled();
    const calledDate = mockOnChange.mock.calls[0][0];
    expect(dayjs(calledDate).date()).toBe(15);
  });

  it('does not open calendar when disabled', () => {
    render(
      <CustomDatePicker
        type="single"
        value={null}
        disabled
        onChange={mockOnChange}
      />,
    );
    const input = screen.getByRole('textbox');

    expect(input).toBeDisabled();
    fireEvent.click(input);

    // 캘린더 헤더가 나타나지 않아야 함
    expect(
      screen.queryByText(
        /January|February|March|April|May|June|July|August|September|October|November|December/,
      ),
    ).not.toBeInTheDocument();
  });

  it('displays the correct formatted date in the input', () => {
    const testDate = new Date(2026, 3, 2); // Apr 02, 2026
    render(
      <CustomDatePicker
        type="single"
        value={testDate}
        onChange={mockOnChange}
      />,
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('Apr 02, 2026');
  });
});
