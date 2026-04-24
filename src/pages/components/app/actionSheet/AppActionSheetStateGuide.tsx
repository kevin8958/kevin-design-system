import { useState } from 'react';
import AppActionSheet from '@/components/app/AppActionSheet';
import AppButton from '@/components/app/AppButton';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { actionSheetStateItems } from '@/pages/components/app/actionSheet/appActionSheetItems';

type AppActionSheetPreviewControls = {
  size: App.AppActionSheetSize;
};

const AppActionSheetStateGuide = ({
  size = 'sm',
}: AppActionSheetPreviewControls) => {
  const [open, setOpen] = useState(false);
  const exampleCode = `<AppActionSheet
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  items={[
    { id: 'share', label: 'Share' },
    { id: 'notify', label: 'Notify me', disabled: true },
    { id: 'delete', label: 'Delete', tone: 'danger' },
  ]}
  size="${size}"
/>`;

  return (
    <GuideSection
      title="State"
      description="Use disabled rows for unavailable actions and reserve the danger tone for destructive outcomes."
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
              items={actionSheetStateItems}
              size={size}
            />
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppActionSheetStateGuide;
