const AppDevicePreviewFrame = ({
  children,
  minHeight = 320,
  contentClasses = '',
  maxWidthClass = 'max-w-[360px]',
}: {
  children: React.ReactNode;
  minHeight?: number;
  contentClasses?: string;
  maxWidthClass?: string;
}) => {
  return (
    <div className="flex w-full min-w-0 justify-center">
      <div
        className={`w-full min-w-0 ${maxWidthClass} overflow-x-hidden rounded-[28px] border border-neutral-200 bg-[#F6F7FB] p-5 dark:border-neutral-800 dark:bg-neutral-950`.trim()}
      >
        <div
          className={`relative w-full min-w-0 ${contentClasses}`.trim()}
          style={{ minHeight }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppDevicePreviewFrame;
