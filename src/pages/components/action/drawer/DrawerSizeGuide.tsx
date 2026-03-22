import { useState } from 'react';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Drawer from '@/components/action/Drawer';
import { useDrawer } from '@/hooks/useDrawer';

const SizeExample = () => {
  const { isOpen, open, close } = useDrawer();
  const [currentSize, setCurrentSize] = useState<Action.DrawerSize>('md');

  const sizes: Action.DrawerSize[] = ['sm', 'md', 'lg', 'xl', 'full'];

  const exampleCode = `const { isOpen, open, close } = useDrawer();

return (
  <>
    <Button onClick={open}>Open Drawer</Button>
    <Drawer 
      isOpen={isOpen} 
      onClose={close} 
      size={size}
      title="Size Example"
    >
      <Content />
    </Drawer>
  </>
);`;

  return (
    <CodeExample code={exampleCode} className="flex-1" maxHeight={250}>
      <div className="space-y-6">
        <FlexWrapper
          items="center"
          justify="center"
          gap={4}
          classes="flex-wrap"
        >
          {sizes.map((size) => (
            <FlexWrapper key={size} direction="col" items="center" gap={2}>
              <Button
                onClick={() => {
                  setCurrentSize(size);
                  open();
                }}
              >
                {size.toUpperCase()}
              </Button>
              <Typography variant="C1" classes="text-primary-500 font-medium">
                {size === 'full' ? '100%' : size}
              </Typography>
            </FlexWrapper>
          ))}
        </FlexWrapper>
      </div>

      <Drawer
        isOpen={isOpen}
        onClose={close}
        size={currentSize}
        title={`${currentSize.toUpperCase()} Size Drawer`}
      >
        <div className="space-y-4">
          <Typography variant="B2">
            Current size preset: <strong>{currentSize}</strong>
          </Typography>
          <div className="h-64 w-full border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-lg flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-800/50 p-6 text-center">
            <Typography variant="C1" classes="text-neutral-500 font-bold mb-2">
              Responsive Behavior
            </Typography>
            <Typography variant="C1" classes="text-neutral-400 leading-relaxed">
              📱 Mobile: Bottom Sheet (Slide up)
              <br />
              💻 Desktop: Right Panel (Slide left)
            </Typography>
          </div>
        </div>
      </Drawer>
    </CodeExample>
  );
};

const DrawerSizeGuide = () => (
  <GuideSection
    title="Size"
    description="Adjust the drawer's width on desktop. On mobile devices, the component automatically transforms into a bottom sheet for optimal accessibility."
    example={<SizeExample />}
  />
);

export default DrawerSizeGuide;
