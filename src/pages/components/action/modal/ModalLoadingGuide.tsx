import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import { useModal } from '@/hooks/useModal';

type ModalPreviewControls = Pick<
  Action.ModalProps,
  'maxWidth' | 'state' | 'position'
>;

const ModalLoadingGuide = ({
  maxWidth,
  state,
  position,
}: ModalPreviewControls) => {
  const { open, ModalWrapper } = useModal();

  const exampleCode = `<ModalWrapper
  maxWidth="${maxWidth}"
  state="${state}"
  position="${position}"
  title="Modal"
  loading
>
  <Typography variant="B2">Modal content</Typography>
</ModalWrapper>`;

  return (
    <GuideSection
      title="Loading"
      description="Use the loading state on the primary action when a confirmation step needs asynchronous processing."
      example={
        <CodeExample code={exampleCode} className="flex-1" maxHeight={220}>
          <FlexWrapper direction="col" items="center" justify="center" gap={3}>
            <Button onClick={open}>Button</Button>
            <Typography variant="C1">Loading Confirm</Typography>
          </FlexWrapper>

          <ModalWrapper
            maxWidth={maxWidth}
            state={state}
            position={position}
            title="Modal"
            loading
          >
            <Typography variant="B2">
              Use loading when the confirm action needs time to complete.
            </Typography>
          </ModalWrapper>
        </CodeExample>
      }
    />
  );
};

export default ModalLoadingGuide;
