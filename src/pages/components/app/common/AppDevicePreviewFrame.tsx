const AppDevicePreviewFrame = ({
  children,
  minHeight = 320,
  contentClasses = '',
}: {
  children: React.ReactNode;
  minHeight?: number;
  contentClasses?: string;
}) => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-[360px] rounded-[28px] border border-neutral-200 bg-[#F6F7FB] p-5 dark:border-neutral-800 dark:bg-neutral-950">
        <div
          className={`relative w-full ${contentClasses}`.trim()}
          style={{ minHeight }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppDevicePreviewFrame;
