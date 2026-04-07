import { useState } from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CustomDatePicker from '@/components/input/DatePicker';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type DatePickerPreviewControls = Pick<Input.DatepickerProps, 'size'>;

const TypeExample = ({ size }: DatePickerPreviewControls) => {
  const [singleDate, setSingleDate] = useState<Date | null>(new Date());
  const [range, setRange] = useState<[Date | undefined, Date | undefined]>([
    new Date(),
    undefined,
  ]);
  const [start, end] = range;

  const exampleCode = `// Single Date Selection
<CustomDatePicker 
  size="${size}" 
  value={date} 
  onChange={(d) => setDate(d)} 
/>

// Range Selection
<CustomDatePicker 
  size="${size}" 
  isRange 
  startDate={start} 
  endDate={end} 
  onChange={(update) => setRange(update)} 
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        <FlexWrapper direction="col" gap={2} classes="w-full">
          <p className="text-xs font-semibold text-neutral-500">Single Mode</p>
          <CustomDatePicker
            size={size}
            value={singleDate}
            onChange={(d) => setSingleDate(d as Date | null)}
          />
        </FlexWrapper>

        <FlexWrapper direction="col" gap={2} classes="w-full">
          <p className="text-xs font-semibold text-neutral-500">Range Mode</p>
          <CustomDatePicker
            size={size}
            type="range"
            isRange
            value={null}
            startDate={start}
            endDate={end}
            onChange={(update) =>
              setRange(
                update as unknown as [Date | undefined, Date | undefined],
              )
            }
          />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const DatePickerTypeGuide = (props: DatePickerPreviewControls) => {
  return (
    <GuideSection
      title="Selection Types"
      description="Choose between single date picking or selecting a date range."
      example={<TypeExample {...props} />}
    />
  );
};

export default DatePickerTypeGuide;
