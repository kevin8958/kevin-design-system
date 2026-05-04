import { settingsAdminPatternConfigs } from '@/pages/patterns/common/settingsAdminPatternConfigs';
import PatternAppSettingsAdminTemplate from '@/pages/patterns/app/settingsAdmin/PatternAppSettingsAdminTemplate';

export default function PatternAppRoleChangePage() {
  return (
    <PatternAppSettingsAdminTemplate
      config={settingsAdminPatternConfigs['role-change']}
    />
  );
}
