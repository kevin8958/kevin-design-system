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
import PatternAppEmptyResultsPage from '@/pages/patterns/app/emptyResults/PatternAppEmptyResultsPage';
import PatternAppErrorRecoveryPage from '@/pages/patterns/app/errorRecovery/PatternAppErrorRecoveryPage';
import PatternAppFilterSheetPage from '@/pages/patterns/app/filterSheet/PatternAppFilterSheetPage';
import PatternAppFirstRunSetupPage from '@/pages/patterns/app/firstRunSetup/PatternAppFirstRunSetupPage';
import PatternAppInviteAcceptancePage from '@/pages/patterns/app/inviteAcceptance/PatternAppInviteAcceptancePage';
import PatternAppLoadingPanelPage from '@/pages/patterns/app/loadingPanel/PatternAppLoadingPanelPage';
import PatternAppSignInPage from '@/pages/patterns/app/signIn/PatternAppSignInPage';
import PatternAppPasswordResetPage from '@/pages/patterns/app/passwordReset/PatternAppPasswordResetPage';
import PatternAppPaymentMethodPage from '@/pages/patterns/app/paymentMethod/PatternAppPaymentMethodPage';
import PatternAppPermissionEducationPage from '@/pages/patterns/app/permissionEducation/PatternAppPermissionEducationPage';
import PatternAppProfileEditPage from '@/pages/patterns/app/profileEdit/PatternAppProfileEditPage';
import PatternAppSearchResultsPage from '@/pages/patterns/app/searchResults/PatternAppSearchResultsPage';
import PatternAppSignUpPage from '@/pages/patterns/app/signUp/PatternAppSignUpPage';
import PatternAppSortFilterBarPage from '@/pages/patterns/app/sortFilterBar/PatternAppSortFilterBarPage';
import PatternWebAddressEntryPage from '@/pages/patterns/web/addressEntry/PatternWebAddressEntryPage';
import PatternWebEmptyResultsPage from '@/pages/patterns/web/emptyResults/PatternWebEmptyResultsPage';
import PatternWebErrorRecoveryPage from '@/pages/patterns/web/errorRecovery/PatternWebErrorRecoveryPage';
import PatternWebFilterSheetPage from '@/pages/patterns/web/filterSheet/PatternWebFilterSheetPage';
import PatternWebFirstRunSetupPage from '@/pages/patterns/web/firstRunSetup/PatternWebFirstRunSetupPage';
import PatternWebInviteAcceptancePage from '@/pages/patterns/web/inviteAcceptance/PatternWebInviteAcceptancePage';
import PatternWebLoadingPanelPage from '@/pages/patterns/web/loadingPanel/PatternWebLoadingPanelPage';
import PatternWebPasswordResetPage from '@/pages/patterns/web/passwordReset/PatternWebPasswordResetPage';
import PatternWebPaymentMethodPage from '@/pages/patterns/web/paymentMethod/PatternWebPaymentMethodPage';
import PatternWebPermissionEducationPage from '@/pages/patterns/web/permissionEducation/PatternWebPermissionEducationPage';
import PatternWebProfileEditPage from '@/pages/patterns/web/profileEdit/PatternWebProfileEditPage';
import PatternWebSearchResultsPage from '@/pages/patterns/web/searchResults/PatternWebSearchResultsPage';
import PatternWebSignInPage from '@/pages/patterns/web/signIn/PatternWebSignInPage';
import PatternWebSignUpPage from '@/pages/patterns/web/signUp/PatternWebSignUpPage';
import PatternWebSortFilterBarPage from '@/pages/patterns/web/sortFilterBar/PatternWebSortFilterBarPage';
import PatternWebWorkspaceCreationPage from '@/pages/patterns/web/workspaceCreation/PatternWebWorkspaceCreationPage';
import PatternAppWorkspaceCreationPage from '@/pages/patterns/app/workspaceCreation/PatternAppWorkspaceCreationPage';
import { useParams } from 'react-router-dom';

const patternPageRegistry = {
  'web:onboarding:workspace-creation': PatternWebWorkspaceCreationPage,
  'web:onboarding:invite-acceptance': PatternWebInviteAcceptancePage,
  'web:onboarding:first-run-setup': PatternWebFirstRunSetupPage,
  'web:onboarding:permission-education': PatternWebPermissionEducationPage,
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
