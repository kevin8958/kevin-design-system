import { settingsAdminPatternConfigs } from '@/pages/patterns/common/settingsAdminPatternConfigs';
import PatternWebSettingsAdminTemplate from '@/pages/patterns/web/settingsAdmin/PatternWebSettingsAdminTemplate';

export default function PatternWebMemberManagementPage() {
  return (
    <PatternWebSettingsAdminTemplate
      config={settingsAdminPatternConfigs['member-management']}
    />
  );
}
