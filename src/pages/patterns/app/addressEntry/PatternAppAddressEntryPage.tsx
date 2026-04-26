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
import AppAddressEntryPreview from '@/pages/patterns/app/addressEntry/AppAddressEntryPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'AppTextInput',
    type: 'Location details',
    description:
      'Captures recipient, street, city, and postal data in a predictable mobile stack.',
  },
  {
    id: '2',
    property: 'AppSelect',
    type: 'Structured location choices',
    description:
      'Supports region and country selection without pushing users into freeform entry.',
  },
  {
    id: '3',
    property: 'AppCheckbox',
    type: 'Billing shortcut',
    description:
      'Lets the person reuse shipping details instead of repeating the same address.',
  },
  {
    id: '4',
    property: 'AppTextarea',
    type: 'Delivery notes',
    description:
      'Holds optional delivery context without interrupting required address fields.',
  },
  {
    id: '5',
    property: 'AppAlert',
    type: 'Form-level feedback',
    description:
      'Explains address problems that affect shipping beyond a single field.',
  },
];

const shippingCode = `
import AppCheckbox from '@/components/app/AppCheckbox';
import AppSelect from '@/components/app/AppSelect';
import AppTextInput from '@/components/app/AppTextInput';

export function AppShippingAddressForm() {
  return (
    <>
      <AppTextInput label="Recipient" placeholder="Jane Doe" />
      <AppTextInput label="Street address" placeholder="123 Main St" />
      <AppSelect label="Region" options={regionOptions} value="bc" />
      <AppCheckbox label="Billing address is the same as shipping" checked />
    </>
  );
}`.trim();

const validationCode = `
import AppAlert from '@/components/app/AppAlert';
import AppSelect from '@/components/app/AppSelect';
import AppTextInput from '@/components/app/AppTextInput';

export function AppAddressValidation() {
  return (
    <>
      <AppAlert
        variant="danger"
        title="A few address fields need to be fixed"
        description="Check the highlighted location details before continuing."
      />

      <AppSelect
        label="Region"
        options={regionOptions}
        value="bc"
        invalid
        errorMsg="Select the region used for delivery rates."
      />

      <AppTextInput
        label="Postal code"
        error
        errorMsg="Use the postal code tied to the delivery address."
      />
    </>
  );
}`.trim();

const billingCode = `
import AppTextInput from '@/components/app/AppTextInput';

export function AppSeparateBillingAddress() {
  return (
    <>
      <AppTextInput label="Billing contact" placeholder="Jane Doe" />
      <AppTextInput
        label="Billing email"
        placeholder="billing@company.com"
      />
    </>
  );
}`.trim();

export default function PatternAppAddressEntryPage() {
  const [state, setState] = useState<'default' | 'invalid' | 'loading'>(
    'default',
  );
  const [billing, setBilling] = useState<'same' | 'separate'>('same');
  const selectedDescription =
    billing === 'same'
      ? 'Use the controller to review the shortest mobile address path, where shipping and billing are shared and the person can move on without duplicate entry.'
      : 'Use the controller to inspect the expanded mobile flow for separate billing details. Additional fields should appear only when needed so the core delivery path remains light.';
  const selectedMinHeight = billing === 'same' ? 1120 : 1360;

  return (
    <PatternDocsPageShell
      platform="app"
      categoryId="forms"
      categoryLabel="Forms"
      patternId="address-entry"
      title="Address Entry"
      description="A native address form that keeps shipping, billing, and delivery context clear while preserving a touch-friendly field rhythm."
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
            <AppDevicePreviewFrame
              minHeight={selectedMinHeight}
              maxWidthClass="max-w-[420px]"
            >
              <AppAddressEntryPreview state={state} billing={billing} />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Region Rules And Validation"
        description="Address failures on mobile usually come from structured fields such as region or postal code. Keep those fixes obvious without forcing the person to re-read the whole form."
        example={
          <CodeExample code={validationCode} className="w-full">
            <AppDevicePreviewFrame minHeight={1120} maxWidthClass="max-w-[420px]">
              <AppAddressEntryPreview state="invalid" billing="same" />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Delivery Notes And Billing Variants"
        description="Optional instructions and alternate billing details should appear in context. Expand only the parts the person actually needs, especially on smaller mobile surfaces."
        example={
          <CodeExample code={billingCode} className="w-full">
            <AppDevicePreviewFrame minHeight={1360} maxWidthClass="max-w-[420px]">
              <AppAddressEntryPreview state="default" billing="separate" />
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
            Put structured location fields before optional notes, reveal
            separate billing only when needed, and keep delivery validation near
            the exact fields the person can fix.
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
