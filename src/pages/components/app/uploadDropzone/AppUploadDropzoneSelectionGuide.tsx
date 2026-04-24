import { useState } from 'react';
import AppUploadDropzone from '@/components/app/AppUploadDropzone';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { appUploadFiles } from '@/pages/components/app/common/appInputSamples';

const AppUploadDropzoneSelectionGuide = () => {
  const [files, setFiles] = useState<App.AppUploadFile[]>([]);
  const code = `<AppUploadDropzone
  label="Attachments"
  description="Drop campaign assets here or tap to browse."
  files={files}
  onPressSelect={() => setFiles(mockFiles)}
  onRemoveFile={(id) => setFiles((current) => current.filter((file) => file.id !== id))}
/>`;

  return (
    <GuideSection
      title="Selection"
      description="Let the screen communicate both the call-to-action and the current attachment state at a glance."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={780}>
          <AppDevicePreviewFrame minHeight={500}>
            <div className="flex w-full flex-col gap-4">
              <AppUploadDropzone
                description="Drop campaign assets here or tap to browse."
                files={files}
                label="Attachments"
                onPressSelect={() => setFiles(appUploadFiles)}
                onRemoveFile={(id) =>
                  setFiles((current) => current.filter((file) => file.id !== id))
                }
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppUploadDropzoneSelectionGuide;
