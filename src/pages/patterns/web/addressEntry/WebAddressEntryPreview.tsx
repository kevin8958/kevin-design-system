'use client';

import Button from '@/components/action/Button';
import Alert from '@/components/feedback/Alert';
import Typography from '@/components/foundation/Typography';
import Checkbox from '@/components/input/Checkbox';
import Select from '@/components/input/Select';
import Textarea from '@/components/input/Textarea';
import TextInput from '@/components/input/TextInput';

type WebAddressEntryPreviewProps = {
  state?: 'default' | 'invalid' | 'loading';
  billing?: 'same' | 'separate';
};

const regionOptions = [
  { label: 'British Columbia', value: 'bc' },
  { label: 'Ontario', value: 'on' },
  { label: 'California', value: 'ca' },
];

const countryOptions = [
  { label: 'Canada', value: 'ca' },
  { label: 'United States', value: 'us' },
];

export default function WebAddressEntryPreview({
  state = 'default',
  billing = 'same',
}: WebAddressEntryPreviewProps) {
  const isInvalid = state === 'invalid';
  const isLoading = state === 'loading';

  return (
    <div className="w-full max-w-[720px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <Typography variant="H3">Address details</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Group shipping, billing, and delivery instructions so address entry
            stays easy to verify before the order or profile moves on.
          </Typography>
        </div>

        <div className="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-400/20 dark:bg-primary-400/10">
          <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">
            Shipping updates use this address
          </p>
          <p className="mt-1 text-sm text-primary-700/80 dark:text-primary-200/80">
            Keep the recipient, country, and postal details accurate so rates
            and delivery windows stay correct.
          </p>
        </div>

        {isInvalid ? (
          <Alert
            variant="danger"
            title="A few address fields need to be fixed"
            description="Check the highlighted location details before continuing."
          />
        ) : null}

        <div className="flex flex-col gap-4">
          <Typography variant="H4">Shipping address</Typography>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <TextInput
              label="Recipient"
              placeholder="Jane Doe"
              inputProps={{ defaultValue: 'Kevin Kim' }}
            />
            <TextInput
              label="Phone"
              placeholder="+1 (555) 555-5555"
              inputProps={{ defaultValue: '+1 (604) 555-0123' }}
            />
          </div>

          <TextInput
            label="Street address"
            placeholder="123 Main St"
            inputProps={{ defaultValue: '128 West Hastings St' }}
          />

          <TextInput
            label="Apartment, suite, etc."
            placeholder="Suite 600"
            inputProps={{ defaultValue: 'Suite 610' }}
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <TextInput
              label="City"
              placeholder="Vancouver"
              inputProps={{ defaultValue: 'Vancouver' }}
            />
            <Select
              label="Region"
              options={regionOptions}
              value="bc"
              invalid={isInvalid}
              errorMsg="Select the region used for delivery rates."
            />
            <div className={isInvalid ? 'pb-6' : ''}>
              <TextInput
                label="Postal code"
                placeholder="V6B 1H4"
                inputProps={{ defaultValue: 'V6B 1H4' }}
                error={isInvalid}
                errorMsg="Use the postal code tied to the delivery address."
              />
            </div>
          </div>

          <Select
            label="Country"
            options={countryOptions}
            value="ca"
          />
        </div>

        <Checkbox
          checked={billing === 'same'}
          label="Billing address is the same as shipping"
        />

        {billing === 'separate' ? (
          <div className="flex flex-col gap-4 rounded-[24px] border border-neutral-200 bg-neutral-50/70 p-5 dark:border-neutral-800 dark:bg-neutral-900/60">
            <Typography variant="H4">Billing address</Typography>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <TextInput
                label="Billing contact"
                placeholder="Jane Doe"
                inputProps={{ defaultValue: 'Kevin Kim' }}
              />
              <TextInput
                label="Billing email"
                placeholder="billing@company.com"
                inputProps={{ defaultValue: 'finance@design.system' }}
              />
            </div>
            <TextInput
              label="Billing street address"
              placeholder="123 Main St"
              inputProps={{ defaultValue: '200 Burrard St' }}
            />
          </div>
        ) : null}

        <Textarea
          label="Delivery instructions"
          placeholder="Add any access notes or delivery preferences"
          textareaProps={{
            defaultValue:
              'Leave at reception if the team is away from the studio floor.',
          }}
          error={isInvalid}
          errorMsg="Keep delivery notes short and useful for the carrier."
        />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
          <Button variant="clear" color="neutral" size="sm">
            Cancel
          </Button>
          <Button color="primary" loading={isLoading}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
