import { useState } from 'react';

import Button from '@/components/action/Button';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';
import { useModal } from '@/hooks/useModal';

const StateExample = () => {
  const { open, ModalWrapper } = useModal();
  const [state, setState] = useState<Action.ModalState>('info');
  const states = ['info', 'success', 'warning', 'danger'] as const;

  return (
    <CodeExample
      code="<ModalWrapper state={state}>...</ModalWrapper>"
      className="flex-1"
    >
      <FlexWrapper items="center" justify="center" gap={6}>
        {states.map((s) => (
          <Button
            key={s}
            onClick={() => {
              setState(s);
              open();
            }}
          >
            {s}
          </Button>
        ))}
      </FlexWrapper>

      <ModalWrapper title={state.toUpperCase()} state={state}>
        <div className="space-y-6">
          <Typography variant="B2">
            This modal is currently in {state} state.
          </Typography>
        </div>
      </ModalWrapper>
    </CodeExample>
  );
};

const ModalStateGuide = () => (
  <GuideSection
    title="Status & Feedback"
    description="Use predefined states to convey intent and urgency."
    example={<StateExample />}
  />
);

export default ModalStateGuide;
