import { commercePlansPatternConfigs } from '@/pages/patterns/common/commercePlansPatternConfigs';
import PatternWebCommercePlansTemplate from '@/pages/patterns/web/commercePlans/PatternWebCommercePlansTemplate';

export default function PatternWebPricingSelectionPage() {
  return (
    <PatternWebCommercePlansTemplate
      config={commercePlansPatternConfigs['pricing-selection']}
    />
  );
}
