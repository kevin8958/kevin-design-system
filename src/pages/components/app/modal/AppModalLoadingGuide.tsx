import { useEffect, useRef, useState } from 'react';
import AppButton from '@/components/app/AppButton';
import AppModal from '@/components/app/AppModal';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

type AppModalPreviewControls = Pick<
  App.ModalProps,
  'maxWidth' | 'state' | 'position'
>;

const AppModalLoadingGuide = ({
  maxWidth,
  state,
  position,
}: AppModalPreviewControls) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const exampleCode = `<AppModal
  isOpen={isOpen}
  onClose={close}
  maxWidth="${maxWidth}"
  state="${state}"
  position="${position}"
  loading={loading}
  onConfirm={handleConfirm}
>
  ...
</AppModal>`;

  return (
    <GuideSection
      title="Loading State"
      description="Use the loading state to communicate async confirmation while preventing duplicate submissions."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <AppDevicePreviewFrame minHeight={420}>
            <AppButton label="Open Modal" onPress={() => setOpen(true)} />
            <AppModal
              isOpen={open}
              onClose={() => {
                if (timerRef.current) {
                  clearTimeout(timerRef.current);
                  timerRef.current = null;
                }
                setLoading(false);
                setOpen(false);
              }}
              onConfirm={() => {
                if (timerRef.current) {
                  clearTimeout(timerRef.current);
                }
                setLoading(true);
                timerRef.current = setTimeout(() => {
                  setLoading(false);
                  setOpen(false);
                  timerRef.current = null;
                }, 1200);
              }}
              maxWidth={maxWidth}
              state={state}
              position={position}
              title="Async Action"
              loading={loading}
            >
              Confirm the action to see the loading button state inside the modal footer.
            </AppModal>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppModalLoadingGuide;
