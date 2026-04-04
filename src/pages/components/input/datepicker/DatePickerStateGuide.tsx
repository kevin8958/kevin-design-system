import { useState } from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CustomDatePicker from '@/components/input/DatePicker';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const StateExample = () => {
  const [date] = useState<Date | null>(new Date());

  const exampleCode = `// Error State
<CustomDatePicker isError value={date} />

// Disabled State
<CustomDatePicker disabled value={date} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={8} classes="w-full p-4">
        <div className="w-full">
          <p className="mb-2 text-sm font-medium">Error State</p>
          <CustomDatePicker
            isError
            value={date}
            onChange={() => {}}
            placeholder="Invalid date"
          />
        </div>

        <div className="w-full">
          <p className="mb-2 text-sm font-medium">Disabled State</p>
          <CustomDatePicker
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

const DatePickerStateGuide = () => {
  return (
    <GuideSection
      title="States"
      description="Visual feedback for validation errors and disabled interactions."
      example={<StateExample />}
    />
  );
};

export default DatePickerStateGuide;
