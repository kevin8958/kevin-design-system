'use client';

import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import InlinePlatformSwitch from '@/components/layout/InlinePlatformSwitch';
import {
  getPatternCategories,
  isPatternPlatform,
} from '@/constants/common';
import PatternAppAddressEntryPage from '@/pages/patterns/app/addressEntry/PatternAppAddressEntryPage';
import PatternAppActivityFlowsPage from '@/pages/patterns/app/activityFlows/PatternAppActivityFlowsPage';
import PatternAppApprovalsPage from '@/pages/patterns/app/approvals/PatternAppApprovalsPage';
import PatternAppCheckoutSummaryPage from '@/pages/patterns/app/checkoutSummary/PatternAppCheckoutSummaryPage';
import PatternAppCommentsPage from '@/pages/patterns/app/comments/PatternAppCommentsPage';
import PatternAppDraftSavePage from '@/pages/patterns/app/draftSave/PatternAppDraftSavePage';
import PatternAppEditorFlowPage from '@/pages/patterns/app/editorFlow/PatternAppEditorFlowPage';
import PatternAppEmptyResultsPage from '@/pages/patterns/app/emptyResults/PatternAppEmptyResultsPage';
import PatternAppErrorRecoveryPage from '@/pages/patterns/app/errorRecovery/PatternAppErrorRecoveryPage';
import PatternAppAlertEscalationPage from '@/pages/patterns/app/alertEscalation/PatternAppAlertEscalationPage';
import PatternAppFilterSheetPage from '@/pages/patterns/app/filterSheet/PatternAppFilterSheetPage';
import PatternAppFirstRunSetupPage from '@/pages/patterns/app/firstRunSetup/PatternAppFirstRunSetupPage';
import PatternAppInvoiceFlowsPage from '@/pages/patterns/app/invoiceFlows/PatternAppInvoiceFlowsPage';
import PatternAppDigestSettingsPage from '@/pages/patterns/app/digestSettings/PatternAppDigestSettingsPage';
import PatternAppInviteAcceptancePage from '@/pages/patterns/app/inviteAcceptance/PatternAppInviteAcceptancePage';
import PatternAppInboxTriagePage from '@/pages/patterns/app/inboxTriage/PatternAppInboxTriagePage';
import PatternAppMemberManagementPage from '@/pages/patterns/app/memberManagement/PatternAppMemberManagementPage';
import PatternAppMentionsPage from '@/pages/patterns/app/mentions/PatternAppMentionsPage';
import PatternAppNotificationCenterPage from '@/pages/patterns/app/notificationCenter/PatternAppNotificationCenterPage';
import PatternAppLoadingPanelPage from '@/pages/patterns/app/loadingPanel/PatternAppLoadingPanelPage';
import PatternAppSignInPage from '@/pages/patterns/app/signIn/PatternAppSignInPage';
import PatternAppPasswordResetPage from '@/pages/patterns/app/passwordReset/PatternAppPasswordResetPage';
import PatternAppPaymentMethodPage from '@/pages/patterns/app/paymentMethod/PatternAppPaymentMethodPage';
import PatternAppPermissionEducationPage from '@/pages/patterns/app/permissionEducation/PatternAppPermissionEducationPage';
import PatternAppPublishConfirmationPage from '@/pages/patterns/app/publishConfirmation/PatternAppPublishConfirmationPage';
import PatternAppPricingSelectionPage from '@/pages/patterns/app/pricingSelection/PatternAppPricingSelectionPage';
import PatternAppProfileEditPage from '@/pages/patterns/app/profileEdit/PatternAppProfileEditPage';
import PatternAppReviewHandoffPage from '@/pages/patterns/app/reviewHandoff/PatternAppReviewHandoffPage';
import PatternAppRoleChangePage from '@/pages/patterns/app/roleChange/PatternAppRoleChangePage';
import PatternAppSearchResultsPage from '@/pages/patterns/app/searchResults/PatternAppSearchResultsPage';
import PatternAppSharingPage from '@/pages/patterns/app/sharing/PatternAppSharingPage';
import PatternAppSignUpPage from '@/pages/patterns/app/signUp/PatternAppSignUpPage';
import PatternAppSortFilterBarPage from '@/pages/patterns/app/sortFilterBar/PatternAppSortFilterBarPage';
import PatternAppSubscriptionChangePage from '@/pages/patterns/app/subscriptionChange/PatternAppSubscriptionChangePage';
import PatternAppBillingSettingsPage from '@/pages/patterns/app/billingSettings/PatternAppBillingSettingsPage';
import PatternAppDestructiveConfirmationsPage from '@/pages/patterns/app/destructiveConfirmations/PatternAppDestructiveConfirmationsPage';
import PatternWebAddressEntryPage from '@/pages/patterns/web/addressEntry/PatternWebAddressEntryPage';
import PatternWebActivityFlowsPage from '@/pages/patterns/web/activityFlows/PatternWebActivityFlowsPage';
import PatternWebApprovalsPage from '@/pages/patterns/web/approvals/PatternWebApprovalsPage';
import PatternWebBillingSettingsPage from '@/pages/patterns/web/billingSettings/PatternWebBillingSettingsPage';
import PatternWebCheckoutSummaryPage from '@/pages/patterns/web/checkoutSummary/PatternWebCheckoutSummaryPage';
import PatternWebCommentsPage from '@/pages/patterns/web/comments/PatternWebCommentsPage';
import PatternWebDraftSavePage from '@/pages/patterns/web/draftSave/PatternWebDraftSavePage';
import PatternWebEditorFlowPage from '@/pages/patterns/web/editorFlow/PatternWebEditorFlowPage';
import PatternWebAlertEscalationPage from '@/pages/patterns/web/alertEscalation/PatternWebAlertEscalationPage';
import PatternWebDestructiveConfirmationsPage from '@/pages/patterns/web/destructiveConfirmations/PatternWebDestructiveConfirmationsPage';
import PatternWebDigestSettingsPage from '@/pages/patterns/web/digestSettings/PatternWebDigestSettingsPage';
import PatternWebEmptyResultsPage from '@/pages/patterns/web/emptyResults/PatternWebEmptyResultsPage';
import PatternWebErrorRecoveryPage from '@/pages/patterns/web/errorRecovery/PatternWebErrorRecoveryPage';
import PatternWebFilterSheetPage from '@/pages/patterns/web/filterSheet/PatternWebFilterSheetPage';
import PatternWebFirstRunSetupPage from '@/pages/patterns/web/firstRunSetup/PatternWebFirstRunSetupPage';
import PatternWebInboxTriagePage from '@/pages/patterns/web/inboxTriage/PatternWebInboxTriagePage';
import PatternWebInvoiceFlowsPage from '@/pages/patterns/web/invoiceFlows/PatternWebInvoiceFlowsPage';
import PatternWebInviteAcceptancePage from '@/pages/patterns/web/inviteAcceptance/PatternWebInviteAcceptancePage';
import PatternWebLoadingPanelPage from '@/pages/patterns/web/loadingPanel/PatternWebLoadingPanelPage';
import PatternWebMemberManagementPage from '@/pages/patterns/web/memberManagement/PatternWebMemberManagementPage';
import PatternWebMentionsPage from '@/pages/patterns/web/mentions/PatternWebMentionsPage';
import PatternWebNotificationCenterPage from '@/pages/patterns/web/notificationCenter/PatternWebNotificationCenterPage';
import PatternWebPasswordResetPage from '@/pages/patterns/web/passwordReset/PatternWebPasswordResetPage';
import PatternWebPaymentMethodPage from '@/pages/patterns/web/paymentMethod/PatternWebPaymentMethodPage';
import PatternWebPermissionEducationPage from '@/pages/patterns/web/permissionEducation/PatternWebPermissionEducationPage';
import PatternWebPublishConfirmationPage from '@/pages/patterns/web/publishConfirmation/PatternWebPublishConfirmationPage';
import PatternWebPricingSelectionPage from '@/pages/patterns/web/pricingSelection/PatternWebPricingSelectionPage';
import PatternWebProfileEditPage from '@/pages/patterns/web/profileEdit/PatternWebProfileEditPage';
import PatternWebReviewHandoffPage from '@/pages/patterns/web/reviewHandoff/PatternWebReviewHandoffPage';
import PatternWebRoleChangePage from '@/pages/patterns/web/roleChange/PatternWebRoleChangePage';
import PatternWebSearchResultsPage from '@/pages/patterns/web/searchResults/PatternWebSearchResultsPage';
import PatternWebSharingPage from '@/pages/patterns/web/sharing/PatternWebSharingPage';
import PatternWebSignInPage from '@/pages/patterns/web/signIn/PatternWebSignInPage';
import PatternWebSignUpPage from '@/pages/patterns/web/signUp/PatternWebSignUpPage';
import PatternWebSortFilterBarPage from '@/pages/patterns/web/sortFilterBar/PatternWebSortFilterBarPage';
import PatternWebSubscriptionChangePage from '@/pages/patterns/web/subscriptionChange/PatternWebSubscriptionChangePage';
import PatternWebWorkspaceCreationPage from '@/pages/patterns/web/workspaceCreation/PatternWebWorkspaceCreationPage';
import PatternAppWorkspaceCreationPage from '@/pages/patterns/app/workspaceCreation/PatternAppWorkspaceCreationPage';
import { useParams } from 'react-router-dom';

const patternPageRegistry = {
  'web:onboarding:workspace-creation': PatternWebWorkspaceCreationPage,
  'web:onboarding:invite-acceptance': PatternWebInviteAcceptancePage,
  'web:onboarding:first-run-setup': PatternWebFirstRunSetupPage,
  'web:onboarding:permission-education': PatternWebPermissionEducationPage,
  'web:settings-admin:member-management': PatternWebMemberManagementPage,
  'web:settings-admin:role-change': PatternWebRoleChangePage,
  'web:settings-admin:billing-settings': PatternWebBillingSettingsPage,
  'web:settings-admin:destructive-confirmations':
    PatternWebDestructiveConfirmationsPage,
  'web:commerce-plans:pricing-selection': PatternWebPricingSelectionPage,
  'web:commerce-plans:checkout-summary': PatternWebCheckoutSummaryPage,
  'web:commerce-plans:subscription-change': PatternWebSubscriptionChangePage,
  'web:commerce-plans:invoice-flows': PatternWebInvoiceFlowsPage,
  'web:collaboration:comments': PatternWebCommentsPage,
  'web:collaboration:approvals': PatternWebApprovalsPage,
  'web:collaboration:sharing': PatternWebSharingPage,
  'web:collaboration:mentions': PatternWebMentionsPage,
  'web:collaboration:activity-flows': PatternWebActivityFlowsPage,
  'web:creation-publishing:editor-flow': PatternWebEditorFlowPage,
  'web:creation-publishing:draft-save': PatternWebDraftSavePage,
  'web:creation-publishing:review-handoff': PatternWebReviewHandoffPage,
  'web:creation-publishing:publish-confirmation':
    PatternWebPublishConfirmationPage,
  'web:notifications-inbox:notification-center': PatternWebNotificationCenterPage,
  'web:notifications-inbox:inbox-triage': PatternWebInboxTriagePage,
  'web:notifications-inbox:digest-settings': PatternWebDigestSettingsPage,
  'web:notifications-inbox:alert-escalation': PatternWebAlertEscalationPage,
  'web:auth:sign-in': PatternWebSignInPage,
  'web:auth:sign-up': PatternWebSignUpPage,
  'web:auth:password-reset': PatternWebPasswordResetPage,
  'web:forms:profile-edit': PatternWebProfileEditPage,
  'web:forms:address-entry': PatternWebAddressEntryPage,
  'web:forms:payment-method': PatternWebPaymentMethodPage,
  'web:search-filter:sort-filter-bar': PatternWebSortFilterBarPage,
  'web:search-filter:filter-sheet': PatternWebFilterSheetPage,
  'web:search-filter:search-results': PatternWebSearchResultsPage,
  'web:states:empty-results': PatternWebEmptyResultsPage,
  'web:states:loading-panel': PatternWebLoadingPanelPage,
  'web:states:error-recovery': PatternWebErrorRecoveryPage,
  'app:onboarding:workspace-creation': PatternAppWorkspaceCreationPage,
  'app:onboarding:invite-acceptance': PatternAppInviteAcceptancePage,
  'app:onboarding:first-run-setup': PatternAppFirstRunSetupPage,
  'app:onboarding:permission-education': PatternAppPermissionEducationPage,
  'app:settings-admin:member-management': PatternAppMemberManagementPage,
  'app:settings-admin:role-change': PatternAppRoleChangePage,
  'app:settings-admin:billing-settings': PatternAppBillingSettingsPage,
  'app:settings-admin:destructive-confirmations':
    PatternAppDestructiveConfirmationsPage,
  'app:commerce-plans:pricing-selection': PatternAppPricingSelectionPage,
  'app:commerce-plans:checkout-summary': PatternAppCheckoutSummaryPage,
  'app:commerce-plans:subscription-change': PatternAppSubscriptionChangePage,
  'app:commerce-plans:invoice-flows': PatternAppInvoiceFlowsPage,
  'app:collaboration:comments': PatternAppCommentsPage,
  'app:collaboration:approvals': PatternAppApprovalsPage,
  'app:collaboration:sharing': PatternAppSharingPage,
  'app:collaboration:mentions': PatternAppMentionsPage,
  'app:collaboration:activity-flows': PatternAppActivityFlowsPage,
  'app:creation-publishing:editor-flow': PatternAppEditorFlowPage,
  'app:creation-publishing:draft-save': PatternAppDraftSavePage,
  'app:creation-publishing:review-handoff': PatternAppReviewHandoffPage,
  'app:creation-publishing:publish-confirmation':
    PatternAppPublishConfirmationPage,
  'app:notifications-inbox:notification-center': PatternAppNotificationCenterPage,
  'app:notifications-inbox:inbox-triage': PatternAppInboxTriagePage,
  'app:notifications-inbox:digest-settings': PatternAppDigestSettingsPage,
  'app:notifications-inbox:alert-escalation': PatternAppAlertEscalationPage,
  'app:auth:sign-in': PatternAppSignInPage,
  'app:auth:sign-up': PatternAppSignUpPage,
  'app:auth:password-reset': PatternAppPasswordResetPage,
  'app:forms:profile-edit': PatternAppProfileEditPage,
  'app:forms:address-entry': PatternAppAddressEntryPage,
  'app:forms:payment-method': PatternAppPaymentMethodPage,
  'app:search-filter:sort-filter-bar': PatternAppSortFilterBarPage,
  'app:search-filter:filter-sheet': PatternAppFilterSheetPage,
  'app:search-filter:search-results': PatternAppSearchResultsPage,
  'app:states:empty-results': PatternAppEmptyResultsPage,
  'app:states:loading-panel': PatternAppLoadingPanelPage,
  'app:states:error-recovery': PatternAppErrorRecoveryPage,
} as const;

export default function PatternDetailPage() {
  const {
    platform: platformParam,
    categoryId,
    patternId,
  } = useParams();
  const platform = isPatternPlatform(platformParam) ? platformParam : null;
  const category =
    platform && categoryId
      ? getPatternCategories(platform).find((entry) => entry.id === categoryId)
      : null;
  const pattern = category?.items.find((entry) => entry.id === patternId);
  const registryKey =
    platform && categoryId && patternId
      ? (`${platform}:${categoryId}:${patternId}` as keyof typeof patternPageRegistry)
      : null;
  const PatternPage = registryKey ? patternPageRegistry[registryKey] : null;

  if (PatternPage) {
    return <PatternPage />;
  }

  if (!category || !pattern) {
    return (
      <FlexWrapper classes="w-full px-4 py-16" direction="col" items="start">
        <Typography variant="H2">Pattern Not Found</Typography>
        <Typography
          variant="B1"
          classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
        >
          The pattern you requested does not exist yet.
        </Typography>
      </FlexWrapper>
    );
  }

  const breadcrumbItems = [
    { label: 'Patterns', href: `/patterns/${platform}` },
    { label: category.label, href: category.href },
    { label: pattern.label, href: pattern.href },
  ];
  const activePlatform = platform ?? 'web';

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" gap={10}>
      <BreadCrumb items={breadcrumbItems} />

      <InlinePlatformSwitch
        activeValue={activePlatform}
        options={[
          { value: 'web', to: `/patterns/web/${category.id}/${pattern.id}` },
          { value: 'app', to: `/patterns/app/${category.id}/${pattern.id}` },
        ]}
      />

      <FlexWrapper direction="col" items="start" gap={4} classes="max-w-3xl">
        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
          작업중
        </span>
        <Typography variant="H1">{pattern.label}</Typography>
        <Typography
          variant="B1"
          classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
        >
          {pattern.description}
        </Typography>
      </FlexWrapper>

      <div className="rounded-[28px] border border-dashed border-neutral-300 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900/60">
        <FlexWrapper direction="col" items="start" gap={4}>
          <Typography variant="H4">Planned For This Pattern</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            This page will document the recommended structure, required
            components, state handling, and complete example flow for the
            pattern.
          </Typography>
          <Typography
            variant="C1"
            classes="!text-neutral-500 dark:!text-neutral-400"
          >
            For now, this route exists so the navigation and information
            architecture are ready before the detailed pattern docs are written.
          </Typography>
        </FlexWrapper>
      </div>
    </FlexWrapper>
  );
}
