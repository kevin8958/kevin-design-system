import { useState } from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CustomDatePicker from '@/components/input/DatePicker';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type DatePickerPreviewControls = Pick<Input.DatepickerProps, 'size'>;

const LocaleExample = ({ size }: DatePickerPreviewControls) => {
  const [enDate, setEnDate] = useState<Date | null>(new Date());
  const [koDate, setKoDate] = useState<Date | null>(new Date());

  const exampleCode = `// English (default)
<CustomDatePicker
  size="${size}"
  value={date}
  onChange={(d) => setDate(d)}
/>

// Korean — swaps the header to year-then-month
// and lets the month be picked from a select, same as the year
<CustomDatePicker
  size="${size}"
  locale="ko"
  dateFormat="YYYY년 MM월 DD일"
  value={date}
  onChange={(d) => setDate(d)}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        <FlexWrapper direction="col" gap={2} classes="w-full">
          <p className="text-xs font-semibold text-neutral-500">English (default)</p>
          <CustomDatePicker
            size={size}
            value={enDate}
            onChange={(d) => setEnDate(d as Date | null)}
          />
        </FlexWrapper>

        <FlexWrapper direction="col" gap={2} classes="w-full">
          <p className="text-xs font-semibold text-neutral-500">Korean</p>
          <CustomDatePicker
            size={size}
            locale="ko"
            dateFormat="YYYY년 MM월 DD일"
            value={koDate}
            onChange={(d) => setKoDate(d as Date | null)}
          />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const DatePickerLocaleGuide = (props: DatePickerPreviewControls) => {
  return (
    <GuideSection
      title="Locale"
      description="Switch the calendar header's language with locale. Korean also swaps the header order to year-then-month, and both month and year are selectable."
      example={<LocaleExample {...props} />}
    />
  );
};

export default DatePickerLocaleGuide;
