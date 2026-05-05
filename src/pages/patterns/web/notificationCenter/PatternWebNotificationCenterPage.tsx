import { notificationsInboxPatternConfigs } from '@/pages/patterns/common/notificationsInboxPatternConfigs';
import PatternWebNotificationsInboxTemplate from '@/pages/patterns/web/notificationsInbox/PatternWebNotificationsInboxTemplate';

export default function PatternWebNotificationCenterPage() {
  return (
    <PatternWebNotificationsInboxTemplate
      config={notificationsInboxPatternConfigs['notification-center']}
    />
  );
}
