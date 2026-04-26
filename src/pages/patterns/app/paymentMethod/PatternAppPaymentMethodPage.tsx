'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import PatternGuideSection from '@/pages/patterns/common/PatternGuideSection';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import AppPaymentMethodPreview from '@/pages/patterns/app/paymentMethod/AppPaymentMethodPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'AppTextInput',
    type: 'Payment fields',
    description:
      'Handles cardholder, account, expiry, and verification input in a clear stacked flow.',
  },
  {
    id: '2',
    property: 'AppSelect',
    type: 'Billing metadata',
    description:
      'Supports country or billing choices that affect tax and fraud handling.',
  },
  {
    id: '3',
    property: 'AppCheckbox',
    type: 'Storage preference',
    description:
      'Lets the person decide whether a new payment method should be reused later.',
  },
  {
    id: '4',
    property: 'AppButton',
    type: 'Primary / escape action',
    description:
      'Keeps save, confirm, and cancel decisions close to the payment fields.',
  },
  {
    id: '5',
    property: 'AppAlert',
    type: 'Billing failure feedback',
    description:
      'Summarizes payment problems that span multiple fields or verification steps.',
  },
];

const newCardCode = `
import AppCheckbox from '@/components/app/AppCheckbox';
import AppTextInput from '@/components/app/AppTextInput';

export function AppNewCardForm() {
  return (
    <>
      <AppTextInput label="Cardholder name" placeholder="Jane Doe" />
      <AppTextInput label="Card number" placeholder="4242 4242 4242 4242" />
      <AppTextInput label="Expiry" placeholder="10/28" />
      <AppCheckbox label="Save this card for the next renewal" checked />
    </>
  );
}`.trim();

const validationCode = `
import AppAlert from '@/components/app/AppAlert';
import AppTextInput from '@/components/app/AppTextInput';

export function AppPaymentMethodValidation() {
  return (
    <>
      <AppAlert
        variant="danger"
        title="We need updated billing details"
        description="Check the highlighted payment fields and try again."
      />

      <AppTextInput
        label="Card number"
        error
        errorMsg="Check the card number and try again."
      />

      <AppTextInput
        label="CVC"
        error
        errorMsg="Check the security code."
      />
    </>
  );
}`.trim();

const savedMethodCode = `
import AppButton from '@/components/app/AppButton';

export function AppSavedCardConfirmation() {
  return (
    <>
      <AppButton
        variant="outline"
        color="neutral"
        label="Use different card"
      />
    </>
  );
}`.trim();

export default function PatternAppPaymentMethodPage() {
  const [state, setState] = useState<'default' | 'invalid' | 'loading'>(
    'default',
  );
  const [method, setMethod] = useState<'new' | 'saved'>('new');
  const selectedDescription =
    method === 'new'
      ? 'Use the controller to inspect the full new-card entry path on mobile. Keep related billing fields close together so the person can complete the form without hunting for the next requirement.'
      : 'Use the controller to review the shorter saved-method confirmation flow. Even when the card is already known, the person should still understand what is being charged and what verification is required.';
  const selectedMinHeight = method === 'new' ? 980 : 860;

  return (
    <PatternDocsPageShell
      platform="app"
      categoryId="forms"
      categoryLabel="Forms"
      patternId="payment-method"
      title="Payment Method"
      description="A native billing pattern that balances payment trust, structured card input, and clear recovery when verification fails."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between input states and whether the user is adding a new
            card or confirming with a saved method.
          </Typography>

          <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <Typography variant="C1" classes="uppercase font-mono opacity-60">
                State
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Default', value: 'default' },
                  { label: 'Invalid', value: 'invalid' },
                  { label: 'Loading', value: 'loading' },
                ]}
                onChange={(next) =>
                  setState(next as 'default' | 'invalid' | 'loading')
                }
                value={state}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Typography variant="C1" classes="uppercase font-mono opacity-60">
                Method
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'New card', value: 'new' },
                  { label: 'Saved card', value: 'saved' },
                ]}
                onChange={(next) => setMethod(next as 'new' | 'saved')}
                value={method}
              />
            </div>
          </div>
        </FlexWrapper>
      </div>

      <PatternGuideSection
        title="Payment Entry Flow"
        description={selectedDescription}
        example={
          <CodeExample code={newCardCode} className="w-full">
            <AppDevicePreviewFrame
              minHeight={selectedMinHeight}
              maxWidthClass="max-w-[420px]"
            >
              <AppPaymentMethodPreview state={state} method={method} />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Billing Validation"
        description="Payment errors need both reassurance and precision on mobile. Keep failures close to the inputs the person can fix, and explain whether it is safe to retry immediately."
        example={
          <CodeExample code={validationCode} className="w-full">
            <AppDevicePreviewFrame minHeight={980} maxWidthClass="max-w-[420px]">
              <AppPaymentMethodPreview state="invalid" method="new" />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Saved Method Confirmation"
        description="A saved card should shorten the task, not hide the important details. Make the active method clear, show how to switch it, and ask only for the minimum additional verification."
        example={
          <CodeExample code={savedMethodCode} className="w-full">
            <AppDevicePreviewFrame minHeight={860} maxWidthClass="max-w-[420px]">
              <AppPaymentMethodPreview state="default" method="saved" />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <div className="w-full rounded-[28px] border border-dashed border-primary-200 bg-primary-50/50 p-6 dark:border-primary-400/20 dark:bg-primary-400/5">
        <FlexWrapper direction="col" items="start" gap={3}>
          <Typography variant="H4">Pattern Checklist</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-700 dark:!text-neutral-300"
          >
            Keep payment fields tightly grouped, explain storage or billing
            impact before the person commits, and leave a clear path for
            changing methods without losing context.
          </Typography>
        </FlexWrapper>
      </div>

      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Included Components</Typography>
        <SimpleTable columns={compositionColumns} data={compositionRows} />
      </FlexWrapper>
    </PatternDocsPageShell>
  );
}
