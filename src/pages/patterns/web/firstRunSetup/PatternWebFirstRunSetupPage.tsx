import { onboardingPatternConfigs } from '@/pages/patterns/common/onboardingPatternConfigs';
import PatternWebOnboardingTemplate from '@/pages/patterns/web/onboarding/PatternWebOnboardingTemplate';

export default function PatternWebFirstRunSetupPage() {
  return (
    <PatternWebOnboardingTemplate
      config={onboardingPatternConfigs['first-run-setup']}
    />
  );
}
