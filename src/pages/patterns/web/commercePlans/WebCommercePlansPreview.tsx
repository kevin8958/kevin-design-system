'use client';

import Alert from '@/components/feedback/Alert';
import Badge from '@/components/data/Badge';
import Tag from '@/components/data/Tag';
import Button from '@/components/action/Button';
import TextInput from '@/components/input/TextInput';
import type {
  CommercePlansPatternId,
  CommercePlansPreviewMode,
  CommercePlansPreviewState,
} from '@/pages/patterns/common/commercePlansPatternConfigs';

type WebCommercePlansPreviewProps = {
  patternId: CommercePlansPatternId;
  state?: CommercePlansPreviewState;
  mode?: CommercePlansPreviewMode;
};

const Surface = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[720px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
    <div className="flex flex-col gap-5">{children}</div>
  </div>
);

const Hero = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-3">
    <span className="inline-flex w-fit items-center rounded-full bg-secondary-100 px-3 py-1 text-xs font-semibold text-secondary-700 dark:bg-primary-400/10 dark:text-primary-300">
      {eyebrow}
    </span>
    <div className="flex flex-col gap-1">
      <h3 className="text-[26px] font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
        {title}
      </h3>
      <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  </div>
);

const InfoCard = ({
  eyebrow,
  title,
  description,
  emphasis,
}: {
  eyebrow: string;
  title: string;
  description: string;
  emphasis?: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <p className="text-xs font-mono uppercase tracking-wide text-neutral-500">
          {eyebrow}
        </p>
        <p className="mt-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          {title}
        </p>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
      {emphasis}
    </div>
  </div>
);

const PlanCard = ({
  name,
  price,
  detail,
  highlight = false,
  actionLabel,
}: {
  name: string;
  price: string;
  detail: string;
  highlight?: boolean;
  actionLabel: string;
}) => (
  <div
    className={`rounded-[24px] border p-5 ${
      highlight
        ? 'border-primary-300 bg-primary-50/60 dark:border-primary-500/40 dark:bg-primary-500/10'
        : 'border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900'
    }`}
  >
    <div className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <p className="mt-1 text-[28px] font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
            {price}
          </p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            {detail}
          </p>
        </div>
        {highlight ? <Badge label="Most popular" size="sm" variant="primary" /> : null}
      </div>
      <Button color={highlight ? 'primary' : 'neutral'} fullWidth>
        {actionLabel}
      </Button>
    </div>
  </div>
);

function PricingSelectionPreview({
  state,
  mode,
}: {
  state: CommercePlansPreviewState;
  mode: CommercePlansPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';

  return (
    <Surface>
      <Hero
        eyebrow="Commerce / Plans"
        title="Choose the plan that fits your team"
        description="Compare tiers, understand billing cadence, and move into checkout with enough context to avoid pricing surprises."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="Taxes are calculated at checkout"
          description="The final total may change based on billing country, seat count, and applicable regional rules."
        />
      ) : null}

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Best for 10-50 seats" variant="primary" />
          <Tag label="Annual savings" />
          <Tag label="Priority support included" />
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <PlanCard
          name="Starter"
          price="$39"
          detail="For individuals validating the workflow"
          actionLabel="Choose Starter"
        />
        <PlanCard
          name="Growth"
          price="$149"
          detail="For teams that need collaboration and approvals"
          highlight
          actionLabel="Choose Growth"
        />
        <PlanCard
          name="Scale"
          price="$399"
          detail="For organizations with billing and security controls"
          actionLabel="Talk to sales"
        />
      </div>
    </Surface>
  );
}

function CheckoutSummaryPreview({
  state,
  mode,
}: {
  state: CommercePlansPreviewState;
  mode: CommercePlansPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <Surface>
      <Hero
        eyebrow="Checkout"
        title="Review your order before payment"
        description="Keep plan, seats, cadence, and total due stable while the buyer completes payment or updates billing details."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="We couldn't verify this payment method"
          description="Update the card details and try the purchase again. Your selected plan and seat count have not changed."
        />
      ) : null}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InfoCard
          eyebrow="Plan"
          title="Growth plan"
          description="24 seats, annual billing, priority support"
          emphasis={<Badge label="$480 / month" size="sm" variant="primary" />}
        />
        <InfoCard
          eyebrow="Due today"
          title="$5,760"
          description="Includes first-year seats and estimated taxes"
          emphasis={<Badge label="Billed annually" size="sm" variant="success" />}
        />
      </div>

      {guided ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextInput
            label="Promo code"
            placeholder="SPRING25"
            inputProps={{ defaultValue: 'SPRING25' }}
          />
          <TextInput
            label="Billing contact"
            placeholder="billing@company.com"
            inputProps={{ defaultValue: 'billing@kevin.studio' }}
          />
        </div>
      ) : null}

      <Button color="primary" fullWidth loading={isLoading}>
        Confirm purchase
      </Button>
    </Surface>
  );
}

function SubscriptionChangePreview({
  state,
  mode,
}: {
  state: CommercePlansPreviewState;
  mode: CommercePlansPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <Surface>
      <Hero
        eyebrow="Subscription"
        title="Review plan change impact"
        description="Make the current commitment, next plan, proration, and downgrade timing obvious before the account changes."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="This downgrade removes 12 seats"
          description="Reduce active members first or schedule the change for the next renewal to avoid access interruptions."
        />
      ) : null}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InfoCard
          eyebrow="Current"
          title="Growth"
          description="24 seats, renews May 28"
          emphasis={<Badge label="Active now" size="sm" variant="neutral" />}
        />
        <InfoCard
          eyebrow="Next"
          title="Scale"
          description="Unlimited approvals, higher seat ceiling"
          emphasis={<Badge label="Starts today" size="sm" variant="primary" />}
        />
      </div>

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Prorated today" variant="primary" />
          <Tag label="Higher seat limit" variant="primary" />
          <Tag label="Invoice adjusts automatically" />
        </div>
      ) : null}

      <Button color="primary" fullWidth loading={isLoading}>
        Confirm subscription change
      </Button>
    </Surface>
  );
}

function InvoiceFlowsPreview({
  state,
  mode,
}: {
  state: CommercePlansPreviewState;
  mode: CommercePlansPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <Surface>
      <Hero
        eyebrow="Invoices"
        title="Keep invoice status and next action obvious"
        description="Support open, paid, and overdue documents with visible due timing, billing contacts, and quick recovery actions."
      />

      {isAttention ? (
        <Alert
          variant="danger"
          title="Invoice #2048 is overdue"
          description="Pay now or update the billing contact before access restrictions begin."
        />
      ) : null}

      <InfoCard
        eyebrow="Latest invoice"
        title="Invoice #2048"
        description="Due May 12, includes annual Growth plan renewal"
        emphasis={
          <Badge
            label={isAttention ? 'Overdue' : 'Open'}
            size="sm"
            variant={isAttention ? 'danger' : 'warning'}
          />
        }
      />

      {guided ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextInput
            label="Purchase order"
            placeholder="PO-2048"
            inputProps={{ defaultValue: 'PO-2048' }}
          />
          <TextInput
            label="Billing contact"
            placeholder="billing@company.com"
            inputProps={{ defaultValue: 'finance@kevin.studio' }}
          />
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <Button color="primary" fullWidth loading={isLoading}>
          {isAttention ? 'Pay invoice' : 'Download invoice'}
        </Button>
        <Button color="neutral" fullWidth>
          Update billing contact
        </Button>
      </div>
    </Surface>
  );
}

export default function WebCommercePlansPreview({
  patternId,
  state = 'default',
  mode = 'standard',
}: WebCommercePlansPreviewProps) {
  switch (patternId) {
    case 'pricing-selection':
      return <PricingSelectionPreview state={state} mode={mode} />;
    case 'checkout-summary':
      return <CheckoutSummaryPreview state={state} mode={mode} />;
    case 'subscription-change':
      return <SubscriptionChangePreview state={state} mode={mode} />;
    case 'invoice-flows':
      return <InvoiceFlowsPreview state={state} mode={mode} />;
    default:
      return null;
  }
}
