import { HiOutlineHeart } from 'react-icons/hi';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type ButtonPreviewControls = Pick<
  Action.ButtonProps,
  'size' | 'variant' | 'color'
>;

const IconPositionExample = ({
  size,
  variant,
  color,
}: ButtonPreviewControls) => {
  const iconOptions: {
    id: Action.ButtonIconPosition;
    value: string;
  }[] = [
    { id: 'left', value: 'Left Icon' },
    { id: 'right', value: 'Right Icon' },
  ];
  const exampleCode = `<Button
  size="${size}"
  variant="${variant}"
  color="${color}"
  icon={<HiOutlineHeart />}
  iconPosition="left" // or "right"
>
  Button
</Button>`;

  return (
    <CodeExample
      code={exampleCode}
      className="flex-1 min-w-[320px]"
      maxHeight={200}
    >
      <FlexWrapper items="center" justify="center" classes="w-full" gap={6}>
        {iconOptions.map((option) => (
          <div key={option.id}>
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <Button
                size={size}
                variant={variant}
                color={color}
                icon={<HiOutlineHeart className="text-lg" />}
                iconPosition={option.id as Action.ButtonIconPosition}
              >
                Button
              </Button>
              <Typography variant="C1" classes="uppercase font-mono opacity-60">
                {option.value}
              </Typography>
            </FlexWrapper>
          </div>
        ))}
      </FlexWrapper>
    </CodeExample>
  );
};

const ButtonIconGuide = (props: ButtonPreviewControls) => {
  return (
    <GuideSection
      title="Icon & Placement"
      description="Configure icon properties and alignment within the button."
      example={<IconPositionExample {...props} />}
    />
  );
};

export default ButtonIconGuide;
