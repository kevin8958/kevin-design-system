const AppAccordionPreviewFrame = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-[360px] rounded-[28px] border border-neutral-200 bg-[#F6F7FB] p-4 dark:border-neutral-800 dark:bg-neutral-950">
        {children}
      </div>
    </div>
  );
};

export default AppAccordionPreviewFrame;
