import { onboardingPatternConfigs } from '@/pages/patterns/common/onboardingPatternConfigs';
import PatternAppOnboardingTemplate from '@/pages/patterns/app/onboarding/PatternAppOnboardingTemplate';

export default function PatternAppFirstRunSetupPage() {
  return (
    <PatternAppOnboardingTemplate
      config={onboardingPatternConfigs['first-run-setup']}
    />
  );
}
