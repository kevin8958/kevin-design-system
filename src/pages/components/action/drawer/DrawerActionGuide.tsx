import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Drawer from '@/components/action/Drawer';
import { useDrawer } from '@/hooks/useDrawer';

type DrawerPreviewControls = Pick<Action.DrawerProps, 'size'>;

const ActionExample = ({ size }: DrawerPreviewControls) => {
  const { isOpen, open, close } = useDrawer();

  const exampleCode = `const { isOpen, open, close } = useDrawer();

return (
  <Drawer 
    isOpen={isOpen} 
    onClose={close}
    size="${size}"
    title="Action Drawer"
    confirmText="Save Changes"
    cancelText="Close"
    onConfirm={() => {
      alert('Saved!');
      close();
    }}
  >
    <Content />
  </Drawer>
);`;

  return (
    <CodeExample code={exampleCode} className="flex-1" maxHeight={250}>
      <FlexWrapper direction="col" items="center" justify="center" gap={3}>
        <Button onClick={open}>Custom Footer</Button>
        <Typography variant="C1">Custom Labels</Typography>
      </FlexWrapper>

      <Drawer
        isOpen={isOpen}
        onClose={close}
        size={size}
        title="Action Configuration"
        confirmText="Save Changes"
        cancelText="Discard"
        onConfirm={close}
      >
        <div className="py-4">
          <Typography variant="B2">
            You can customize the <strong>confirm</strong> and{' '}
            <strong>cancel</strong> button labels and their respective click
            handlers.
          </Typography>
        </div>
      </Drawer>
    </CodeExample>
  );
};

export const DrawerActionGuide = (props: DrawerPreviewControls) => (
  <GuideSection
    title="Actions & Footer"
    description="Control the visibility and labeling of footer buttons. You can provide custom handlers for both confirmation and cancellation."
    example={<ActionExample {...props} />}
  />
);
