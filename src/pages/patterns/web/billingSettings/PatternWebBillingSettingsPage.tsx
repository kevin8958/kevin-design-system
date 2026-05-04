import { settingsAdminPatternConfigs } from '@/pages/patterns/common/settingsAdminPatternConfigs';
import PatternWebSettingsAdminTemplate from '@/pages/patterns/web/settingsAdmin/PatternWebSettingsAdminTemplate';

export default function PatternWebBillingSettingsPage() {
  return (
    <PatternWebSettingsAdminTemplate
      config={settingsAdminPatternConfigs['billing-settings']}
    />
  );
}
