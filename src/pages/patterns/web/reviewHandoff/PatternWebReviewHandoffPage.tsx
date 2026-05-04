import { creationPublishingPatternConfigs } from '@/pages/patterns/common/creationPublishingPatternConfigs';
import PatternWebCreationPublishingTemplate from '@/pages/patterns/web/creationPublishing/PatternWebCreationPublishingTemplate';

export default function PatternWebReviewHandoffPage() {
  return (
    <PatternWebCreationPublishingTemplate
      config={creationPublishingPatternConfigs['review-handoff']}
    />
  );
}
