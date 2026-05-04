import { onboardingPatternConfigs } from '@/pages/patterns/common/onboardingPatternConfigs';
import PatternAppOnboardingTemplate from '@/pages/patterns/app/onboarding/PatternAppOnboardingTemplate';

export default function PatternAppPermissionEducationPage() {
  return (
    <PatternAppOnboardingTemplate
      config={onboardingPatternConfigs['permission-education']}
    />
  );
}
