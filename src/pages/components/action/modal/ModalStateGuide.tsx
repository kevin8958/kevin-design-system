import Button from '@/components/action/Button';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import Typography from '@/components/foundation/Typography';
import { useModal } from '@/hooks/useModal';

type ModalPreviewControls = Pick<
  Action.ModalProps,
  'maxWidth' | 'state' | 'position'
>;

const StateExample = ({
  maxWidth,
  state,
  position,
}: ModalPreviewControls) => {
  const { open, ModalWrapper } = useModal();

  return (
    <CodeExample
      code={`<ModalWrapper maxWidth="${maxWidth}" state="${state}" position="${position}">...</ModalWrapper>`}
      className="flex-1"
    >
      <div className="flex w-full justify-center">
        <Button onClick={open}>Button</Button>
      </div>

      <ModalWrapper
        maxWidth={maxWidth}
        title="Modal"
        state={state}
        position={position}
      >
        <div className="space-y-6">
          <Typography variant="B2">
            This modal is currently in {state} state.
          </Typography>
        </div>
      </ModalWrapper>
    </CodeExample>
  );
};

const ModalStateGuide = (props: ModalPreviewControls) => (
  <GuideSection
    title="Status & Feedback"
    description="Use predefined states to convey intent and urgency."
    example={<StateExample {...props} />}
  />
);

export default ModalStateGuide;
