import { HiOutlineHeart } from 'react-icons/hi';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';

const ShapeExample = () => {
  const shapeOptions: {
    id: Action.ButtonShape;
    value: string;
  }[] = [
    { id: 'rect', value: 'Rect' },
    { id: 'circle', value: 'Circle' },
  ];

  const exampleCode = `<Button shape="rect">Button</Button>
<Button shape="circle" icon={<HiOutlineHeart />} />`;

  return (
    <CodeExample code={exampleCode}>
      <FlexWrapper
        items="center"
        justify="center"
        gap={10}
        classes="w-full py-4"
      >
        {shapeOptions.map((option) => (
          <FlexWrapper key={option.id} direction="col" items="center" gap={3}>
            <Button
              shape={option.id}
              icon={
                option.id === 'circle' ? (
                  <HiOutlineHeart className="text-lg" />
                ) : undefined
              }
            >
              {option.id === 'rect' ? 'Button' : undefined}
            </Button>
            <Typography variant="C1" classes="uppercase font-mono opacity-60">
              {option.id}
            </Typography>
          </FlexWrapper>
        ))}
      </FlexWrapper>
    </CodeExample>
  );
};

const ButtonShapeGuide = () => {
  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      {/* Description Section */}
      <FlexWrapper classes="flex-1" items="start" direction="col" gap={4}>
        <Typography variant="H3">Shape</Typography>

        <Typography variant="B1" classes="font-semibold text-primary-500">
          Define button geometry for different visual hierarchies.
        </Typography>
      </FlexWrapper>

      {/* Interactive Preview Section */}
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="border  shadow-sm border-neutral-500/30 dark:border-neutral-100/30 w-full rounded-2xl flex-1"
      >
        <ShapeExample />
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default ButtonShapeGuide;
