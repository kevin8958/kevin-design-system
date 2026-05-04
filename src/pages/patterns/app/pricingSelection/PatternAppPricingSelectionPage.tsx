import { commercePlansPatternConfigs } from '@/pages/patterns/common/commercePlansPatternConfigs';
import PatternAppCommercePlansTemplate from '@/pages/patterns/app/commercePlans/PatternAppCommercePlansTemplate';

export default function PatternAppPricingSelectionPage() {
  return (
    <PatternAppCommercePlansTemplate
      config={commercePlansPatternConfigs['pricing-selection']}
    />
  );
}
