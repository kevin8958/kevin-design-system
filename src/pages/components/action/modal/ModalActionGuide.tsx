import { useState } from 'react';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import { useModal } from '@/hooks/useModal';

type ModalConfig = {
  hideCancel: boolean;
  hideBottom: boolean;
  title: string;
};

const ActionExample = () => {
  const { open, ModalWrapper } = useModal();
  const [config, setConfig] = useState<ModalConfig>({
    hideCancel: false,
    hideBottom: false,
    title: 'Standard Modal',
  });

  const handleOpen = (newConfig: ModalConfig) => {
    setConfig(newConfig);
    open();
  };

  return (
    <CodeExample
      code={`<ModalWrapper \n  hideCancel={${config.hideCancel}} \n  hideBottom={${config.hideBottom}}\n>...`}
      className="flex-1"
    >
      <FlexWrapper items="center" justify="center" gap={6}>
        <Button
          variant="outline"
          onClick={() =>
            handleOpen({
              hideCancel: false,
              hideBottom: false,
              title: 'Standard Modal',
            })
          }
        >
          Standard
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            handleOpen({
              hideCancel: true,
              hideBottom: false,
              title: 'Hide Cancel (Show X)',
            })
          }
        >
          Hide Cancel
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            handleOpen({
              hideCancel: false,
              hideBottom: true,
              title: 'Hide Bottom (Show X)',
            })
          }
        >
          Hide Bottom
        </Button>
      </FlexWrapper>

      <ModalWrapper
        title={config.title}
        hideCancel={config.hideCancel}
        hideBottom={config.hideBottom}
        onConfirm={() => alert('Confirmed!')}
      >
        <Typography variant="B2">
          {config.hideBottom
            ? "When 'hideBottom' is true, the top-right 'X' button is automatically shown as the only way to close the modal."
            : config.hideCancel
              ? "When 'hideCancel' is true, the bottom cancel button is removed and the top-right 'X' button is shown."
              : "Default: Bottom actions are visible, and the top 'X' button is hidden for a cleaner UI."}
        </Typography>
      </ModalWrapper>
    </CodeExample>
  );
};

const ModalActionGuide = () => (
  <GuideSection
    title="Action Controls"
    description="Control the visibility of action buttons and the top close icon."
    example={<ActionExample />}
  />
);

export default ModalActionGuide;
