import { collaborationPatternConfigs } from '@/pages/patterns/common/collaborationPatternConfigs';
import PatternAppCollaborationTemplate from '@/pages/patterns/app/collaboration/PatternAppCollaborationTemplate';

export default function PatternAppSharingPage() {
  return (
    <PatternAppCollaborationTemplate
      config={collaborationPatternConfigs.sharing}
    />
  );
}
