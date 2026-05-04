import { commercePlansPatternConfigs } from '@/pages/patterns/common/commercePlansPatternConfigs';
import PatternWebCommercePlansTemplate from '@/pages/patterns/web/commercePlans/PatternWebCommercePlansTemplate';

export default function PatternWebSubscriptionChangePage() {
  return (
    <PatternWebCommercePlansTemplate
      config={commercePlansPatternConfigs['subscription-change']}
    />
  );
}
