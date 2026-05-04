import { onboardingPatternConfigs } from '@/pages/patterns/common/onboardingPatternConfigs';
import PatternWebOnboardingTemplate from '@/pages/patterns/web/onboarding/PatternWebOnboardingTemplate';

export default function PatternWebWorkspaceCreationPage() {
  return (
    <PatternWebOnboardingTemplate
      config={onboardingPatternConfigs['workspace-creation']}
    />
  );
}
