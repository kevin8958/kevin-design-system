import MockPreviewShell from './MockPreviewShell';

const ImagePreview = ({
  src,
  alt,
  minHeight = 176,
  darkSrc,
}: {
  src: string;
  alt: string;
  minHeight?: number;
  darkSrc?: string;
}) => {
  const resolvedDarkSrc =
    darkSrc ?? (src.endsWith('.svg') ? src.replace(/\.svg$/, '-dark.svg') : undefined);

  return (
    <MockPreviewShell minHeight={minHeight}>
      {resolvedDarkSrc ? (
      <>
        <img src={src} alt={alt} className="block h-auto w-full dark:hidden" />
        <img
          src={resolvedDarkSrc}
          alt={alt}
          className="hidden h-auto w-full dark:block"
        />
      </>
    ) : (
      <img src={src} alt={alt} className="block h-auto w-full" />
      )}
    </MockPreviewShell>
  );
};

export default ImagePreview;
