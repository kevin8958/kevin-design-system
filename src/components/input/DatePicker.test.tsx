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
    const testDate = new Date(2026, 3, 2); // Apr 2, 2026
    render(
      <CustomDatePicker
        type="single"
        value={testDate}
        onChange={mockOnChange}
      />,
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('Apr 2, 2026');
  });

  it('applies a custom dateFormat', () => {
    const testDate = new Date(2026, 3, 2); // Apr 2, 2026
    render(
      <CustomDatePicker
        type="single"
        value={testDate}
        dateFormat="YYYY년 MM월 DD일"
        onChange={mockOnChange}
      />,
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('2026년 04월 02일');
  });

  it('applies a custom dateFormat to range selections', () => {
    const startDate = new Date(2026, 3, 6);
    const endDate = new Date(2026, 3, 10);

    render(
      <CustomDatePicker
        type="range"
        isRange
        value={null}
        startDate={startDate}
        endDate={endDate}
        dateFormat="YYYY.MM.DD"
        onChange={mockOnChange}
      />,
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('2026.04.06 - 2026.04.10');
  });

  it('honors type="range" as an alternative to isRange for displaying startDate/endDate', () => {
    const startDate = new Date(2026, 3, 6);
    const endDate = new Date(2026, 3, 10);

    render(
      <CustomDatePicker
        type="range"
        value={null}
        startDate={startDate}
        endDate={endDate}
        dateFormat="YYYY.MM.DD"
        onChange={mockOnChange}
      />,
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('2026.04.06 - 2026.04.10');
  });

  it('displays helper text for incomplete range selection', () => {
    const startDate = new Date(2026, 3, 6);

    render(
      <CustomDatePicker
        type="range"
        isRange
        value={null}
        startDate={startDate}
        endDate={undefined}
        onChange={mockOnChange}
      />,
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('Apr 6, 2026');
  });

  it('renders error message when isError and errorMsg are provided', () => {
    render(
      <CustomDatePicker
        type="single"
        value={new Date(2026, 3, 2)}
        isError
        errorMsg="Please select a valid date."
        onChange={mockOnChange}
      />,
    );

    expect(screen.getByText(/please select a valid date\./i)).toBeInTheDocument();
  });

  it('applies a custom focusColor', () => {
    render(
      <CustomDatePicker
        type="single"
        value={null}
        focusColor="success"
        onChange={mockOnChange}
      />,
    );

    expect(screen.getByRole('textbox')).toHaveClass('focus:!ring-success');
  });

  it('keeps the error color even when focusColor is set', () => {
    render(
      <CustomDatePicker
        type="single"
        value={null}
        isError
        focusColor="success"
        onChange={mockOnChange}
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('!border-danger', 'focus:!ring-danger');
    expect(input).not.toHaveClass('focus:!ring-success');
  });
});
