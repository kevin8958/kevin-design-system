import { creationPublishingPatternConfigs } from '@/pages/patterns/common/creationPublishingPatternConfigs';
import PatternAppCreationPublishingTemplate from '@/pages/patterns/app/creationPublishing/PatternAppCreationPublishingTemplate';

export default function PatternAppEditorFlowPage() {
  return (
    <PatternAppCreationPublishingTemplate
      config={creationPublishingPatternConfigs['editor-flow']}
    />
  );
}
