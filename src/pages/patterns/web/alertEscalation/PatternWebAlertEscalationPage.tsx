import { notificationsInboxPatternConfigs } from '@/pages/patterns/common/notificationsInboxPatternConfigs';
import PatternWebNotificationsInboxTemplate from '@/pages/patterns/web/notificationsInbox/PatternWebNotificationsInboxTemplate';

export default function PatternWebAlertEscalationPage() {
  return (
    <PatternWebNotificationsInboxTemplate
      config={notificationsInboxPatternConfigs['alert-escalation']}
    />
  );
}
