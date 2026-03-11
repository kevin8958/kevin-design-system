import { HiOutlineHeart } from 'react-icons/hi';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';

const IconPositionExample = () => {
  const iconOptions: {
    id: Action.ButtonIconPosition;
    value: string;
  }[] = [
    { id: 'left', value: 'Left Icon' },
    { id: 'right', value: 'Right Icon' },
  ];
  const exampleCode = `<Button 
  icon={<HiOutlineHeart />} 
  iconPosition="left" // or "right"
>
  Button
</Button>`;

  return (
    <CodeExample code={exampleCode}>
      <FlexWrapper items="center" justify="center" classes="w-full" gap={6}>
        {iconOptions.map((option) => (
          <div key={option.id}>
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <Button
                icon={<HiOutlineHeart className="text-lg" />}
                iconPosition={option.id as any}
              >
                Button
              </Button>
              <Typography variant="C1">{option.id}</Typography>
            </FlexWrapper>
          </div>
        ))}
      </FlexWrapper>
    </CodeExample>
  );
};
const ButtonIconGuide = () => {
  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="flex-1" items="start" direction="col" gap={4}>
        <Typography variant="H3">Icon & Placement</Typography>

        <Typography variant="B1" classes="font-semibold text-primary-500">
          Configure icon properties and alignment within the button.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="border  shadow-sm border-neutral-500/30 dark:border-neutral-100/30 w-full rounded-2xl flex-1"
        gap={6}
      >
        <IconPositionExample />
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default ButtonIconGuide;
