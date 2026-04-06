import { useState } from 'react';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Drawer from '@/components/action/Drawer';
import { useDrawer } from '@/hooks/useDrawer';

type DrawerPreviewControls = Pick<Action.DrawerProps, 'size'>;

const LoadingExample = ({ size }: DrawerPreviewControls) => {
  const { isOpen, open, close } = useDrawer();
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = () => {
    setIsLoading(true);
    // 비동기 작업 시뮬레이션
    setTimeout(() => {
      setIsLoading(false);
      close();
    }, 2000);
  };

const exampleCode = `<Drawer 
  isOpen={isOpen} 
  onClose={close}
  size="${size}"
  loading={true} // 버튼에 스피너가 표시됩니다
  onConfirm={handleConfirm}
>
  <Content />
</Drawer>`;

  return (
    <CodeExample code={exampleCode} className="flex-1" maxHeight={250}>
      <FlexWrapper direction="col" items="center" justify="center" gap={3}>
        <Button onClick={open}>Loading Action</Button>
        <Typography variant="C1">Loading Confirm</Typography>
      </FlexWrapper>

      <Drawer
        isOpen={isOpen}
        onClose={close}
        size={size}
        title="Async Action"
        loading={isLoading}
        onConfirm={handleConfirm}
      >
        <div className="py-4">
          <Typography variant="B2">
            Click the confirm button to see the <strong>loading spinner</strong>{' '}
            in action. The button becomes disabled automatically while loading.
          </Typography>
        </div>
      </Drawer>
    </CodeExample>
  );
};

export const DrawerLoadingGuide = (props: DrawerPreviewControls) => (
  <GuideSection
    title="Loading State"
    description="Use the 'loading' prop to provide visual feedback during asynchronous operations like form submissions."
    example={<LoadingExample {...props} />}
  />
);
