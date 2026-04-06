import { LuSearch } from 'react-icons/lu';
import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type ButtonPreviewControls = Pick<
  Action.ButtonProps,
  'size' | 'variant' | 'color'
>;

const LoadingIconExample = ({ size, variant, color }: ButtonPreviewControls) => {
  const exampleCode = `<Button
  size="${size}"
  variant="${variant}"
  color="${color}"
  icon={<LuSearch />}
>
  Search
</Button>

<Button
  size="${size}"
  variant="${variant}"
  color="${color}"
  icon={<LuSearch />}
  loading
>
  Search
</Button>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]" maxHeight={220}>
      <FlexWrapper items="center" justify="center" classes="w-full" gap={6}>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Button size={size} variant={variant} color={color} icon={<LuSearch />}>
            Search
          </Button>
          <Typography variant="C1">default</Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Button
            size={size}
            variant={variant}
            color={color}
            icon={<LuSearch />}
            loading
          >
            Search
          </Button>
          <Typography variant="C1">loading</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const ButtonLoadingIconGuide = (props: ButtonPreviewControls) => {
  return (
    <GuideSection
      title="Loading With Icon"
      description="Loading state replaces the label and icon with a spinner while preserving the button footprint."
      example={<LoadingIconExample {...props} />}
    />
  );
};

export default ButtonLoadingIconGuide;
