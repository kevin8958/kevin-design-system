import { creationPublishingPatternConfigs } from '@/pages/patterns/common/creationPublishingPatternConfigs';
import PatternAppCreationPublishingTemplate from '@/pages/patterns/app/creationPublishing/PatternAppCreationPublishingTemplate';

export default function PatternAppPublishConfirmationPage() {
  return (
    <PatternAppCreationPublishingTemplate
      config={creationPublishingPatternConfigs['publish-confirmation']}
    />
  );
}
