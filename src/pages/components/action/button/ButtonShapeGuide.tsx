import { HiOutlineHeart } from 'react-icons/hi';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

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
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
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
    <GuideSection
      title="Shape"
      description="Define button geometry for different visual hierarchies."
      example={<ShapeExample />}
    />
  );
};

export default ButtonShapeGuide;
