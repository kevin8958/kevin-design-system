import { notificationsInboxPatternConfigs } from '@/pages/patterns/common/notificationsInboxPatternConfigs';
import PatternAppNotificationsInboxTemplate from '@/pages/patterns/app/notificationsInbox/PatternAppNotificationsInboxTemplate';

export default function PatternAppInboxTriagePage() {
  return (
    <PatternAppNotificationsInboxTemplate
      config={notificationsInboxPatternConfigs['inbox-triage']}
    />
  );
}
