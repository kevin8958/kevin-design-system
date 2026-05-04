import { onboardingPatternConfigs } from '@/pages/patterns/common/onboardingPatternConfigs';
import PatternWebOnboardingTemplate from '@/pages/patterns/web/onboarding/PatternWebOnboardingTemplate';

export default function PatternWebInviteAcceptancePage() {
  return (
    <PatternWebOnboardingTemplate
      config={onboardingPatternConfigs['invite-acceptance']}
    />
  );
}
