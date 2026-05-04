import { collaborationPatternConfigs } from '@/pages/patterns/common/collaborationPatternConfigs';
import PatternAppCollaborationTemplate from '@/pages/patterns/app/collaboration/PatternAppCollaborationTemplate';

export default function PatternAppActivityFlowsPage() {
  return (
    <PatternAppCollaborationTemplate
      config={collaborationPatternConfigs['activity-flows']}
    />
  );
}
