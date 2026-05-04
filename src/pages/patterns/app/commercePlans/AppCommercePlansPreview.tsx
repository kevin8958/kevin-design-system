'use client';

import AppAlert from '@/components/app/AppAlert';
import AppBadge from '@/components/app/AppBadge';
import AppButton from '@/components/app/AppButton';
import AppTag from '@/components/app/AppTag';
import AppTextInput from '@/components/app/AppTextInput';
import { StyleSheet, Text, View } from 'react-native';
import type {
  CommercePlansPatternId,
  CommercePlansPreviewMode,
  CommercePlansPreviewState,
} from '@/pages/patterns/common/commercePlansPatternConfigs';

type AppCommercePlansPreviewProps = {
  patternId: CommercePlansPatternId;
  state?: CommercePlansPreviewState;
  mode?: CommercePlansPreviewMode;
};

const Hero = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => (
  <View style={styles.hero}>
    <View style={styles.eyebrowChip}>
      <Text style={styles.eyebrowText}>{eyebrow}</Text>
    </View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.card}>{children}</View>
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
  <View style={[styles.card, highlight ? styles.planCardHighlight : null]}>
    <View style={styles.stackMd}>
      <View style={styles.inlineBetween}>
        <View style={styles.rowBody}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.planPrice}>{price}</Text>
          <Text style={styles.cardDescription}>{detail}</Text>
        </View>
        {highlight ? (
          <AppBadge label="Popular" size="sm" variant="primary" />
        ) : null}
      </View>
      <AppButton
        fullWidth
        color={highlight ? 'primary' : 'neutral'}
        label={actionLabel}
      />
    </View>
  </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Commerce / Plans"
        title="Choose the plan that fits your team"
        description="Compare tiers, understand billing cadence, and move into checkout without pricing surprises."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="Taxes are calculated at checkout"
          description="The final total may change based on billing country, seat count, and regional rules."
        />
      ) : null}

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Best for 10-50 seats" size="sm" variant="primary" />
          <AppTag label="Annual savings" size="sm" />
          <AppTag label="Priority support" size="sm" />
        </View>
      ) : null}

      <View style={styles.stack}>
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
      </View>
    </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Checkout"
        title="Review your order before payment"
        description="Keep plan, seats, cadence, and total due stable while payment details are confirmed."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="We couldn't verify this payment method"
          description="Update the card details and try again. Your selected plan and seat count have not changed."
        />
      ) : null}

      <Card>
        <View style={styles.inlineBetween}>
          <View style={styles.rowBody}>
            <Text style={styles.cardEyebrow}>Plan</Text>
            <Text style={styles.cardTitle}>Growth plan</Text>
            <Text style={styles.cardDescription}>
              24 seats, annual billing, priority support
            </Text>
          </View>
          <AppBadge label="$480 / month" size="sm" variant="primary" />
        </View>
      </Card>

      <Card>
        <View style={styles.inlineBetween}>
          <View style={styles.rowBody}>
            <Text style={styles.cardEyebrow}>Due today</Text>
            <Text style={styles.cardTitle}>$5,760</Text>
            <Text style={styles.cardDescription}>
              Includes first-year seats and estimated taxes
            </Text>
          </View>
          <AppBadge label="Annual billing" size="sm" variant="success" />
        </View>
      </Card>

      {guided ? (
        <View style={styles.stack}>
          <AppTextInput
            label="Promo code"
            defaultValue="SPRING25"
            placeholder="SPRING25"
          />
          <AppTextInput
            label="Billing contact"
            defaultValue="billing@kevin.studio"
            placeholder="billing@company.com"
          />
        </View>
      ) : null}

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Confirm purchase"
      />
    </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Subscription"
        title="Review plan change impact"
        description="Make current commitment, next plan, proration, and downgrade timing obvious before the account changes."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="This downgrade removes 12 seats"
          description="Reduce active members first or schedule the change for the next renewal."
        />
      ) : null}

      <View style={styles.stack}>
        <Card>
          <View style={styles.inlineBetween}>
            <View style={styles.rowBody}>
              <Text style={styles.cardEyebrow}>Current</Text>
              <Text style={styles.cardTitle}>Growth</Text>
              <Text style={styles.cardDescription}>24 seats, renews May 28</Text>
            </View>
            <AppBadge label="Active now" size="sm" variant="neutral" />
          </View>
        </Card>

        <Card>
          <View style={styles.inlineBetween}>
            <View style={styles.rowBody}>
              <Text style={styles.cardEyebrow}>Next</Text>
              <Text style={styles.cardTitle}>Scale</Text>
              <Text style={styles.cardDescription}>
                Unlimited approvals, higher seat ceiling
              </Text>
            </View>
            <AppBadge label="Starts today" size="sm" variant="primary" />
          </View>
        </Card>
      </View>

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Prorated today" size="sm" variant="primary" />
          <AppTag label="Higher seat limit" size="sm" variant="primary" />
          <AppTag label="Invoice adjusts automatically" size="sm" />
        </View>
      ) : null}

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Confirm subscription change"
      />
    </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Invoices"
        title="Keep invoice status and next action obvious"
        description="Support open, paid, and overdue documents with visible due timing, billing contacts, and recovery actions."
      />

      {isAttention ? (
        <AppAlert
          variant="danger"
          title="Invoice #2048 is overdue"
          description="Pay now or update the billing contact before access restrictions begin."
        />
      ) : null}

      <Card>
        <View style={styles.inlineBetween}>
          <View style={styles.rowBody}>
            <Text style={styles.cardEyebrow}>Latest invoice</Text>
            <Text style={styles.cardTitle}>Invoice #2048</Text>
            <Text style={styles.cardDescription}>
              Due May 12, includes annual Growth plan renewal
            </Text>
          </View>
          <AppBadge
            label={isAttention ? 'Overdue' : 'Open'}
            size="sm"
            variant={isAttention ? 'danger' : 'warning'}
          />
        </View>
      </Card>

      {guided ? (
        <View style={styles.stack}>
          <AppTextInput
            label="Purchase order"
            defaultValue="PO-2048"
            placeholder="PO-2048"
          />
          <AppTextInput
            label="Billing contact"
            defaultValue="finance@kevin.studio"
            placeholder="billing@company.com"
          />
        </View>
      ) : null}

      <View style={styles.stackSm}>
        <AppButton
          fullWidth
          color="primary"
          loading={isLoading}
          label={isAttention ? 'Pay invoice' : 'Download invoice'}
        />
        <AppButton
          fullWidth
          color="neutral"
          variant="outline"
          label="Update billing contact"
        />
      </View>
    </View>
  );
}

export default function AppCommercePlansPreview({
  patternId,
  state = 'default',
  mode = 'standard',
}: AppCommercePlansPreviewProps) {
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

const styles = StyleSheet.create({
  screen: {
    gap: 14,
  },
  hero: {
    gap: 8,
  },
  eyebrowChip: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: 'rgba(37, 99, 235, 0.12)',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  eyebrowText: {
    color: '#1d4ed8',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: '#111827',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
  },
  description: {
    color: '#4b5563',
    fontSize: 14,
    lineHeight: 21,
  },
  card: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 24,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  planCardHighlight: {
    borderColor: '#93c5fd',
    backgroundColor: '#eff6ff',
  },
  inlineBetween: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  rowBody: {
    flex: 1,
    gap: 4,
  },
  stack: {
    gap: 12,
  },
  stackSm: {
    gap: 10,
  },
  stackMd: {
    gap: 12,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  cardEyebrow: {
    color: '#6b7280',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  cardTitle: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
  },
  cardDescription: {
    color: '#6b7280',
    fontSize: 13,
    lineHeight: 19,
  },
  planPrice: {
    color: '#111827',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 32,
  },
});
