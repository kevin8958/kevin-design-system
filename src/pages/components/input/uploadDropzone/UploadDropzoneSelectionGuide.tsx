import { useState } from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import UploadDropzone from '@/components/input/UploadDropzone';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const SelectionExample = () => {
  const [singleFile, setSingleFile] = useState<File[]>([]);
  const [multipleFiles, setMultipleFiles] = useState<File[]>([]);

  const exampleCode = `const [singleFile, setSingleFile] = useState<File[]>([]);
const [multipleFiles, setMultipleFiles] = useState<File[]>([]);

<UploadDropzone
  multiple={false}
  files={singleFile}
  onChange={setSingleFile}
/>

<UploadDropzone
  multiple
  maxFiles={3}
  files={multipleFiles}
  onChange={setMultipleFiles}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        <UploadDropzone
          label="Single File"
          helperText="Restrict the input to a single attachment."
          multiple={false}
          files={singleFile}
          onChange={setSingleFile}
        />
        <UploadDropzone
          label="Multiple Files"
          helperText="Allow a small batch upload by combining multiple with maxFiles."
          multiple
          maxFiles={3}
          files={multipleFiles}
          onChange={setMultipleFiles}
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const UploadDropzoneSelectionGuide = () => {
  return (
    <GuideSection
      title="Selection Mode"
      description="Support either single uploads or a capped multi-file flow with the same component API."
      example={<SelectionExample />}
    />
  );
};

export default UploadDropzoneSelectionGuide;
