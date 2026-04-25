import AppAvatar from '@/components/app/AppAvatar';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { sampleAvatarImage } from '@/pages/components/app/common/appDataDisplaySamples';

const AppAvatarTypeGuide = ({ size }: { size: App.AppAvatarSize }) => {
  const code = `<AppAvatar name="Kevin Park" size="${size}" />
<AppAvatar name="Maria Kim" size="${size}" src={sampleAvatarImage} />
<AppAvatar name="Jordan Lee" size="${size}" status="online" />`;

  return (
    <GuideSection
      title="Type"
      description="Support both image-based and initials-based avatars without changing the surrounding layout rhythm."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={420}>
          <AppDevicePreviewFrame minHeight={180}>
            <div className="flex w-full flex-wrap items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <AppAvatar name="Kevin Park" size={size} />
                <Typography variant="C1">Initials</Typography>
              </div>
              <div className="flex flex-col items-center gap-2">
                <AppAvatar name="Maria Kim" size={size} src={sampleAvatarImage} />
                <Typography variant="C1">Image</Typography>
              </div>
              <div className="flex flex-col items-center gap-2">
                <AppAvatar name="Jordan Lee" size={size} status="online" />
                <Typography variant="C1">Presence</Typography>
              </div>
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppAvatarTypeGuide;
