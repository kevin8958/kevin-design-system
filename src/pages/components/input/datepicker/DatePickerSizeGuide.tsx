import { useState } from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CustomDatePicker from '@/components/input/DatePicker';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const SizeExample = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  const exampleCode = `<CustomDatePicker size="sm" value={date} onChange={setDate} />
<CustomDatePicker size="md" value={date} onChange={setDate} />
<CustomDatePicker size="lg" value={date} onChange={setDate} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <div key={size} className="w-full">
            <p className="mb-1 text-xs text-neutral-400 uppercase">{size}</p>
            <CustomDatePicker
              size={size}
              value={date}
              onChange={(d) => setDate(d as Date | null)}
            />
          </div>
        ))}
      </FlexWrapper>
    </CodeExample>
  );
};

const DatePickerSizeGuide = () => {
  return (
    <GuideSection
      title="Size Variations"
      description="Consistent sizing options to match your layout density."
      example={<SizeExample />}
    />
  );
};

export default DatePickerSizeGuide;
