'use client';

import AppAlert from '@/components/app/AppAlert';
import AppButton from '@/components/app/AppButton';
import AppCheckbox from '@/components/app/AppCheckbox';
import AppSelect from '@/components/app/AppSelect';
import AppTextarea from '@/components/app/AppTextarea';
import AppTextInput from '@/components/app/AppTextInput';
import { StyleSheet, Text, View } from 'react-native';

type AppAddressEntryPreviewProps = {
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

export default function AppAddressEntryPreview({
  state = 'default',
  billing = 'same',
}: AppAddressEntryPreviewProps) {
  const isInvalid = state === 'invalid';
  const isLoading = state === 'loading';

  return (
    <View style={styles.screen}>
      <View style={styles.hero}>
        <Text style={styles.title}>Address details</Text>
        <Text style={styles.description}>
          Group shipping, billing, and delivery instructions so mobile address
          entry stays easy to verify before moving on.
        </Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Shipping updates use this address</Text>
        <Text style={styles.bannerDescription}>
          Keep recipient, country, and postal details accurate so rates and
          delivery windows stay correct.
        </Text>
      </View>

      {isInvalid ? (
        <AppAlert
          variant="danger"
          title="A few address fields need to be fixed"
          description="Check the highlighted location details before continuing."
        />
      ) : null}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping address</Text>
        <View style={styles.form}>
          <AppTextInput
            label="Recipient"
            defaultValue="Kevin Kim"
            placeholder="Jane Doe"
          />
          <AppTextInput
            label="Phone"
            defaultValue="+1 (604) 555-0123"
            placeholder="+1 (555) 555-5555"
          />
          <AppTextInput
            label="Street address"
            defaultValue="128 West Hastings St"
            placeholder="123 Main St"
          />
          <AppTextInput
            label="Apartment, suite, etc."
            defaultValue="Suite 610"
            placeholder="Suite 600"
          />
          <AppTextInput
            label="City"
            defaultValue="Vancouver"
            placeholder="Vancouver"
          />
          <AppSelect
            label="Region"
            options={regionOptions}
            value="bc"
            invalid={isInvalid}
            errorMsg="Select the region used for delivery rates."
          />
          <AppTextInput
            label="Postal code"
            defaultValue="V6B 1H4"
            placeholder="V6B 1H4"
            error={isInvalid}
            errorMsg="Use the postal code tied to the delivery address."
          />
          <AppSelect label="Country" options={countryOptions} value="ca" />
        </View>
      </View>

      <AppCheckbox
        checked={billing === 'same'}
        label="Billing address is the same as shipping"
      />

      {billing === 'separate' ? (
        <View style={styles.secondarySection}>
          <Text style={styles.sectionTitle}>Billing address</Text>
          <View style={styles.form}>
            <AppTextInput
              label="Billing contact"
              defaultValue="Kevin Kim"
              placeholder="Jane Doe"
            />
            <AppTextInput
              label="Billing email"
              defaultValue="finance@design.system"
              placeholder="billing@company.com"
            />
            <AppTextInput
              label="Billing street address"
              defaultValue="200 Burrard St"
              placeholder="123 Main St"
            />
          </View>
        </View>
      ) : null}

      <AppTextarea
        label="Delivery instructions"
        defaultValue="Leave at reception if the team is away from the studio floor."
        placeholder="Add any access notes or delivery preferences"
        error={isInvalid}
        errorMsg="Keep delivery notes short and useful for the carrier."
      />

      <View style={styles.footerRow}>
        <AppButton variant="clear" color="neutral" size="sm" label="Cancel" />
        <AppButton color="primary" loading={isLoading} label="Continue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    gap: 16,
    width: '100%',
  },
  hero: {
    gap: 6,
  },
  title: {
    color: '#171717',
    fontSize: 24,
    fontWeight: '800',
  },
  description: {
    color: '#525252',
    fontSize: 14,
    lineHeight: 21,
  },
  banner: {
    backgroundColor: '#FFF1D6',
    borderColor: '#FFD48C',
    borderRadius: 18,
    borderWidth: 1,
    gap: 4,
    padding: 14,
  },
  bannerTitle: {
    color: '#A65A00',
    fontSize: 14,
    fontWeight: '700',
  },
  bannerDescription: {
    color: '#A65A00',
    fontSize: 13,
    lineHeight: 19,
  },
  section: {
    gap: 10,
  },
  secondarySection: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 20,
    borderWidth: 1,
    gap: 10,
    padding: 14,
  },
  sectionTitle: {
    color: '#171717',
    fontSize: 16,
    fontWeight: '700',
  },
  form: {
    gap: 12,
  },
  footerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
});
