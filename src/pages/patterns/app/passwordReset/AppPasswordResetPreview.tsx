'use client';

import AppAlert from '@/components/app/AppAlert';
import AppButton from '@/components/app/AppButton';
import AppEmptyState from '@/components/app/AppEmptyState';
import AppTextInput from '@/components/app/AppTextInput';
import { StyleSheet, Text, View } from 'react-native';

type AppPasswordResetPreviewProps = {
  step?: 'request' | 'reset' | 'success';
  state?: 'default' | 'invalid' | 'loading';
};

export default function AppPasswordResetPreview({
  step = 'request',
  state = 'default',
}: AppPasswordResetPreviewProps) {
  const isInvalid = state === 'invalid';
  const isLoading = state === 'loading';

  if (step === 'success') {
    return (
      <AppEmptyState
        title="Password updated"
        description="Your password has been changed successfully. Head back to sign in with your new credentials."
        primaryAction={<AppButton color="primary" label="Back to sign in" />}
        secondaryAction={
          <AppButton variant="outline" color="neutral" label="Open inbox" />
        }
      />
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.hero}>
        <View style={styles.brandMark}>
          <Text style={styles.brandMarkText}>K</Text>
        </View>
        <Text style={styles.title}>
          {step === 'request' ? 'Reset your password' : 'Create a new password'}
        </Text>
        <Text style={styles.description}>
          {step === 'request'
            ? 'Enter the email tied to your workspace and we’ll send a recovery code to continue.'
            : 'Use the latest code from your inbox, then choose a secure new password.'}
        </Text>
      </View>

      {step === 'reset' ? (
        <View style={styles.codeBanner}>
          <Text style={styles.codeBannerTitle}>
            Code sent to kevin@design.system
          </Text>
          <Text style={styles.codeBannerDescription}>
            Recovery codes expire after 10 minutes. Ask for a new one if the
            latest message hasn’t arrived.
          </Text>
        </View>
      ) : null}

      {isInvalid ? (
        <AppAlert
          variant="danger"
          title={
            step === 'request'
              ? "We couldn't find that account"
              : 'Check the code and password fields'
          }
          description={
            step === 'request'
              ? 'Use the same email you sign in with, or ask your admin for help.'
              : 'The recovery code may have expired and the new password still needs to meet the policy.'
          }
        />
      ) : null}

      <View style={styles.form}>
        {step === 'request' ? (
          <AppTextInput
            label="Work email"
            defaultValue="kevin@design.system"
            placeholder="you@company.com"
            error={isInvalid}
            errorMsg="Use the email tied to your workspace."
          />
        ) : (
          <>
            <AppTextInput
              label="Verification code"
              defaultValue="103592"
              placeholder="123456"
              error={isInvalid}
              errorMsg="Enter the latest 6-digit code from your inbox."
            />
            <AppTextInput
              label="New password"
              type="password"
              defaultValue="short"
              placeholder="Create a new password"
              error={isInvalid}
              errorMsg="Use at least 8 characters with letters and numbers."
            />
            <AppTextInput
              label="Confirm password"
              type="password"
              defaultValue="shorter"
              placeholder="Repeat your new password"
              error={isInvalid}
              errorMsg="Passwords must match."
            />
          </>
        )}
      </View>

      <View style={styles.noteCard}>
        <Text style={styles.noteTitle}>Recovery note</Text>
        <Text style={styles.noteDescription}>
          If the code doesn’t arrive, check spam or ask your workspace admin
          whether email delivery is restricted.
        </Text>
      </View>

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label={step === 'request' ? 'Send reset code' : 'Save new password'}
      />

      <View style={styles.footerRow}>
        <AppButton variant="clear" color="primary" size="sm" label="Back to sign in" />
        {step === 'reset' ? (
          <AppButton
            variant="outline"
            color="neutral"
            size="sm"
            label="Resend code"
          />
        ) : null}
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
    gap: 8,
  },
  brandMark: {
    alignItems: 'center',
    backgroundColor: '#FFF1D6',
    borderRadius: 16,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  brandMarkText: {
    color: '#A65A00',
    fontSize: 18,
    fontWeight: '800',
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
  codeBanner: {
    backgroundColor: '#FFF1D6',
    borderColor: '#FFD48C',
    borderRadius: 18,
    borderWidth: 1,
    gap: 4,
    padding: 14,
  },
  codeBannerTitle: {
    color: '#A65A00',
    fontSize: 14,
    fontWeight: '700',
  },
  codeBannerDescription: {
    color: '#A65A00',
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
