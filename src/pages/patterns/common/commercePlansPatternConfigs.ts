export type CommercePlansPatternId =
  | 'pricing-selection'
  | 'checkout-summary'
  | 'subscription-change'
  | 'invoice-flows';

export type CommercePlansPreviewState = 'default' | 'attention' | 'loading';
export type CommercePlansPreviewMode = 'standard' | 'guided';

type CommercePlansGuide = {
  title: string;
  description: string;
  code: string;
  previewState?: CommercePlansPreviewState;
  previewMode?: CommercePlansPreviewMode;
};

type CommercePlansCompositionRow = {
  id: string;
  property: string;
  type: string;
  description: string;
};

export type CommercePlansPatternConfig = {
  id: CommercePlansPatternId;
  title: string;
  webDescription: string;
  appDescription: string;
  webControllerDescription: string;
  appControllerDescription: string;
  appPreviewMinHeight?: number;
  guides: [CommercePlansGuide, CommercePlansGuide, CommercePlansGuide];
  checklist: string;
  webCompositionRows: CommercePlansCompositionRow[];
  appCompositionRows: CommercePlansCompositionRow[];
};

const pricingSelectionGuides: [
  CommercePlansGuide,
  CommercePlansGuide,
  CommercePlansGuide,
] = [
  {
    title: 'Plan Comparison',
    description:
      'Pricing selection needs to make tier differences legible before the person thinks about billing. Put the jobs-to-be-done, seat assumptions, and strongest distinctions directly in the comparison surface.',
    code: `
import Badge from '@/components/data/Badge';
import Button from '@/components/action/Button';

export function PricingCards() {
  return (
    <>
      <Badge label="Most popular" variant="primary" />
      <Button color="primary">Choose Growth</Button>
    </>
  );
}`.trim(),
  },
  {
    title: 'Guided Recommendation',
    description:
      'When there are multiple viable plans, guide the decision with usage cues like team size, annual savings, or feature emphasis. Recommendation should reduce uncertainty, not hide the alternatives.',
    code: `
import Tag from '@/components/data/Tag';

export function PricingHints() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Best for 10-50 seats" variant="primary" />
      <Tag label="Annual savings" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Billing Friction And Recovery',
    description:
      'If taxes, trial expiration, or region-specific restrictions affect purchase, surface them before checkout. The person choosing a plan should not feel ambushed by pricing rules one step later.',
    code: `
import Alert from '@/components/feedback/Alert';

export function PricingNotice() {
  return (
    <Alert
      variant="info"
      title="Taxes are calculated at checkout"
      description="Your final total may vary based on billing country and seat count."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const checkoutSummaryGuides: [
  CommercePlansGuide,
  CommercePlansGuide,
  CommercePlansGuide,
] = [
  {
    title: 'Order Breakdown',
    description:
      'Checkout summary should answer three questions without making the person scan a receipt: what they are buying, how often they will be billed, and what total is due today.',
    code: `
import Badge from '@/components/data/Badge';

export function CheckoutSummary() {
  return (
    <div className="flex items-center justify-between rounded-2xl border p-4">
      <span>Growth plan · 24 seats</span>
      <Badge label="$480 / month" variant="primary" />
    </div>
  );
}`.trim(),
  },
  {
    title: 'Trust And Context',
    description:
      'Use guided content for promo codes, trial carry-over, renewal timing, or tax hints when the billing model is not obvious. These details belong in the summary layer, not hidden behind a tooltip after payment starts.',
    code: `
import TextInput from '@/components/input/TextInput';

export function PromoCodeField() {
  return <TextInput label="Promo code" placeholder="SPRING25" />;
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Failed Or Incomplete Payment States',
    description:
      'If the checkout cannot complete because of card, seat, or identity issues, keep the summary stable and anchor the error near the total or payment block. The user should never wonder whether the purchase contents changed.',
    code: `
import Alert from '@/components/feedback/Alert';

export function CheckoutError() {
  return (
    <Alert
      variant="warning"
      title="We couldn't verify this payment method"
      description="Update the card details and try the purchase again."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const subscriptionChangeGuides: [
  CommercePlansGuide,
  CommercePlansGuide,
  CommercePlansGuide,
] = [
  {
    title: 'Current Versus Next Plan',
    description:
      'Subscription change flows need a side-by-side understanding of the current commitment and the next one. Show timing, proration, and what changes immediately versus later.',
    code: `
import Badge from '@/components/data/Badge';

export function SubscriptionChange() {
  return (
    <>
      <Badge label="Current: Growth" />
      <Badge label="Next: Scale" variant="primary" />
    </>
  );
}`.trim(),
  },
  {
    title: 'Guided Impact Summary',
    description:
      'When the change affects billing cadence, entitlements, or seat minimums, explain the impact in plain language. People should know whether they are upgrading now, downgrading later, or triggering credits.',
    code: `
import Tag from '@/components/data/Tag';

export function ProrationHints() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Prorated today" variant="primary" />
      <Tag label="Higher seat limit" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Downgrade Or Restriction Warning',
    description:
      'Changes that remove seats or features should create a clear warning path before confirmation. Call out the actual risk: lost entitlements, over-limit members, or scheduled downgrade timing.',
    code: `
import Alert from '@/components/feedback/Alert';

export function DowngradeWarning() {
  return (
    <Alert
      variant="warning"
      title="This downgrade removes 12 seats"
      description="Reduce active members first or schedule the change for the next renewal."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const invoiceFlowsGuides: [
  CommercePlansGuide,
  CommercePlansGuide,
  CommercePlansGuide,
] = [
  {
    title: 'Invoice Timeline',
    description:
      'Invoice flows should connect invoice status, due date, and the exact next action. Whether the user is downloading a PDF, paying an open invoice, or reconciling a failed payment, the timeline needs to be obvious.',
    code: `
import Badge from '@/components/data/Badge';

export function InvoiceStatus() {
  return (
    <div className="flex items-center justify-between rounded-2xl border p-4">
      <span>Invoice #2048</span>
      <Badge label="Open" variant="warning" />
    </div>
  );
}`.trim(),
  },
  {
    title: 'Guided Accounting Tasks',
    description:
      'Invoice-heavy customers often need metadata, contacts, and export actions more than flashy layout. Guided content should help with PO references, billing contacts, and document retrieval without creating a separate admin maze.',
    code: `
import TextInput from '@/components/input/TextInput';

export function InvoiceMetadata() {
  return <TextInput label="Purchase order" placeholder="PO-2048" />;
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Overdue And Recovery States',
    description:
      'When an invoice is overdue or blocked, elevate that state above the invoice list. The recovery action should be concrete: pay now, update billing contact, or download the pending document for finance.',
    code: `
import Alert from '@/components/feedback/Alert';

export function InvoiceOverdue() {
  return (
    <Alert
      variant="danger"
      title="This invoice is overdue"
      description="Pay now or update the billing contact before access restrictions begin."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

export const commercePlansPatternConfigs: Record<
  CommercePlansPatternId,
  CommercePlansPatternConfig
> = {
  'pricing-selection': {
    id: 'pricing-selection',
    title: 'Pricing Selection',
    webDescription:
      'A commerce pattern for comparing plans, clarifying team fit, and reducing pricing uncertainty before the buyer begins checkout.',
    appDescription:
      'A mobile commerce pattern for selecting plans with clear tier comparison, recommendation cues, and billing context before checkout.',
    webControllerDescription:
      'Switch between the standard pricing comparison and a more guided recommendation mode, plus the state where billing context or tax information needs extra emphasis.',
    appControllerDescription:
      'Toggle between the normal mobile pricing flow and a guided plan-selection mode with stronger recommendation and billing cues.',
    appPreviewMinHeight: 760,
    guides: pricingSelectionGuides,
    checklist:
      'Help the buyer compare plans first, guide the likely fit without hiding alternatives, and surface billing caveats before checkout begins.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Badge',
        type: 'Plan emphasis',
        description:
          'Highlights recommended or popular tiers without making the comparison unreadable.',
      },
      {
        id: '2',
        property: 'Tag',
        type: 'Fit guidance',
        description:
          'Explains who the plan is for and what decision cue matters most.',
      },
      {
        id: '3',
        property: 'Button',
        type: 'Plan selection',
        description:
          'Moves the buyer into checkout with the chosen tier and cadence.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Pricing caveat',
        description:
          'Handles tax, trial, or regional pricing notes before the buyer commits.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppBadge',
        type: 'Plan emphasis',
        description:
          'Keeps recommendation and popularity cues visible in stacked mobile pricing cards.',
      },
      {
        id: '2',
        property: 'AppTag',
        type: 'Fit guidance',
        description:
          'Supports quick plan-fit hints like team size or annual savings.',
      },
      {
        id: '3',
        property: 'AppButton',
        type: 'Plan selection',
        description:
          'Carries the main action into checkout after the tier is chosen.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Pricing caveat',
        description:
          'Explains taxes, trials, or regional notes before purchase flow begins.',
      },
    ],
  },
  'checkout-summary': {
    id: 'checkout-summary',
    title: 'Checkout Summary',
    webDescription:
      'A purchase-summary pattern that stabilizes pricing, seats, discounts, and total due while the buyer completes payment.',
    appDescription:
      'A mobile checkout-summary pattern that keeps order context, totals, and payment recovery readable on a narrow screen.',
    webControllerDescription:
      'Switch between the standard summary view and a guided checkout state with promo and timing details, plus the state where payment validation needs recovery.',
    appControllerDescription:
      'Toggle between the normal mobile checkout summary and a guided state that adds more pricing context before payment is submitted.',
    appPreviewMinHeight: 760,
    guides: checkoutSummaryGuides,
    checklist:
      'Keep the order contents stable, explain totals and billing cadence clearly, and anchor payment errors without making the buyer question the selected purchase.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Badge',
        type: 'Total and billing cue',
        description:
          'Communicates recurring total, renewal timing, or discount state at a glance.',
      },
      {
        id: '2',
        property: 'TextInput',
        type: 'Promo or metadata',
        description:
          'Supports discount and accounting details without leaving the checkout surface.',
      },
      {
        id: '3',
        property: 'Button',
        type: 'Payment progression',
        description:
          'Handles confirming the order or retrying after payment correction.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Payment error',
        description:
          'Explains why payment failed while leaving order contents unchanged.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppBadge',
        type: 'Total and billing cue',
        description:
          'Keeps pricing context visible in a compact mobile order summary.',
      },
      {
        id: '2',
        property: 'AppTextInput',
        type: 'Promo or metadata',
        description:
          'Captures promo codes or billing notes directly in the checkout flow.',
      },
      {
        id: '3',
        property: 'AppButton',
        type: 'Payment progression',
        description:
          'Advances purchase or retries payment in a touch-friendly layout.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Payment error',
        description:
          'Keeps payment recovery close to the total and selected order contents.',
      },
    ],
  },
  'subscription-change': {
    id: 'subscription-change',
    title: 'Subscription Change',
    webDescription:
      'A subscription-management pattern for upgrades, downgrades, and proration decisions with clear timing and impact summary.',
    appDescription:
      'A mobile subscription-change pattern that explains current versus next plan state, proration, and downgrade risk before confirmation.',
    webControllerDescription:
      'Switch between the standard change flow and a guided impact summary mode, plus the state where downgrade or seat risk needs extra warning.',
    appControllerDescription:
      'Toggle between the normal mobile subscription-change flow and a guided state that spells out credits, timing, and seat impact.',
    appPreviewMinHeight: 760,
    guides: subscriptionChangeGuides,
    checklist:
      'Show current versus next plan clearly, explain whether the change is immediate or scheduled, and warn when seats or features will be removed.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Badge',
        type: 'Current and next state',
        description:
          'Clarifies the plan transition before payment or scheduling details appear.',
      },
      {
        id: '2',
        property: 'Tag',
        type: 'Impact summary',
        description:
          'Explains proration, credits, and capability changes in a scannable way.',
      },
      {
        id: '3',
        property: 'Button',
        type: 'Confirm change',
        description:
          'Completes the upgrade, downgrade, or scheduled plan update.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Downgrade warning',
        description:
          'Elevates seat or entitlement removal before the user confirms.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppBadge',
        type: 'Current and next state',
        description:
          'Keeps the before/after plan comparison legible in a stacked mobile view.',
      },
      {
        id: '2',
        property: 'AppTag',
        type: 'Impact summary',
        description:
          'Highlights proration, credits, or seat effects without extra modal steps.',
      },
      {
        id: '3',
        property: 'AppButton',
        type: 'Confirm change',
        description:
          'Handles the final upgrade or downgrade confirmation action.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Downgrade warning',
        description:
          'Explains seat loss, feature removal, or scheduled timing before commit.',
      },
    ],
  },
  'invoice-flows': {
    id: 'invoice-flows',
    title: 'Invoice Flows',
    webDescription:
      'An invoice-management pattern for open, paid, and overdue billing documents with clear next actions for finance and admins.',
    appDescription:
      'A mobile invoice-flow pattern that keeps invoice status, due timing, and accounting actions readable and actionable on smaller screens.',
    webControllerDescription:
      'Switch between the normal invoice flow and a guided accounting mode with metadata fields, plus the overdue state where recovery should dominate the page.',
    appControllerDescription:
      'Toggle between the standard mobile invoice view and a guided mode that adds billing metadata and stronger overdue recovery cues.',
    appPreviewMinHeight: 760,
    guides: invoiceFlowsGuides,
    checklist:
      'Anchor every invoice in status and due timing, keep the next accounting action obvious, and surface overdue recovery above the invoice list itself.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Badge',
        type: 'Invoice state',
        description:
          'Marks whether the invoice is open, paid, overdue, or processing.',
      },
      {
        id: '2',
        property: 'TextInput',
        type: 'Accounting metadata',
        description:
          'Captures billing contact or purchase order details used during reconciliation.',
      },
      {
        id: '3',
        property: 'Button',
        type: 'Pay or download',
        description:
          'Carries the main invoice action like pay now or download document.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Overdue warning',
        description:
          'Elevates overdue or blocked invoice states before secondary finance tasks.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppBadge',
        type: 'Invoice state',
        description:
          'Keeps invoice status visible in a compact mobile header.',
      },
      {
        id: '2',
        property: 'AppTextInput',
        type: 'Accounting metadata',
        description:
          'Supports PO or billing-contact edits in a stacked finance flow.',
      },
      {
        id: '3',
        property: 'AppButton',
        type: 'Pay or download',
        description:
          'Supports invoice payment or retrieval without crowding the screen.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Overdue warning',
        description:
          'Pushes overdue recovery above the rest of the invoice context.',
      },
    ],
  },
};
