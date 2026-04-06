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

const ShapeExample = ({ size, variant, color }: ButtonPreviewControls) => {
  const shapeOptions: {
    id: Action.ButtonShape;
    value: string;
  }[] = [
    { id: 'rect', value: 'Rect' },
    { id: 'circle', value: 'Circle' },
  ];

  const exampleCode = `<Button size="${size}" variant="${variant}" color="${color}" shape="rect">
  Button
</Button>
<Button
  size="${size}"
  variant="${variant}"
  color="${color}"
  shape="circle"
  icon={<HiOutlineHeart />}
/>`;

  return (
    <CodeExample
      code={exampleCode}
      className="flex-1 min-w-[320px]"
      maxHeight={200}
    >
      <FlexWrapper
        items="center"
        justify="center"
        gap={10}
        classes="w-full py-4"
      >
        {shapeOptions.map((option) => (
          <FlexWrapper key={option.id} direction="col" items="center" gap={3}>
            <Button
              size={size}
              variant={variant}
              color={color}
              shape={option.id}
              icon={
                option.id === 'circle' ? (
                  <HiOutlineHeart className="text-lg" />
                ) : undefined
              }
            >
              {option.id === 'rect' ? 'Button' : undefined}
            </Button>
            <Typography variant="C1">
              {option.id}
            </Typography>
          </FlexWrapper>
        ))}
      </FlexWrapper>
    </CodeExample>
  );
};

const ButtonShapeGuide = (props: ButtonPreviewControls) => {
  return (
    <GuideSection
      title="Shape"
      description="Define button geometry for different visual hierarchies."
      example={<ShapeExample {...props} />}
    />
  );
};

export default ButtonShapeGuide;
