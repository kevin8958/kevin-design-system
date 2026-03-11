import React, { useState, useRef, useEffect } from 'react';
import Button from '@/components/action/Button';
import { HiCode, HiEye, HiCheck } from 'react-icons/hi';
import { LuCopy } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import IconButton from '../action/IconButton';

interface CodeExampleProps {
  children: React.ReactNode;
  code: string;
}

const CodeExample = ({ children, code }: CodeExampleProps) => {
  const [isCodeView, setIsCodeView] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const [containerHeight, setContainerHeight] = useState<number>(150);
  const previewRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      const pHeight = previewRef.current?.scrollHeight || 0;
      const cHeight = codeRef.current?.scrollHeight || 0;
      setContainerHeight(Math.max(pHeight, cHeight, 150));
    };

    updateHeight();

    const observer = new ResizeObserver(() => {
      window.requestAnimationFrame(updateHeight);
    });

    if (previewRef.current) observer.observe(previewRef.current);
    if (codeRef.current) observer.observe(codeRef.current);

    return () => observer.disconnect();
  }, [children, code]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <div className="relative w-full">
      {/* 1. View Toggle (Top-Right) */}
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

      {/* 2. Copy Button (Bottom-Right, Code Mode Only) */}
      <div className="absolute right-4 bottom-4 z-30">
        <AnimatePresence>
          {isCodeView && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              <IconButton
                variant="outline"
                color={isCopied ? 'success' : 'primary'}
                onClick={handleCopy}
                aria-label="Copy code"
                className="backdrop-blur-md"
                icon={isCopied ? <HiCheck size={16} /> : <LuCopy size={16} />}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. Container */}
      <div
        className="relative w-full overflow-hidden rounded-xl bg-neutral-50/50 transition-[height] duration-300 ease-in-out dark:bg-white/5"
        style={{ height: containerHeight }}
      >
        <div className="pointer-events-none absolute inset-0 w-full opacity-0">
          {/* Ghost Preview */}
          <div
            ref={previewRef}
            className="absolute w-full flex flex-col items-center justify-center p-12"
          >
            <div className="w-full flex justify-center">{children}</div>
          </div>

          {/* Ghost Code */}
          <div
            ref={codeRef}
            className="absolute w-full flex flex-col p-8 pt-14"
          >
            <div className="w-full pb-10">
              <pre className="text-xs font-mono leading-relaxed">
                <code>{code}</code>
              </pre>
            </div>
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
                ? 'bg-neutral-100 p-8 pt-14 text-neutral-800 dark:text-neutral-100 dark:bg-black/60'
                : 'items-center justify-center p-12',
            )}
          >
            {!isCodeView ? (
              <div className="w-full flex justify-center">{children}</div>
            ) : (
              <div className="w-full h-full pb-10">
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
