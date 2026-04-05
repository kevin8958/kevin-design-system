import React, { useState, useRef, useEffect } from 'react';
import Button from '@/components/action/Button';
import { HiCode, HiEye, HiCheck } from 'react-icons/hi';
import { LuCopy } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';

interface CodeExampleProps {
  children: React.ReactNode;
  code: string;
  className?: string;
  maxHeight?: number;
}

const CodeExample = ({
  children,
  code,
  maxHeight,
  className,
}: CodeExampleProps) => {
  const [isCodeView, setIsCodeView] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const [containerHeight, setContainerHeight] = useState<number>(150);
  const previewRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      const pHeight = previewRef.current?.scrollHeight || 0;
      const cHeight = codeRef.current?.scrollHeight || 0;
      setContainerHeight(
        Math.min(Math.max(pHeight, cHeight, 150), maxHeight || 1000),
      );
    };

    updateHeight();

    const observer = new ResizeObserver(() => {
      window.requestAnimationFrame(updateHeight);
    });

    if (previewRef.current) observer.observe(previewRef.current);
    if (codeRef.current) observer.observe(codeRef.current);

    return () => observer.disconnect();
  }, [children, code, maxHeight]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <div
      className={classNames(
        'relative w-full rounded-2xl border border-neutral-500/30 shadow-sm bg-neutral-50/50 dark:border-neutral-100/30 dark:bg-neutral-900/50 transition-all duration-300',
        className,
      )}
    >
      {/* 1. View Toggle */}
      <div className="absolute right-3 top-3 z-30">
        <Button
          variant="outline"
          color="neutral"
          size="sm"
          onClick={() => setIsCodeView(!isCodeView)}
          classes="!min-w-[80px] bg-white/10 dark:bg-black/10 backdrop-blur-md"
          icon={isCodeView ? <HiEye /> : <HiCode />}
        >
          {isCodeView ? 'Preview' : 'Code'}
        </Button>
      </div>

      {/* 2. Copy Button */}
      <div className="absolute right-4 bottom-4 z-30">
        <AnimatePresence>
          {isCodeView && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              <Button
                variant={'outline'}
                color={isCopied ? 'success' : 'primary'}
                onClick={handleCopy}
                aria-label="Copy code"
                classes="backdrop-blur-md px-2!"
                icon={isCopied ? <HiCheck size={16} /> : <LuCopy size={16} />}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. Content Area */}
      <div
        className="relative w-full transition-[height] duration-300 ease-in-out"
        style={{ height: containerHeight }}
      >
        {/* Ghost Layer for Height Calculation */}
        <div className="pointer-events-none absolute inset-0 w-full opacity-0">
          <div
            ref={previewRef}
            className="absolute w-full flex flex-col items-center justify-center p-12"
          >
            {children}
          </div>
          <div ref={codeRef} className="absolute w-full flex flex-col p-8">
            <pre className="text-xs font-mono leading-relaxed">
              <code>{code}</code>
            </pre>
          </div>
        </div>

        {/* Visible Layer */}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={isCodeView ? 'code' : 'preview'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className={classNames(
              'relative z-20 w-full flex flex-col h-full select-text',
              isCodeView
                ? 'rounded-2xl bg-neutral-100 p-8 text-neutral-800 dark:text-neutral-100 dark:bg-black/60'
                : 'items-center justify-center p-8',
            )}
          >
            {!isCodeView ? (
              <div className="w-full flex justify-center">{children}</div>
            ) : (
              <div className="w-full h-full">
                <pre className="custom-scrollbar overflow-x-auto text-xs font-mono leading-relaxed select-text h-full">
                  <code className="select-text">{code}</code>
                </pre>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CodeExample;
