'use client';

import { useState } from 'react';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import { useModal } from '@/hooks/useModal';

const PositionExample = () => {
  const { open, ModalWrapper } = useModal();
  const [currentPosition, setCurrentPosition] =
    useState<Action.ModalPosition>('center');
  const positions: Action.ModalPosition[] = ['top', 'center', 'bottom'];

  const handleOpen = (pos: Action.ModalPosition) => {
    setCurrentPosition(pos);
    open();
  };

  const exampleCode = `const { open, ModalWrapper } = useModal();

return (
  <ModalWrapper position="${currentPosition}" title="Position Guide">
    <Typography>Modal is aligned to the ${currentPosition}.</Typography>
  </ModalWrapper>
);`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper items="center" justify="center" gap={6}>
        {positions.map((pos) => (
          <FlexWrapper key={pos} direction="col" items="center" gap={3}>
            <Button variant="outline" onClick={() => handleOpen(pos)}>
              {pos.charAt(0).toUpperCase() + pos.slice(1)}
            </Button>
            <Typography
              variant="C1"
              classes="text-primary-500 font-medium uppercase"
            >
              {pos}
            </Typography>
          </FlexWrapper>
        ))}
      </FlexWrapper>

      <ModalWrapper
        position={currentPosition}
        title={`${currentPosition.toUpperCase()} Position`}
      >
        <Typography variant="B2">
          This modal is currently anchored to the{' '}
          <strong>{currentPosition}</strong> of the screen.
        </Typography>
      </ModalWrapper>
    </CodeExample>
  );
};

const ModalPositionGuide = () => (
  <GuideSection
    title="Position"
    description="Define the vertical alignment of the modal on the screen."
    example={<PositionExample />}
  />
);

export default ModalPositionGuide;
