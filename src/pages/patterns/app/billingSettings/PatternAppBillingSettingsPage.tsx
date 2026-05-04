import { settingsAdminPatternConfigs } from '@/pages/patterns/common/settingsAdminPatternConfigs';
import PatternAppSettingsAdminTemplate from '@/pages/patterns/app/settingsAdmin/PatternAppSettingsAdminTemplate';

export default function PatternAppBillingSettingsPage() {
  return (
    <PatternAppSettingsAdminTemplate
      config={settingsAdminPatternConfigs['billing-settings']}
    />
  );
}
