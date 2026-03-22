import { useState } from 'react';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Drawer from '@/components/action/Drawer';
import { useDrawer } from '@/hooks/useDrawer';

const LoadingExample = () => {
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
  loading={true} // 버튼에 스피너가 표시됩니다
  onConfirm={handleConfirm}
>
  <Content />
</Drawer>`;

  return (
    <CodeExample code={exampleCode} className="flex-1" maxHeight={250}>
      <FlexWrapper justify="center">
        <Button onClick={open}>Open Loading Drawer</Button>
      </FlexWrapper>

      <Drawer
        isOpen={isOpen}
        onClose={close}
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

export const DrawerLoadingGuide = () => (
  <GuideSection
    title="Loading State"
    description="Use the 'loading' prop to provide visual feedback during asynchronous operations like form submissions."
    example={<LoadingExample />}
  />
);
