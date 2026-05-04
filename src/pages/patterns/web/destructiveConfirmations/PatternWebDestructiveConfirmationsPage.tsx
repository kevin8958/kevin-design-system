import { settingsAdminPatternConfigs } from '@/pages/patterns/common/settingsAdminPatternConfigs';
import PatternWebSettingsAdminTemplate from '@/pages/patterns/web/settingsAdmin/PatternWebSettingsAdminTemplate';

export default function PatternWebDestructiveConfirmationsPage() {
  return (
    <PatternWebSettingsAdminTemplate
      config={settingsAdminPatternConfigs['destructive-confirmations']}
    />
  );
}
