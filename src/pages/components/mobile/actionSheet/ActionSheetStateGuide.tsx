import { useState } from 'react';
import { LuBell, LuShare2, LuTrash2 } from 'react-icons/lu';
import Button from '@/components/action/Button';
import ActionSheet from '@/components/action/ActionSheet';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type ActionSheetPreviewControls = {
  size: NonNullable<Action.ActionSheetProps['size']>;
};

const items: Action.ActionSheetItem[] = [
  { id: 'share', label: 'Share', description: 'Send this item to another app', icon: <LuShare2 /> },
  { id: 'notify', label: 'Notify me', description: 'Create a reminder for later', icon: <LuBell />, disabled: true },
  { id: 'delete', label: 'Delete', description: 'Remove this item permanently', icon: <LuTrash2 />, tone: 'danger' },
];

const ActionSheetStateGuide = ({ size = 'sm' }: ActionSheetPreviewControls) => {
  const [open, setOpen] = useState(false);
  const exampleCode = `<ActionSheet
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
        <CodeExample code={exampleCode} className="flex-1 min-w-0">
          <div className="relative min-h-[360px] w-full overflow-hidden rounded-[24px] border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
            <Button onClick={() => setOpen(true)}>Open ActionSheet</Button>
              <ActionSheet
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Quick actions"
                items={items}
                size={size}
              />
          </div>
        </CodeExample>
      }
    />
  );
};

export default ActionSheetStateGuide;
