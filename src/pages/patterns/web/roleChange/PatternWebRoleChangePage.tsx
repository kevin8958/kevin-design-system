import { settingsAdminPatternConfigs } from '@/pages/patterns/common/settingsAdminPatternConfigs';
import PatternWebSettingsAdminTemplate from '@/pages/patterns/web/settingsAdmin/PatternWebSettingsAdminTemplate';

export default function PatternWebRoleChangePage() {
  return (
    <PatternWebSettingsAdminTemplate
      config={settingsAdminPatternConfigs['role-change']}
    />
  );
}
