'use client';

import classNames from 'classnames';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import isBetween from 'dayjs/plugin/isBetween';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

import Button from '@/components/action/Button';

import 'react-datepicker/dist/react-datepicker.css';
import './datepicker-custom.css';

dayjs.extend(isBetween);

const CustomDatePicker = (props: Input.DatepickerProps) => {
  const {
    classes,
    variant = 'contain',
    value,
    minDate,
    maxDate,
    isError,
    isFilter,
    disabled,
    hideHeaderButtons,
    placeholder,
    isRange = false,
    isMultiple = false,
    startDate,
    endDate,
    size = 'md',
    onChange,
  } = props;
  const [start, setStart] = useState<Date | null>(startDate || null);
  const [end, setEnd] = useState<Date | null>(endDate || null);
  const [prevProps, setPrevProps] = useState({ startDate, endDate });

  if (startDate !== prevProps.startDate || endDate !== prevProps.endDate) {
    setStart(startDate || null);
    setEnd(endDate || null);
    setPrevProps({ startDate, endDate });
  }

  return (
    <DatePicker
      portalId="datepicker-portal"
      className={classNames(
        'box-border h-full w-full !rounded-lg px-4 text-center !text-sm !outline-none placeholder:text-neutral-300 focus:z-10',
        classes,
        {
          'border-danger focus:!border-danger !border-2': isError,
          'border-neutral-200 focus:!border-2 focus:!border-neutral-600 dark:border-neutral-700 dark:focus:!border-primary-500':
            !isError && !isFilter,
          'border-neutral-200 focus:!border-neutral-600 dark:border-neutral-700':
            !isError && isFilter,
          'bg-neutral-50 cursor-not-allowed !text-[#8C9097] dark:bg-neutral-800':
            disabled,
          'h-[32px] min-h-[32px]': size === 'sm',
          'h-[40px] min-h-[40px]': size === 'md',
          'h-[48px] min-h-[48px]': size === 'lg',
          'bg-white text-neutral-800 hover:bg-neutral-50 active:bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800 disabled:hover:!bg-white dark:disabled:hover:!bg-neutral-900':
            variant === 'contain',
          'border border-neutral-600 bg-transparent text-neutral-800 dark:text-neutral-100':
            variant === 'outline',
          'bg-transparent text-neutral-800 dark:text-neutral-300':
            variant === 'clear',
        },
      )}
      dateFormat="MMM dd, yyyy"
      openToDate={value || undefined}
      selected={value || null}
      disabled={disabled}
      startDate={start || null}
      endDate={end || null}
      wrapperClassName={classNames('w-full', isRange ? 'range' : 'single')}
      {...(isRange
        ? { selectsRange: true as const }
        : isMultiple
          ? { selectsMultiple: true as const }
          : {})}
      placeholderText={placeholder || '-'}
      onChange={(update: Date | null | [Date | null, Date | null] | Date[]) => {
        if (!onChange) return;

        if (isRange && Array.isArray(update)) {
          const s = update[0] ?? null;
          const e = update[1] ?? null;
          setStart(s);
          setEnd(e);
          onChange([s, e]);
          return;
        }

        if (isMultiple && Array.isArray(update)) {
          onChange(update);
          return;
        }

        if (update instanceof Date) {
          onChange(dayjs(update).startOf('day').toDate());
        } else if (update === null) {
          onChange(null);
        }
      }}
      tabIndex={0}
      minDate={minDate || undefined}
      maxDate={maxDate || undefined}
      showPopperArrow={false}
      disabledKeyboardNavigation
      calendarClassName="bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white rounded-xl! border border-neutral-200 dark:border-neutral-100/30! px-2 pb-2 shadow-lg!"
      dayClassName={(d) =>
        classNames(
          'inline-block size-8! text-center bg-transparent rounded-lg! text-sm cursor-pointer box-border transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800/50! text-neutral-700 dark:text-neutral-200!',
          !isRange &&
            value &&
            dayjs(d).isSame(dayjs(value), 'day') &&
            'bg-secondary-600 dark:!bg-primary-400 text-white dark:text-neutral-900! hover:bg-secondary-600! dark:hover:bg-primary-400/80!',
          isRange &&
            start &&
            end &&
            dayjs(d).isBetween(dayjs(start), dayjs(end), 'day', '[]') &&
            '!bg-primary-50 dark:!bg-neutral-800 text-primary-600 dark:text-white!',
          isRange &&
            start &&
            !end &&
            dayjs(d).isSame(start, 'day') &&
            'border border-primary-500 leading-[30px]',
        )
      }
      weekDayClassName={() => 'hidden'}
      popperClassName="!z-[70] popper-offset"
      renderCustomHeader={({
        date,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
        decreaseMonth,
        increaseMonth,
        changeYear, // 년도 변경 함수 추가
      }) => {
        const renderButton = (
          icon: React.ReactNode,
          onClick: () => void,
          btnDisabled: boolean,
        ) => (
          <Button
            // 시인성 개선: 배경색과 테두리 추가
            classes="flex items-center justify-center !w-8 !h-8 !p-0 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            variant="clear"
            onClick={onClick}
            disabled={btnDisabled}
          >
            {icon}
          </Button>
        );

        // 년도 선택 범위 설정 (현재 기준 -10년 ~ +10년, 필요시 조정 가능)
        const years = Array.from(
          { length: 21 },
          (_, i) => dayjs().year() - 10 + i,
        );

        return (
          <div className="flex flex-col bg-transparent px-1">
            <div
              className={classNames('flex items-center gap-2 py-3', {
                'justify-center': hideHeaderButtons,
                'justify-between': !hideHeaderButtons,
              })}
            >
              {!hideHeaderButtons &&
                renderButton(
                  <LuChevronLeft size={18} />,
                  decreaseMonth,
                  prevMonthButtonDisabled,
                )}

              <div className="flex items-center gap-1">
                <p className="text-sm font-bold text-neutral-800 dark:text-white">
                  {dayjs(date).format('MMMM')}
                </p>
                {/* 년도 선택 Select 박스 */}
                <select
                  value={dayjs(date).year()}
                  onChange={({ target: { value } }) =>
                    changeYear(Number(value))
                  }
                  className="bg-transparent text-sm font-bold text-neutral-800 dark:text-white outline-none cursor-pointer hover:text-secondary-600 dark:hover:text-primary-400"
                >
                  {years.map((year) => (
                    <option
                      key={year}
                      value={year}
                      className="dark:bg-neutral-900"
                    >
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {!hideHeaderButtons &&
                renderButton(
                  <LuChevronRight size={18} />,
                  increaseMonth,
                  nextMonthButtonDisabled,
                )}
            </div>

            <div className="grid grid-cols-7 pb-2 text-center text-[11px] font-bold text-neutral-400 uppercase tracking-tighter">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                <span key={idx}>{day}</span>
              ))}
            </div>
          </div>
        );
      }}
    />
  );
};

export default CustomDatePicker;
