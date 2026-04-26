'use client';

import AppAlert from '@/components/app/AppAlert';
import AppButton from '@/components/app/AppButton';
import AppCheckbox from '@/components/app/AppCheckbox';
import AppSelect from '@/components/app/AppSelect';
import AppTextInput from '@/components/app/AppTextInput';
import { StyleSheet, Text, View } from 'react-native';

type AppPaymentMethodPreviewProps = {
  state?: 'default' | 'invalid' | 'loading';
  method?: 'new' | 'saved';
};

const countryOptions = [
  { label: 'Canada', value: 'ca' },
  { label: 'United States', value: 'us' },
];

export default function AppPaymentMethodPreview({
  state = 'default',
  method = 'new',
}: AppPaymentMethodPreviewProps) {
  const isInvalid = state === 'invalid';
  const isLoading = state === 'loading';

  return (
    <View style={styles.screen}>
      <View style={styles.hero}>
        <Text style={styles.title}>Payment method</Text>
        <Text style={styles.description}>
          Collect billing details with enough trust signals that card entry
          feels safe and easy to recover on mobile.
        </Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Secure billing capture</Text>
        <Text style={styles.bannerDescription}>
          Keep payment details close together and explain whether the method
          will be stored for future renewals.
        </Text>
      </View>

      {isInvalid ? (
        <AppAlert
          variant="danger"
          title="We need updated billing details"
          description="Check the highlighted payment fields and try again."
        />
      ) : null}

      {method === 'saved' ? (
        <View style={styles.savedMethodCard}>
          <Text style={styles.savedMethodTitle}>Visa ending in 4821</Text>
          <Text style={styles.savedMethodDescription}>
            Expires 10/28 and is currently used for the Kevin Product workspace.
          </Text>
          <AppButton
            variant="outline"
            color="neutral"
            size="sm"
            label="Use different card"
          />
        </View>
      ) : null}

      <View style={styles.form}>
        <AppTextInput
          label="Cardholder name"
          defaultValue="Kevin Kim"
          placeholder="Jane Doe"
        />
        <AppTextInput
          label={method === 'saved' ? 'Security code' : 'Card number'}
          defaultValue={method === 'saved' ? '12' : '4242 4242 4242 4242'}
          placeholder={method === 'saved' ? '123' : '4242 4242 4242 4242'}
          error={isInvalid}
          errorMsg={
            method === 'saved'
              ? 'Enter the latest card security code.'
              : 'Check the card number and try again.'
          }
        />

        {method === 'new' ? (
          <>
            <AppTextInput
              label="Expiry"
              defaultValue="10/28"
              placeholder="10/28"
            />
            <AppTextInput
              label="CVC"
              defaultValue="12"
              placeholder="123"
              error={isInvalid}
              errorMsg="Check the security code."
            />
            <AppTextInput
              label="Postal code"
              defaultValue="V6B 1H4"
              placeholder="V6B 1H4"
            />
          </>
        ) : (
          <>
            <AppTextInput
              label="Billing postal code"
              defaultValue="V6B 1H4"
              placeholder="V6B 1H4"
            />
            <AppSelect label="Billing country" options={countryOptions} value="ca" />
          </>
        )}
      </View>

      {method === 'new' ? (
        <AppCheckbox
          checked={!isInvalid}
          label="Save this card for the next workspace renewal"
        />
      ) : null}

      <View style={styles.noteCard}>
        <Text style={styles.noteTitle}>Billing trust cues</Text>
        <Text style={styles.noteDescription}>
          Explain how this method will be used, whether it will be stored, and
          how the user can change it later.
        </Text>
      </View>

      <View style={styles.footerRow}>
        <AppButton variant="clear" color="neutral" size="sm" label="Cancel" />
        <AppButton
          color="primary"
          loading={isLoading}
          label={method === 'saved' ? 'Confirm payment' : 'Save payment method'}
        />
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
  savedMethodCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 20,
    borderWidth: 1,
    gap: 8,
    padding: 14,
  },
  savedMethodTitle: {
    color: '#171717',
    fontSize: 14,
    fontWeight: '700',
  },
  savedMethodDescription: {
    color: '#525252',
    fontSize: 13,
    lineHeight: 19,
  },
  form: {
    gap: 12,
  },
  noteCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 18,
    borderStyle: 'dashed',
    borderWidth: 1,
    gap: 4,
    padding: 14,
  },
  noteTitle: {
    color: '#171717',
    fontSize: 14,
    fontWeight: '700',
  },
  noteDescription: {
    color: '#525252',
    fontSize: 13,
    lineHeight: 19,
  },
  footerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
});
