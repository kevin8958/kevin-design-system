'use client';

import AppAlert from '@/components/app/AppAlert';
import AppButton from '@/components/app/AppButton';
import AppCheckbox from '@/components/app/AppCheckbox';
import AppTextInput from '@/components/app/AppTextInput';
import { StyleSheet, Text, View } from 'react-native';

type AppSignInPreviewProps = {
  state?: 'default' | 'invalid' | 'loading';
  showSocial?: boolean;
  showSupportNote?: boolean;
};

export default function AppSignInPreview({
  state = 'default',
  showSocial = false,
  showSupportNote = true,
}: AppSignInPreviewProps) {
  const isInvalid = state === 'invalid';
  const isLoading = state === 'loading';

  return (
    <View style={styles.screen}>
      <View style={styles.hero}>
        <View style={styles.brandMark}>
          <Text style={styles.brandMarkText}>K</Text>
        </View>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.description}>
          Sign in to review approvals, recent activity, and shared workspace
          updates.
        </Text>
      </View>

      {isInvalid ? (
        <AppAlert
          variant="danger"
          title="We couldn't sign you in"
          description="Double-check your email and password, or reset your password to continue."
        />
      ) : null}

      <View style={styles.form}>
        <AppTextInput
          label="Work email"
          defaultValue="kevin@design.system"
          placeholder="you@company.com"
          error={isInvalid}
          errorMsg="Use the email connected to your workspace."
        />
        <AppTextInput
          label="Password"
          type="password"
          defaultValue="incorrect-password"
          placeholder="Enter your password"
          error={isInvalid}
          errorMsg="Password must be at least 8 characters."
        />
      </View>

      <View style={styles.inlineRow}>
        <View style={styles.checkboxWrap}>
          <AppCheckbox checked label="Remember this device" />
        </View>
        <AppButton variant="clear" color="primary" size="sm" label="Forgot password" />
      </View>

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Sign in"
      />

      {showSocial ? (
        <View style={styles.socialSection}>
          <Text style={styles.sectionLabel}>or continue with</Text>
          <View style={styles.socialRow}>
            <View style={styles.socialButtonWrap}>
              <AppButton
                fullWidth
                variant="outline"
                color="neutral"
                label="Google"
              />
            </View>
            <View style={styles.socialButtonWrap}>
              <AppButton
                fullWidth
                variant="outline"
                color="neutral"
                label="Apple"
              />
            </View>
          </View>
        </View>
      ) : null}

      <View style={styles.supportCard}>
        <View style={styles.supportCopy}>
          <Text style={styles.supportTitle}>Need access?</Text>
          <Text style={styles.supportDescription}>
            Workspace access is managed by admins, so account requests stay
            separate from sign in.
          </Text>
        </View>
        <AppButton
          variant="outline"
          color="neutral"
          size="sm"
          label="Contact admin"
        />
      </View>

      {showSupportNote ? (
        <Text style={styles.supportNote}>
          Continuing means you agree to the workspace security and device
          policy.
        </Text>
      ) : null}
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
  form: {
    gap: 12,
  },
  inlineRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  checkboxWrap: {
    flex: 1,
  },
  socialSection: {
    gap: 10,
  },
  sectionLabel: {
    color: '#737373',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.4,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  socialRow: {
    flexDirection: 'row',
    gap: 10,
  },
  socialButtonWrap: {
    flex: 1,
  },
  supportCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 18,
    borderWidth: 1,
    gap: 12,
    padding: 14,
  },
  supportCopy: {
    gap: 4,
  },
  supportTitle: {
    color: '#171717',
    fontSize: 14,
    fontWeight: '700',
  },
  supportDescription: {
    color: '#525252',
    fontSize: 13,
    lineHeight: 19,
  },
  supportNote: {
    color: '#737373',
    fontSize: 12,
    lineHeight: 18,
  },
});
