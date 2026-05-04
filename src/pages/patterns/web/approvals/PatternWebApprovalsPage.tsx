import { collaborationPatternConfigs } from '@/pages/patterns/common/collaborationPatternConfigs';
import PatternWebCollaborationTemplate from '@/pages/patterns/web/collaboration/PatternWebCollaborationTemplate';

export default function PatternWebApprovalsPage() {
  return (
    <PatternWebCollaborationTemplate
      config={collaborationPatternConfigs.approvals}
    />
  );
}
