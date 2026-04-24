import AppUploadDropzone from '@/components/app/AppUploadDropzone';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { appUploadFiles } from '@/pages/components/app/common/appInputSamples';

const AppUploadDropzoneStateGuide = () => {
  const code = `<AppUploadDropzone label="Attachments" description="Attach supporting files." />
<AppUploadDropzone label="Attachments" description="Attach supporting files." files={mockFiles} />
<AppUploadDropzone label="Attachments" description="Attach supporting files." error errorMsg="Upload at least one file." />`;

  return (
    <GuideSection
      title="State"
      description="Document the empty, populated, and validation states so upload flows remain self-explanatory."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={980}>
          <AppDevicePreviewFrame minHeight={700}>
            <div className="flex w-full flex-col gap-4">
              <AppUploadDropzone
                description="Attach supporting files."
                label="Attachments"
              />
              <AppUploadDropzone
                defaultFiles={appUploadFiles}
                description="Attach supporting files."
                label="Attachments"
              />
              <AppUploadDropzone
                description="Attach supporting files."
                error
                errorMsg="Upload at least one file."
                label="Attachments"
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppUploadDropzoneStateGuide;
