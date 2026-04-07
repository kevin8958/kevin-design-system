import { useState } from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CustomDatePicker from '@/components/input/DatePicker';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type DatePickerPreviewControls = Pick<Input.DatepickerProps, 'size'>;

const StateExample = ({ size }: DatePickerPreviewControls) => {
  const [date] = useState<Date | null>(new Date());

  const exampleCode = `// Error State
<CustomDatePicker
  size="${size}"
  isError
  errorMsg="Please select a valid date."
  value={date}
/>

// Disabled State
<CustomDatePicker size="${size}" disabled value={date} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={8} classes="w-full p-4">
        <div className="w-full">
          <p className="mb-2 text-sm font-medium">Error State</p>
          <CustomDatePicker
            size={size}
            isError
            errorMsg="Please select a valid date."
            value={date}
            onChange={() => {}}
            placeholder="Invalid date"
          />
        </div>

        <div className="w-full">
          <p className="mb-2 text-sm font-medium">Disabled State</p>
          <CustomDatePicker
            size={size}
            disabled
            value={date}
            onChange={() => {}}
            placeholder="Cannot select"
          />
        </div>
      </FlexWrapper>
    </CodeExample>
  );
};

const DatePickerStateGuide = (props: DatePickerPreviewControls) => {
  return (
    <GuideSection
      title="States"
      description="Visual feedback for validation errors and disabled interactions."
      example={<StateExample {...props} />}
    />
  );
};

export default DatePickerStateGuide;
