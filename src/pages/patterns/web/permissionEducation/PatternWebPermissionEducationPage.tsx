import { onboardingPatternConfigs } from '@/pages/patterns/common/onboardingPatternConfigs';
import PatternWebOnboardingTemplate from '@/pages/patterns/web/onboarding/PatternWebOnboardingTemplate';

export default function PatternWebPermissionEducationPage() {
  return (
    <PatternWebOnboardingTemplate
      config={onboardingPatternConfigs['permission-education']}
    />
  );
}
