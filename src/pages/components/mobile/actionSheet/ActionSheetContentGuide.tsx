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
  { id: 'notify', label: 'Notify me', description: 'Create a reminder for later', icon: <LuBell /> },
  { id: 'delete', label: 'Delete', description: 'Remove this item permanently', icon: <LuTrash2 />, tone: 'danger' },
];

const ActionSheetContentGuide = ({ size = 'sm' }: ActionSheetPreviewControls) => {
  const [open, setOpen] = useState(false);
  const exampleCode = `<ActionSheet
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
      description="Action sheets work well for lightweight action clusters that should slide up from the bottom without taking over the page."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-0">
          <div className="relative min-h-[360px] w-full overflow-hidden rounded-[24px] border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
            <Button onClick={() => setOpen(true)}>Open ActionSheet</Button>
            <ActionSheet
              isOpen={open}
              onClose={() => setOpen(false)}
              title="Quick actions"
              description="Choose the next action without leaving the current screen."
              items={items}
              size={size}
            />
          </div>
        </CodeExample>
      }
    />
  );
};

export default ActionSheetContentGuide;
