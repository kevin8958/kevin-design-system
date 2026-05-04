import { settingsAdminPatternConfigs } from '@/pages/patterns/common/settingsAdminPatternConfigs';
import PatternAppSettingsAdminTemplate from '@/pages/patterns/app/settingsAdmin/PatternAppSettingsAdminTemplate';

export default function PatternAppMemberManagementPage() {
  return (
    <PatternAppSettingsAdminTemplate
      config={settingsAdminPatternConfigs['member-management']}
    />
  );
}
