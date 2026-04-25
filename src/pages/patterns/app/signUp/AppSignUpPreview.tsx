'use client';

import AppAlert from '@/components/app/AppAlert';
import AppButton from '@/components/app/AppButton';
import AppCheckbox from '@/components/app/AppCheckbox';
import AppTextInput from '@/components/app/AppTextInput';
import { StyleSheet, Text, View } from 'react-native';

type AppSignUpPreviewProps = {
  state?: 'default' | 'invalid' | 'loading';
  flow?: 'standard' | 'invite';
};

export default function AppSignUpPreview({
  state = 'default',
  flow = 'standard',
}: AppSignUpPreviewProps) {
  const isInvalid = state === 'invalid';
  const isLoading = state === 'loading';

  return (
    <View style={styles.screen}>
      {flow === 'invite' ? (
        <View style={styles.inviteBanner}>
          <Text style={styles.inviteTitle}>Invitation detected</Text>
          <Text style={styles.inviteDescription}>
            You&apos;re joining the Kevin Product workspace. We&apos;ll attach
            your account to the invite after signup.
          </Text>
        </View>
      ) : null}

      <View style={styles.hero}>
        <View style={styles.brandMark}>
          <Text style={styles.brandMarkText}>K</Text>
        </View>
        <Text style={styles.title}>Create your account</Text>
        <Text style={styles.description}>
          Set up your profile, secure your access, and continue to the projects
          already waiting in your workspace.
        </Text>
      </View>

      {isInvalid ? (
        <AppAlert
          variant="danger"
          title="We need a few fixes before continuing"
          description="Check the highlighted fields and confirm the required agreement to create your account."
        />
      ) : null}

      <View style={styles.form}>
        <AppTextInput
          label="Full name"
          defaultValue="Kevin Kim"
          placeholder="Jane Doe"
        />
        <AppTextInput
          label="Work email"
          defaultValue="kevin@design.system"
          placeholder="you@company.com"
          error={isInvalid}
          errorMsg="Use a company email you can verify."
        />
        <AppTextInput
          label="Password"
          type="password"
          defaultValue="short"
          placeholder="Create a password"
          error={isInvalid}
          errorMsg="Use at least 8 characters with letters and numbers."
        />
        <AppTextInput
          label="Confirm password"
          type="password"
          defaultValue="shorter"
          placeholder="Repeat your password"
          error={isInvalid}
          errorMsg="Passwords must match."
        />
      </View>

      <View style={styles.rulesCard}>
        <Text style={styles.rulesTitle}>Password checklist</Text>
        <Text style={styles.ruleItem}>At least 8 characters</Text>
        <Text style={styles.ruleItem}>Includes one number</Text>
        <Text style={styles.ruleItem}>Avoids reused passwords</Text>
      </View>

      <View style={styles.checkboxWrap}>
        <AppCheckbox
          checked={!isInvalid}
          label="I agree to the Terms of Service and Security Policy"
          invalid={isInvalid}
          errorMsg="You need to accept the required terms to continue."
        />
      </View>

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Create account"
      />

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <AppButton variant="clear" color="primary" size="sm" label="Sign in" />
      </View>

      <Text style={styles.supportNote}>
        We&apos;ll send a verification email after signup before granting
        workspace access.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    gap: 16,
    width: '100%',
  },
  inviteBanner: {
    backgroundColor: '#FFF1D6',
    borderColor: '#FFD48C',
    borderRadius: 18,
    borderWidth: 1,
    gap: 4,
    padding: 14,
  },
  inviteTitle: {
    color: '#A65A00',
    fontSize: 14,
    fontWeight: '700',
  },
  inviteDescription: {
    color: '#A65A00',
    fontSize: 13,
    lineHeight: 19,
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
  rulesCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 18,
    borderStyle: 'dashed',
    borderWidth: 1,
    gap: 4,
    padding: 14,
  },
  rulesTitle: {
    color: '#171717',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  ruleItem: {
    color: '#525252',
    fontSize: 13,
    lineHeight: 18,
  },
  checkboxWrap: {
    width: '100%',
  },
  footerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  footerText: {
    color: '#525252',
    fontSize: 13,
  },
  supportNote: {
    color: '#737373',
    fontSize: 12,
    lineHeight: 18,
  },
});
