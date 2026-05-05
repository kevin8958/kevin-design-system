import { notificationsInboxPatternConfigs } from '@/pages/patterns/common/notificationsInboxPatternConfigs';
import PatternAppNotificationsInboxTemplate from '@/pages/patterns/app/notificationsInbox/PatternAppNotificationsInboxTemplate';

export default function PatternAppDigestSettingsPage() {
  return (
    <PatternAppNotificationsInboxTemplate
      config={notificationsInboxPatternConfigs['digest-settings']}
    />
  );
}
