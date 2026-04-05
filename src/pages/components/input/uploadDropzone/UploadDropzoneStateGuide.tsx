import { useState } from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import UploadDropzone from '@/components/input/UploadDropzone';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const createFile = (name: string, content: string, type: string) =>
  new File([content], name, { type });

const StateExample = () => {
  const [files] = useState([createFile('contract.pdf', 'contract', 'application/pdf')]);

  const exampleCode = `<UploadDropzone invalid errorMsg="Please upload a PDF file." />
<UploadDropzone disabled />
<UploadDropzone files={files} onChange={setFiles} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        <UploadDropzone
          label="Invalid State"
          helperText="Only PDF files are allowed."
          accept=".pdf"
          invalid
          errorMsg="Please upload a PDF file."
          files={[]}
          onChange={() => {}}
        />
        <UploadDropzone
          label="Disabled State"
          helperText="Uploads are currently unavailable."
          disabled
          files={[]}
          onChange={() => {}}
        />
        <UploadDropzone
          label="Selected Files"
          helperText="Selected files appear beneath the dropzone."
          files={files}
          onChange={() => {}}
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const UploadDropzoneStateGuide = () => {
  return (
    <GuideSection
      title="States"
      description="Use validation, disabled, and selected-file states to keep upload flows clear and predictable."
      example={<StateExample />}
    />
  );
};

export default UploadDropzoneStateGuide;
