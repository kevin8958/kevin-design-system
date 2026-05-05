import { notificationsInboxPatternConfigs } from '@/pages/patterns/common/notificationsInboxPatternConfigs';
import PatternAppNotificationsInboxTemplate from '@/pages/patterns/app/notificationsInbox/PatternAppNotificationsInboxTemplate';

export default function PatternAppAlertEscalationPage() {
  return (
    <PatternAppNotificationsInboxTemplate
      config={notificationsInboxPatternConfigs['alert-escalation']}
    />
  );
}
