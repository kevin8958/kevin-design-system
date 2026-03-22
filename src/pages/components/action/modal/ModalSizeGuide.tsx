import { useState } from 'react';

import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import { useModal } from '@/hooks/useModal';

const SizeExample = () => {
  const { open, ModalWrapper } = useModal();
  const [currentSize, setCurrentSize] = useState<Action.ModalSize>('md');
  const sizes = ['sm', 'md', 'lg', 'xl'] as const;

  const exampleCode = `const { open, ModalWrapper } = useModal();

return (
  <>
    <Button onClick={open}>Open Modal</Button>
    <ModalWrapper maxWidth={size} title="Size Guide">
      {(close) => <Content onClose={close} />}
    </ModalWrapper>
  </>
);`;

  return (
    <CodeExample code={exampleCode} className="flex-1" maxHeight={200}>
      <FlexWrapper items="center" justify="center" gap={6}>
        {sizes.map((size) => (
          <FlexWrapper
            key={size}
            direction="col"
            items="center"
            gap={3}
            classes="shrink-0"
          >
            <Button
              key={size}
              onClick={() => {
                setCurrentSize(size);
                open();
              }}
            >
              Modal
            </Button>
            <Typography
              variant="C1"
              classes="text-primary-500 font-medium uppercase"
            >
              {size}
            </Typography>
          </FlexWrapper>
        ))}
      </FlexWrapper>

      <ModalWrapper
        maxWidth={currentSize}
        title={`${currentSize.toUpperCase()} Size`}
      >
        <Typography variant="B2" classes="text-gray-400">
          Content area for <strong>{currentSize.toUpperCase()}</strong> size
        </Typography>
      </ModalWrapper>
    </CodeExample>
  );
};

const ModalSizeGuide = () => (
  <GuideSection
    title="Size"
    description="Adjust the maximum width of the modal panel to match the content density."
    example={<SizeExample />}
  />
);

export default ModalSizeGuide;
