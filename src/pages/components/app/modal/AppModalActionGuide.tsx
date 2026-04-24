import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import AppButton from '@/components/app/AppButton';
import AppModal from '@/components/app/AppModal';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

type AppModalPreviewControls = Pick<
  App.ModalProps,
  'maxWidth' | 'state' | 'position'
>;

type ActionMode = 'default' | 'hideCancel' | 'hideBottom';

const contentByMode: Record<ActionMode, string> = {
  default: 'Default footer keeps both actions visible for confirmation flows.',
  hideCancel:
    'Hide the cancel button when the header close affordance is enough for the task.',
  hideBottom:
    'Hide the footer entirely when the modal is only for reading or passive review.',
};

const AppModalActionGuide = ({
  maxWidth,
  state,
  position,
}: AppModalPreviewControls) => {
  const [mode, setMode] = useState<ActionMode>('default');
  const [open, setOpen] = useState(false);

  const exampleCode = `<AppModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  maxWidth="${maxWidth}"
  state="${state}"
  position="${position}"
  hideCancel={${mode === 'hideCancel'}}
  hideBottom={${mode === 'hideBottom'}}
>
  ...
</AppModal>`;

  return (
    <GuideSection
      title="Action Controls"
      description="Control the visibility of footer actions and the top close affordance depending on how much commitment the flow needs."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <FlexWrapper direction="col" items="center" gap={4} classes="w-full">
            <ButtonGroup
              size="sm"
              color="neutral"
              items={[
                { label: 'Default', value: 'default' },
                { label: 'Hide Cancel', value: 'hideCancel' },
                { label: 'Hide Bottom', value: 'hideBottom' },
              ]}
              value={mode}
              onChange={(next) => setMode(next as ActionMode)}
            />

            <AppDevicePreviewFrame minHeight={420}>
              <AppButton label="Open Modal" onPress={() => setOpen(true)} />
              <AppModal
                isOpen={open}
                onClose={() => setOpen(false)}
                maxWidth={maxWidth}
                state={state}
                position={position}
                title="Modal"
                hideCancel={mode === 'hideCancel'}
                hideBottom={mode === 'hideBottom'}
              >
                {contentByMode[mode]}
              </AppModal>
            </AppDevicePreviewFrame>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

export default AppModalActionGuide;
