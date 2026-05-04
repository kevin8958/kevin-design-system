import { commercePlansPatternConfigs } from '@/pages/patterns/common/commercePlansPatternConfigs';
import PatternAppCommercePlansTemplate from '@/pages/patterns/app/commercePlans/PatternAppCommercePlansTemplate';

export default function PatternAppSubscriptionChangePage() {
  return (
    <PatternAppCommercePlansTemplate
      config={commercePlansPatternConfigs['subscription-change']}
    />
  );
}
