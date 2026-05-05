import { notificationsInboxPatternConfigs } from '@/pages/patterns/common/notificationsInboxPatternConfigs';
import PatternAppNotificationsInboxTemplate from '@/pages/patterns/app/notificationsInbox/PatternAppNotificationsInboxTemplate';

export default function PatternAppNotificationCenterPage() {
  return (
    <PatternAppNotificationsInboxTemplate
      config={notificationsInboxPatternConfigs['notification-center']}
    />
  );
}
