import { collaborationPatternConfigs } from '@/pages/patterns/common/collaborationPatternConfigs';
import PatternAppCollaborationTemplate from '@/pages/patterns/app/collaboration/PatternAppCollaborationTemplate';

export default function PatternAppMentionsPage() {
  return (
    <PatternAppCollaborationTemplate
      config={collaborationPatternConfigs.mentions}
    />
  );
}
