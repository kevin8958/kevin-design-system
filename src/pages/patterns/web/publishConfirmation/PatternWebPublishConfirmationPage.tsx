import { creationPublishingPatternConfigs } from '@/pages/patterns/common/creationPublishingPatternConfigs';
import PatternWebCreationPublishingTemplate from '@/pages/patterns/web/creationPublishing/PatternWebCreationPublishingTemplate';

export default function PatternWebPublishConfirmationPage() {
  return (
    <PatternWebCreationPublishingTemplate
      config={creationPublishingPatternConfigs['publish-confirmation']}
    />
  );
}
