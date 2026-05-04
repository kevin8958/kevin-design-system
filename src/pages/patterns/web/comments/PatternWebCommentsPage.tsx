import { collaborationPatternConfigs } from '@/pages/patterns/common/collaborationPatternConfigs';
import PatternWebCollaborationTemplate from '@/pages/patterns/web/collaboration/PatternWebCollaborationTemplate';

export default function PatternWebCommentsPage() {
  return (
    <PatternWebCollaborationTemplate
      config={collaborationPatternConfigs.comments}
    />
  );
}
