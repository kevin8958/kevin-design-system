import { commercePlansPatternConfigs } from '@/pages/patterns/common/commercePlansPatternConfigs';
import PatternAppCommercePlansTemplate from '@/pages/patterns/app/commercePlans/PatternAppCommercePlansTemplate';

export default function PatternAppInvoiceFlowsPage() {
  return (
    <PatternAppCommercePlansTemplate
      config={commercePlansPatternConfigs['invoice-flows']}
    />
  );
}
