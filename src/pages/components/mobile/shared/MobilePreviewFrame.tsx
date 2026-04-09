import classNames from 'classnames';

type MobilePreviewFrameProps = {
  children: React.ReactNode;
  screenClasses?: string;
  classes?: string;
};

const MobilePreviewFrame = ({
  children,
  screenClasses,
  classes,
}: MobilePreviewFrameProps) => {
  return (
    <div className={classNames('w-full', classes)}>
      <div className="hidden w-full justify-center sm:flex">
        <div className="relative w-[336px] rounded-[40px] border border-neutral-300 bg-neutral-950 p-2.5 shadow-[0_28px_90px_rgba(15,23,42,0.18)] dark:border-neutral-700">
          <div
            className={classNames(
              'relative flex h-[680px] w-full overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950',
              screenClasses,
            )}
          >
            {children}
          </div>
        </div>
      </div>
      <div className="w-full sm:hidden">{children}</div>
    </div>
  );
};

export default MobilePreviewFrame;
