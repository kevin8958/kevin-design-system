import { creationPublishingPatternConfigs } from '@/pages/patterns/common/creationPublishingPatternConfigs';
import PatternWebCreationPublishingTemplate from '@/pages/patterns/web/creationPublishing/PatternWebCreationPublishingTemplate';

export default function PatternWebEditorFlowPage() {
  return (
    <PatternWebCreationPublishingTemplate
      config={creationPublishingPatternConfigs['editor-flow']}
    />
  );
}
