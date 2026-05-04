import { commercePlansPatternConfigs } from '@/pages/patterns/common/commercePlansPatternConfigs';
import PatternWebCommercePlansTemplate from '@/pages/patterns/web/commercePlans/PatternWebCommercePlansTemplate';

export default function PatternWebInvoiceFlowsPage() {
  return (
    <PatternWebCommercePlansTemplate
      config={commercePlansPatternConfigs['invoice-flows']}
    />
  );
}
