'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import PatternGuideSection from '@/pages/patterns/common/PatternGuideSection';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import WebAddressEntryPreview from '@/pages/patterns/web/addressEntry/WebAddressEntryPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'TextInput',
    type: 'Location details',
    description:
      'Captures recipient, street, city, and postal data with a predictable field rhythm.',
  },
  {
    id: '2',
    property: 'Select',
    type: 'Structured location choices',
    description:
      'Prevents ambiguous region or country entry that could affect tax and shipping logic.',
  },
  {
    id: '3',
    property: 'Checkbox',
    type: 'Billing shortcut',
    description:
      'Lets users reuse the shipping address instead of re-entering the same information.',
  },
  {
    id: '4',
    property: 'Textarea',
    type: 'Delivery notes',
    description:
      'Holds optional instructions without cluttering the required address fields.',
  },
  {
    id: '5',
    property: 'Alert',
    type: 'Form-level feedback',
    description:
      'Explains cross-field delivery issues that matter beyond a single input.',
  },
];

const shippingCode = `
import Checkbox from '@/components/input/Checkbox';
import Select from '@/components/input/Select';
import TextInput from '@/components/input/TextInput';

export function ShippingAddressForm() {
  return (
    <>
      <TextInput label="Recipient" placeholder="Jane Doe" />
      <TextInput label="Street address" placeholder="123 Main St" />
      <Select label="Region" options={regionOptions} value="bc" />
      <Checkbox label="Billing address is the same as shipping" checked />
    </>
  );
}`.trim();

const validationCode = `
import Alert from '@/components/feedback/Alert';
import Select from '@/components/input/Select';
import TextInput from '@/components/input/TextInput';

export function AddressValidation() {
  return (
    <>
      <Alert
        variant="danger"
        title="A few address fields need to be fixed"
        description="Check the highlighted location details before continuing."
      />

      <Select
        label="Region"
        options={regionOptions}
        value="bc"
        invalid
        errorMsg="Select the region used for delivery rates."
      />

      <TextInput
        label="Postal code"
        error
        errorMsg="Use the postal code tied to the delivery address."
      />
    </>
  );
}`.trim();

const billingCode = `
import TextInput from '@/components/input/TextInput';

export function SeparateBillingAddress() {
  return (
    <>
      <TextInput label="Billing contact" placeholder="Jane Doe" />
      <TextInput
        label="Billing email"
        placeholder="billing@company.com"
      />
    </>
  );
}`.trim();

export default function PatternWebAddressEntryPage() {
  const [state, setState] = useState<'default' | 'invalid' | 'loading'>(
    'default',
  );
  const [billing, setBilling] = useState<'same' | 'separate'>('same');
  const selectedDescription =
    billing === 'same'
      ? 'Use the controller to review the simplest address path, where shipping and billing match. This keeps the form short and helps people finish without duplicate entry.'
      : 'Use the controller to inspect the expanded address flow for cases where billing details need to diverge. The extra fields should appear only when they are truly needed.';

  return (
    <PatternDocsPageShell
      platform="web"
      categoryId="forms"
      categoryLabel="Forms"
      patternId="address-entry"
      title="Address Entry"
      description="A structured web address form that keeps shipping, billing, and delivery context readable while supporting validation and longer fulfillment flows."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between validation states and whether billing is reused or
            captured separately from shipping.
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
                Billing
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Same as shipping', value: 'same' },
                  { label: 'Separate billing', value: 'separate' },
                ]}
                onChange={(next) => setBilling(next as 'same' | 'separate')}
                value={billing}
              />
            </div>
          </div>
        </FlexWrapper>
      </div>

      <PatternGuideSection
        title="Shipping And Billing Layout"
        description={selectedDescription}
        example={
          <CodeExample code={shippingCode} className="w-full">
            <WebAddressEntryPreview state={state} billing={billing} />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Region Rules And Validation"
        description="Address failures usually come from structured fields like region, postal code, or delivery availability. Keep the invalid state obvious without forcing users to rediscover the full form."
        example={
          <CodeExample code={validationCode} className="w-full">
            <WebAddressEntryPreview state="invalid" billing="same" />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Delivery Notes And Billing Variants"
        description="Optional details such as delivery notes and alternate billing information should appear in context, not as a second full form the user has to parse from the beginning."
        example={
          <CodeExample code={billingCode} className="w-full">
            <WebAddressEntryPreview state="default" billing="separate" />
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
            Put structured location fields before optional notes, reveal
            separate billing only when needed, and keep delivery validation near
            the fields it affects.
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
