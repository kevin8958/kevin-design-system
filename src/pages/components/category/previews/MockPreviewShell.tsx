const MockPreviewShell = ({
  children,
  minHeight = 176,
}: {
  children: React.ReactNode;
  minHeight?: number;
}) => (
  <div
    className="mx-auto flex w-full max-w-[420px] items-center justify-center px-2 py-2"
    style={{ minHeight }}
  >
    {children}
  </div>
);

export default MockPreviewShell;
