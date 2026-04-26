'use client';

import AppAlert from '@/components/app/AppAlert';
import AppButton from '@/components/app/AppButton';
import AppSelect from '@/components/app/AppSelect';
import AppTextarea from '@/components/app/AppTextarea';
import AppTextInput from '@/components/app/AppTextInput';
import { StyleSheet, Text, View } from 'react-native';

type AppProfileEditPreviewProps = {
  state?: 'default' | 'invalid' | 'loading';
  saveBar?: 'sticky' | 'inline';
};

const timezoneOptions = [
  { label: 'Pacific Time (UTC-8)', value: 'pt' },
  { label: 'Eastern Time (UTC-5)', value: 'et' },
  { label: 'Central European Time (UTC+1)', value: 'cet' },
];

export default function AppProfileEditPreview({
  state = 'default',
  saveBar = 'sticky',
}: AppProfileEditPreviewProps) {
  const isInvalid = state === 'invalid';
  const isLoading = state === 'loading';

  return (
    <View style={styles.screen}>
      <View style={styles.headerRow}>
        <View style={styles.headerBody}>
          <View style={styles.brandMark}>
            <Text style={styles.brandMarkText}>K</Text>
          </View>
          <View style={styles.headerCopy}>
            <Text style={styles.title}>Edit profile</Text>
            <Text style={styles.description}>
              Keep identity, contact, and workspace preferences easy to review
              before saving.
            </Text>
          </View>
        </View>
        <AppButton
          variant="outline"
          color="neutral"
          size="sm"
          label="Public view"
        />
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Profile changes sync everywhere</Text>
        <Text style={styles.bannerDescription}>
          Update your workspace details here, then save once when the form looks
          right.
        </Text>
      </View>

      {isInvalid ? (
        <AppAlert
          variant="danger"
          title="A few fields still need attention"
          description="Resolve the highlighted items before saving your profile changes."
        />
      ) : null}

      <View style={styles.form}>
        <AppTextInput
          label="Full name"
          defaultValue="Kevin Kim"
          placeholder="Jane Doe"
        />
        <AppTextInput
          label="Role"
          defaultValue="Design Systems Lead"
          placeholder="Product Designer"
        />
        <AppTextInput
          label="Work email"
          defaultValue="kevin@design.system"
          placeholder="you@company.com"
          error={isInvalid}
          errorMsg="Use the verified email tied to your workspace."
        />
        <AppSelect
          label="Timezone"
          options={timezoneOptions}
          value="pt"
          invalid={isInvalid}
          errorMsg="Choose the timezone used for notifications and meeting times."
        />
        <AppTextarea
          label="Short bio"
          defaultValue="Design systems lead focused on accessibility, documentation, and cross-platform product quality."
          placeholder="Write a short profile summary"
          error={isInvalid}
          errorMsg="Keep the summary concise and suitable for workspace discovery."
        />
      </View>

      <View style={styles.noteCard}>
        <Text style={styles.noteTitle}>Security note</Text>
        <Text style={styles.noteDescription}>
          Email updates require reverification before the new address appears in
          invites and billing notices.
        </Text>
      </View>

      {saveBar === 'sticky' ? (
        <View style={styles.stickyBar}>
          <View style={styles.stickyCopy}>
            <Text style={styles.stickyTitle}>Unsaved changes</Text>
            <Text style={styles.stickyDescription}>
              Keep the main action visible while longer settings screens scroll.
            </Text>
          </View>
          <View style={styles.footerRow}>
            <AppButton variant="clear" color="neutral" size="sm" label="Discard" />
            <AppButton
              color="primary"
              loading={isLoading}
              label="Save changes"
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerRow}>
          <AppButton variant="clear" color="neutral" size="sm" label="Cancel" />
          <AppButton
            color="primary"
            loading={isLoading}
            label="Save changes"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    gap: 16,
    width: '100%',
  },
  headerRow: {
    gap: 12,
  },
  headerBody: {
    flexDirection: 'row',
    gap: 14,
  },
  brandMark: {
    alignItems: 'center',
    backgroundColor: '#FFF1D6',
    borderRadius: 18,
    height: 52,
    justifyContent: 'center',
    width: 52,
  },
  brandMarkText: {
    color: '#A65A00',
    fontSize: 20,
    fontWeight: '800',
  },
  headerCopy: {
    flex: 1,
    gap: 4,
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
  stickyBar: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 20,
    borderWidth: 1,
    gap: 12,
    padding: 14,
  },
  stickyCopy: {
    gap: 4,
  },
  stickyTitle: {
    color: '#171717',
    fontSize: 14,
    fontWeight: '700',
  },
  stickyDescription: {
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
