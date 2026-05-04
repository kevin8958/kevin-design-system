import { creationPublishingPatternConfigs } from '@/pages/patterns/common/creationPublishingPatternConfigs';
import PatternAppCreationPublishingTemplate from '@/pages/patterns/app/creationPublishing/PatternAppCreationPublishingTemplate';

export default function PatternAppReviewHandoffPage() {
  return (
    <PatternAppCreationPublishingTemplate
      config={creationPublishingPatternConfigs['review-handoff']}
    />
  );
}
