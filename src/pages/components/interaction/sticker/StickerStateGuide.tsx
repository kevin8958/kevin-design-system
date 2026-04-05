import Sticker from '@/components/interaction/Sticker';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const StickerStateGuide = () => {
  const exampleCode = `<Sticker emptyMessage="Choose a sticker to begin" />
<Sticker boardWidth={520} boardHeight={320} />`;

  return (
    <GuideSection
      title="State"
      description="Start with an empty board, add stickers from the palette, then reposition or clear them to reset the composition."
      example={
        <CodeExample code={exampleCode} className="flex-1">
          <FlexWrapper classes="w-full p-4" direction="col" items="start" gap={4}>
            <Sticker emptyMessage="Choose a sticker to begin" />
            <Typography variant="C1">Empty, Add, Drag, Clear</Typography>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

export default StickerStateGuide;
