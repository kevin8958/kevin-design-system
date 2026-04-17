const AppButtonPreviewFrame = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-[320px] rounded-[28px] border border-neutral-200 bg-[#F6F7FB] p-5 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex w-full flex-col gap-3">{children}</div>
      </div>
    </div>
  );
};

export default AppButtonPreviewFrame;
