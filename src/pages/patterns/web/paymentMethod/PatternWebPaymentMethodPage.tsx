'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import PatternGuideSection from '@/pages/patterns/common/PatternGuideSection';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import WebPaymentMethodPreview from '@/pages/patterns/web/paymentMethod/WebPaymentMethodPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'TextInput',
    type: 'Payment fields',
    description:
      'Handles cardholder, account, expiry, and verification fields with precise validation.',
  },
  {
    id: '2',
    property: 'Select',
    type: 'Billing metadata',
    description:
      'Supports country or billing choices that affect tax, fraud, and receipt logic.',
  },
  {
    id: '3',
    property: 'Checkbox',
    type: 'Storage preference',
    description:
      'Lets the user decide whether a new payment method should be reused later.',
  },
  {
    id: '4',
    property: 'Button',
    type: 'Primary / escape action',
    description:
      'Keeps save, confirm, and cancel decisions anchored near the billing fields.',
  },
  {
    id: '5',
    property: 'Alert',
    type: 'Billing failure feedback',
    description:
      'Summarizes payment problems that cross multiple fields or verification steps.',
  },
];

const newCardCode = `
import Checkbox from '@/components/input/Checkbox';
import TextInput from '@/components/input/TextInput';

export function NewCardForm() {
  return (
    <>
      <TextInput label="Cardholder name" placeholder="Jane Doe" />
      <TextInput label="Card number" placeholder="4242 4242 4242 4242" />
      <TextInput label="Expiry" placeholder="10/28" />
      <Checkbox label="Save this card for the next renewal" checked />
    </>
  );
}`.trim();

const validationCode = `
import Alert from '@/components/feedback/Alert';
import TextInput from '@/components/input/TextInput';

export function PaymentMethodValidation() {
  return (
    <>
      <Alert
        variant="danger"
        title="We need updated billing details"
        description="Check the highlighted payment fields and try again."
      />

      <TextInput
        label="Card number"
        error
        errorMsg="Check the card number and try again."
      />

      <TextInput
        label="CVC"
        error
        errorMsg="Check the security code."
      />
    </>
  );
}`.trim();

const savedMethodCode = `
import Button from '@/components/action/Button';

export function SavedCardConfirmation() {
  return (
    <div className="rounded-2xl border border-neutral-200 p-4">
      <p>Visa ending in 4821</p>
      <Button variant="outline" color="neutral">
        Use different card
      </Button>
    </div>
  );
}`.trim();

export default function PatternWebPaymentMethodPage() {
  const [state, setState] = useState<'default' | 'invalid' | 'loading'>(
    'default',
  );
  const [method, setMethod] = useState<'new' | 'saved'>('new');
  const selectedDescription =
    method === 'new'
      ? 'Use the controller to inspect the full new-card entry path. Every required billing field should stay close together so the user can complete or fix payment details quickly.'
      : 'Use the controller to review the shorter confirmation path for a previously stored payment method. The user should still understand what is being charged and what extra verification is needed.';

  return (
    <PatternDocsPageShell
      platform="web"
      categoryId="forms"
      categoryLabel="Forms"
      patternId="payment-method"
      title="Payment Method"
      description="A web billing form that balances payment trust, structured card input, and clear recovery when verification or billing details fail."
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
            <WebPaymentMethodPreview state={state} method={method} />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Billing Validation"
        description="Payment errors often require both field-level corrections and high-level reassurance. Keep billing failures close to the affected inputs and explain what the user can safely retry."
        example={
          <CodeExample code={validationCode} className="w-full">
            <WebPaymentMethodPreview state="invalid" method="new" />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Saved Method Confirmation"
        description="A saved method should shorten the form, not hide it. Make the active card obvious, show how to switch methods, and ask only for the minimum verification details still required."
        example={
          <CodeExample code={savedMethodCode} className="w-full">
            <WebPaymentMethodPreview state="default" method="saved" />
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
            impact before the user commits, and leave a clear escape hatch for
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
