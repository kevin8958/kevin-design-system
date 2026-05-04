import { creationPublishingPatternConfigs } from '@/pages/patterns/common/creationPublishingPatternConfigs';
import PatternAppCreationPublishingTemplate from '@/pages/patterns/app/creationPublishing/PatternAppCreationPublishingTemplate';

export default function PatternAppDraftSavePage() {
  return (
    <PatternAppCreationPublishingTemplate
      config={creationPublishingPatternConfigs['draft-save']}
    />
  );
}
