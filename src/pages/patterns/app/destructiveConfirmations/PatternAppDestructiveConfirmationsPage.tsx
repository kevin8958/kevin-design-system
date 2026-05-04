import { settingsAdminPatternConfigs } from '@/pages/patterns/common/settingsAdminPatternConfigs';
import PatternAppSettingsAdminTemplate from '@/pages/patterns/app/settingsAdmin/PatternAppSettingsAdminTemplate';

export default function PatternAppDestructiveConfirmationsPage() {
  return (
    <PatternAppSettingsAdminTemplate
      config={settingsAdminPatternConfigs['destructive-confirmations']}
    />
  );
}
