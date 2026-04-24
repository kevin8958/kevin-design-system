import { useState } from 'react';
import AppButton from '@/components/app/AppButton';
import AppModal from '@/components/app/AppModal';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

type AppModalPreviewControls = Pick<
  App.ModalProps,
  'maxWidth' | 'state' | 'position'
>;

const AppModalStateGuide = ({
  maxWidth,
  state,
  position,
}: AppModalPreviewControls) => {
  const [open, setOpen] = useState(false);
  const exampleCode = `<AppModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  maxWidth="${maxWidth}"
  state="${state}"
  position="${position}"
>
  This modal is currently in ${state} state.
</AppModal>`;

  return (
    <GuideSection
      title="Status & Feedback"
      description="Use predefined states to convey intent and urgency without rewriting the whole layout."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <AppDevicePreviewFrame minHeight={420}>
            <AppButton label="Open Modal" onPress={() => setOpen(true)} />
            <AppModal
              isOpen={open}
              onClose={() => setOpen(false)}
              maxWidth={maxWidth}
              state={state}
              position={position}
              title="Modal"
            >
              This modal is currently in {state} state.
            </AppModal>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppModalStateGuide;
