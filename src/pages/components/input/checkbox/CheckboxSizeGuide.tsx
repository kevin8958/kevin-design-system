import { useState } from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Checkbox from '@/components/input/Checkbox';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const SizeExample = () => {
  const [values, setValues] = useState({
    sm: true,
    md: true,
    lg: true,
  });

  const handleChange = (data: { id: string; checked: boolean }) => {
    setValues((prev) => ({ ...prev, [data.id]: data.checked }));
  };

  const exampleCode = `<Checkbox size="sm" label="Small" checked={true} />
<Checkbox size="md" label="Medium" checked={true} />
<Checkbox size="lg" label="Large" checked={true} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper
        direction="row" // 체크박스는 가로 배열이 더 직관적일 수 있습니다.
        items="center"
        justify="center"
        gap={10}
        classes="w-full py-4"
      >
        <Checkbox
          id="sm"
          size="sm"
          label="Small"
          checked={values.sm}
          onChange={handleChange}
        />
        <Checkbox
          id="md"
          size="md"
          label="Medium"
          checked={values.md}
          onChange={handleChange}
        />
        <Checkbox
          id="lg"
          size="lg"
          label="Large"
          checked={values.lg}
          onChange={handleChange}
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const CheckboxSizeGuide = () => {
  return (
    <GuideSection
      title="Size"
      description="Adjust the scale of the checkbox and its label to fit your layout."
      example={<SizeExample />}
    />
  );
};

export default CheckboxSizeGuide;
