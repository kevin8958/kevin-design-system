import AppAvatar from '@/components/app/AppAvatar';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppAvatarStateGuide = ({ size }: { size: App.AppAvatarSize }) => {
  const code = `<AppAvatar name="Ari Kim" size="${size}" status="online" />
<AppAvatar name="Bo Park" size="${size}" status="busy" />
<AppAvatar name="Cha Lee" size="${size}" status="offline" />`;

  return (
    <GuideSection
      title="State"
      description="Use lightweight status indicators to show presence without overwhelming profile-heavy lists."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={380}>
          <AppDevicePreviewFrame minHeight={160}>
            <div className="flex w-full flex-wrap items-center gap-5">
              <div className="flex flex-col items-center gap-2">
                <AppAvatar name="Ari Kim" size={size} status="online" />
                <Typography variant="C1">Online</Typography>
              </div>
              <div className="flex flex-col items-center gap-2">
                <AppAvatar name="Bo Park" size={size} status="busy" />
                <Typography variant="C1">Busy</Typography>
              </div>
              <div className="flex flex-col items-center gap-2">
                <AppAvatar name="Cha Lee" size={size} status="offline" />
                <Typography variant="C1">Offline</Typography>
              </div>
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppAvatarStateGuide;
