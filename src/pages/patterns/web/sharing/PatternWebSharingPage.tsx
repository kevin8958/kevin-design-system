import { collaborationPatternConfigs } from '@/pages/patterns/common/collaborationPatternConfigs';
import PatternWebCollaborationTemplate from '@/pages/patterns/web/collaboration/PatternWebCollaborationTemplate';

export default function PatternWebSharingPage() {
  return (
    <PatternWebCollaborationTemplate
      config={collaborationPatternConfigs.sharing}
    />
  );
}
