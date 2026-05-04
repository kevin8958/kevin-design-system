import { commercePlansPatternConfigs } from '@/pages/patterns/common/commercePlansPatternConfigs';
import PatternAppCommercePlansTemplate from '@/pages/patterns/app/commercePlans/PatternAppCommercePlansTemplate';

export default function PatternAppCheckoutSummaryPage() {
  return (
    <PatternAppCommercePlansTemplate
      config={commercePlansPatternConfigs['checkout-summary']}
    />
  );
}
