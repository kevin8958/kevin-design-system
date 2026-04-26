'use client';

import Button from '@/components/action/Button';
import Alert from '@/components/feedback/Alert';
import Typography from '@/components/foundation/Typography';
import Checkbox from '@/components/input/Checkbox';
import Select from '@/components/input/Select';
import TextInput from '@/components/input/TextInput';

type WebPaymentMethodPreviewProps = {
  state?: 'default' | 'invalid' | 'loading';
  method?: 'new' | 'saved';
};

const countryOptions = [
  { label: 'Canada', value: 'ca' },
  { label: 'United States', value: 'us' },
];

export default function WebPaymentMethodPreview({
  state = 'default',
  method = 'new',
}: WebPaymentMethodPreviewProps) {
  const isInvalid = state === 'invalid';
  const isLoading = state === 'loading';

  return (
    <div className="w-full max-w-[680px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <Typography variant="H3">Payment method</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Collect billing details with enough trust signals that card entry
            feels safe, clear, and easy to correct.
          </Typography>
        </div>

        <div className="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-400/20 dark:bg-primary-400/10">
          <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">
            Secure billing capture
          </p>
          <p className="mt-1 text-sm text-primary-700/80 dark:text-primary-200/80">
            Keep required payment details close together and make secondary
            trust cues easy to scan.
          </p>
        </div>

        {isInvalid ? (
          <Alert
            variant="danger"
            title="We need updated billing details"
            description="Check the highlighted payment fields and try again."
          />
        ) : null}

        {method === 'saved' ? (
          <div className="rounded-[24px] border border-neutral-200 bg-neutral-50/70 p-5 dark:border-neutral-800 dark:bg-neutral-900/60">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  Visa ending in 4821
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Expires 10/28 · Used for the Kevin Product workspace
                </p>
              </div>
              <Button variant="outline" color="neutral" size="sm">
                Use different card
              </Button>
            </div>
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextInput
            label="Cardholder name"
            placeholder="Jane Doe"
            inputProps={{ defaultValue: 'Kevin Kim' }}
          />
          <TextInput
            label={method === 'saved' ? 'Security code' : 'Card number'}
            placeholder={method === 'saved' ? '123' : '4242 4242 4242 4242'}
            inputProps={{
              defaultValue: method === 'saved' ? '12' : '4242 4242 4242 4242',
            }}
            error={isInvalid}
            errorMsg={
              method === 'saved'
                ? 'Enter the latest card security code.'
                : 'Check the card number and try again.'
            }
          />
        </div>

        {method === 'new' ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <TextInput
              label="Expiry"
              placeholder="10/28"
              inputProps={{ defaultValue: '10/28' }}
            />
            <div className={isInvalid ? 'pb-6' : ''}>
              <TextInput
                label="CVC"
                placeholder="123"
                inputProps={{ defaultValue: '12' }}
                error={isInvalid}
                errorMsg="Check the security code."
              />
            </div>
            <TextInput
              label="Postal code"
              placeholder="V6B 1H4"
              inputProps={{ defaultValue: 'V6B 1H4' }}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <TextInput
              label="Billing postal code"
              placeholder="V6B 1H4"
              inputProps={{ defaultValue: 'V6B 1H4' }}
            />
            <Select
              label="Billing country"
              options={countryOptions}
              value="ca"
            />
          </div>
        )}

        {method === 'new' ? (
          <Checkbox
            checked={!isInvalid}
            label="Save this card for the next workspace renewal"
          />
        ) : null}

        <div className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Billing trust cues
          </p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Explain how the method will be used, whether it will be stored, and
            when the user can update it later.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
          <Button variant="clear" color="neutral" size="sm">
            Cancel
          </Button>
          <Button color="primary" loading={isLoading}>
            {method === 'saved' ? 'Confirm payment' : 'Save payment method'}
          </Button>
        </div>
      </div>
    </div>
  );
}
