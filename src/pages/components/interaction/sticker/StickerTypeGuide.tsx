import Sticker from '@/components/interaction/Sticker';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const StickerTypeGuide = () => {
  const exampleCode = `<Sticker />
<Sticker boardWidth={520} boardHeight={320} />`;

  return (
    <GuideSection
      title="Type"
      description="Use Sticker to compose a playful canvas with draggable artwork and lightweight visual storytelling."
      example={
        <CodeExample code={exampleCode} className="flex-1">
          <FlexWrapper classes="w-full p-4" direction="col" items="start" gap={4}>
            <Sticker />
            <Typography variant="C1">Default Board</Typography>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

export default StickerTypeGuide;
