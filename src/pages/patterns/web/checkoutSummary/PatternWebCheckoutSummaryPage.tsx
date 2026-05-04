import { commercePlansPatternConfigs } from '@/pages/patterns/common/commercePlansPatternConfigs';
import PatternWebCommercePlansTemplate from '@/pages/patterns/web/commercePlans/PatternWebCommercePlansTemplate';

export default function PatternWebCheckoutSummaryPage() {
  return (
    <PatternWebCommercePlansTemplate
      config={commercePlansPatternConfigs['checkout-summary']}
    />
  );
}
