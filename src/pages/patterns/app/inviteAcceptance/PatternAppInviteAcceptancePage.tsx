import { onboardingPatternConfigs } from '@/pages/patterns/common/onboardingPatternConfigs';
import PatternAppOnboardingTemplate from '@/pages/patterns/app/onboarding/PatternAppOnboardingTemplate';

export default function PatternAppInviteAcceptancePage() {
  return (
    <PatternAppOnboardingTemplate
      config={onboardingPatternConfigs['invite-acceptance']}
    />
  );
}
