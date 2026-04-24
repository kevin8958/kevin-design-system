import { useState } from 'react';
import AppActionSheet from '@/components/app/AppActionSheet';
import AppButton from '@/components/app/AppButton';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { actionSheetItems } from '@/pages/components/app/actionSheet/appActionSheetItems';

type AppActionSheetPreviewControls = {
  size: App.AppActionSheetSize;
};

const AppActionSheetContentGuide = ({
  size = 'sm',
}: AppActionSheetPreviewControls) => {
  const [open, setOpen] = useState(false);
  const exampleCode = `<AppActionSheet
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Quick actions"
  description="Choose the next action without leaving the current screen."
  size="${size}"
  items={items}
/>`;

  return (
    <GuideSection
      title="Content"
      description="Action sheets work well for lightweight action clusters that should slide up from the bottom without taking over the screen."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <AppDevicePreviewFrame
            minHeight={360}
            contentClasses="flex items-start justify-start"
          >
            <AppButton label="Open ActionSheet" onPress={() => setOpen(true)} />
            <AppActionSheet
              isOpen={open}
              onClose={() => setOpen(false)}
              title="Quick actions"
              description="Choose the next action without leaving the current screen."
              items={actionSheetItems}
              size={size}
            />
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppActionSheetContentGuide;
