import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Drawer from '@/components/action/Drawer';
import { useDrawer } from '@/hooks/useDrawer';

type DrawerPreviewControls = Pick<Action.DrawerProps, 'size'>;

const DrawerStateGuide = ({ size }: DrawerPreviewControls) => {
  const { isOpen, open, close } = useDrawer();

  const exampleCode = `<Drawer
  isOpen={isOpen}
  onClose={close}
  size="${size}"
  title="Drawer"
  hideBottom
>
  <Typography variant="B2">Drawer content</Typography>
</Drawer>`;

  return (
    <GuideSection
      title="State"
      description="Hide the footer when the drawer is used for browsing or reviewing content without requiring an immediate confirmation action."
      example={
        <CodeExample code={exampleCode} className="flex-1" maxHeight={250}>
          <FlexWrapper direction="col" items="center" justify="center" gap={3}>
            <Button onClick={open}>No Footer</Button>
            <Typography variant="C1">Hide Bottom</Typography>
          </FlexWrapper>

          <Drawer
            isOpen={isOpen}
            onClose={close}
            size={size}
            title="Drawer"
            hideBottom
          >
            <Typography variant="B2">
              Use hideBottom for drawers that only need browsing, reading, or
              passive review.
            </Typography>
          </Drawer>
        </CodeExample>
      }
    />
  );
};

export default DrawerStateGuide;
