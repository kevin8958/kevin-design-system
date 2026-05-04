import { onboardingPatternConfigs } from '@/pages/patterns/common/onboardingPatternConfigs';
import PatternAppOnboardingTemplate from '@/pages/patterns/app/onboarding/PatternAppOnboardingTemplate';

export default function PatternAppWorkspaceCreationPage() {
  return (
    <PatternAppOnboardingTemplate
      config={onboardingPatternConfigs['workspace-creation']}
    />
  );
}
