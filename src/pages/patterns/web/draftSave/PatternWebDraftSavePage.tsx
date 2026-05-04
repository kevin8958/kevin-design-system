import { creationPublishingPatternConfigs } from '@/pages/patterns/common/creationPublishingPatternConfigs';
import PatternWebCreationPublishingTemplate from '@/pages/patterns/web/creationPublishing/PatternWebCreationPublishingTemplate';

export default function PatternWebDraftSavePage() {
  return (
    <PatternWebCreationPublishingTemplate
      config={creationPublishingPatternConfigs['draft-save']}
    />
  );
}
