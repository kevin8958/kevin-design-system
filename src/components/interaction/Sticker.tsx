import { useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { LuTrash2, LuX } from 'react-icons/lu';
import Button from '@/components/action/Button';
import aliceSticker from '@/assets/sticker/alice.png';
import bobSticker from '@/assets/sticker/bob.png';
import charlieSticker from '@/assets/sticker/charlie.png';
import danaSticker from '@/assets/sticker/dana.png';
import stickerOne from '@/assets/sticker/sticker1.png';
import stickerTwo from '@/assets/sticker/sticker2.png';

interface PlacedSticker extends Interaction.StickerOption {
  instanceId: number;
  x: number;
  y: number;
  width: number;
}

const DEFAULT_OPTIONS: Interaction.StickerOption[] = [
  {
    id: 1,
    src: stickerOne,
    alt: 'Orange smile sticker',
    label: 'Sticker 1',
  },
  {
    id: 2,
    src: stickerTwo,
    alt: 'Blue cat sticker',
    label: 'Sticker 2',
  },
  { id: 3, src: aliceSticker, alt: 'Alice sticker', label: 'Alice' },
  { id: 4, src: bobSticker, alt: 'Bob sticker', label: 'Bob' },
  {
    id: 5,
    src: charlieSticker,
    alt: 'Charlie sticker',
    label: 'Charlie',
  },
  { id: 6, src: danaSticker, alt: 'Dana sticker', label: 'Dana' },
];

const STICKER_WIDTH = 88;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const Sticker = ({
  options = DEFAULT_OPTIONS,
  boardWidth = 600,
  boardHeight = 400,
  emptyMessage = 'Add some stickers to get started',
  classes,
}: Interaction.StickerProps) => {
  const boardRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    instanceId: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);
  const nextIdRef = useRef(1);
  const [stickers, setStickers] = useState<PlacedSticker[]>([]);
  const [draggingId, setDraggingId] = useState<number | null>(null);

  const enabledOptions = useMemo(
    () => options.filter((option) => Boolean(option.src)),
    [options],
  );

  const addSticker = (option: Interaction.StickerOption) => {
    const instanceId = nextIdRef.current++;
    const step = stickers.length % 5;

    setStickers((prev) => [
      ...prev,
      {
        ...option,
        instanceId,
        width: STICKER_WIDTH,
        x: clamp(32 + step * 56, 0, Math.max(boardWidth - STICKER_WIDTH, 0)),
        y: clamp(32 + step * 36, 0, Math.max(boardHeight - STICKER_WIDTH, 0)),
      },
    ]);
  };

  const removeSticker = (instanceId: number) => {
    setStickers((prev) =>
      prev.filter((sticker) => sticker.instanceId !== instanceId),
    );
  };

  useEffect(() => {
    if (draggingId === null) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (!dragRef.current || !boardRef.current) return;

      const rect = boardRef.current.getBoundingClientRect();
      const nextX = clamp(
        event.clientX - rect.left - dragRef.current.offsetX,
        0,
        Math.max(boardWidth - STICKER_WIDTH, 0),
      );
      const nextY = clamp(
        event.clientY - rect.top - dragRef.current.offsetY,
        0,
        Math.max(boardHeight - STICKER_WIDTH, 0),
      );

      setStickers((prev) =>
        prev.map((sticker) =>
          sticker.instanceId === dragRef.current?.instanceId
            ? { ...sticker, x: nextX, y: nextY }
            : sticker,
        ),
      );
    };

    const handlePointerUp = () => {
      dragRef.current = null;
      setDraggingId(null);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [boardHeight, boardWidth, draggingId]);

  return (
    <div
      className={classNames(
        'flex w-full flex-col gap-4 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-800 dark:bg-neutral-900 lg:flex-row',
        classes,
      )}
    >
      <div className="w-full overflow-x-auto rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-800">
        <div
          ref={boardRef}
          role="region"
          aria-label="Sticker board"
          className={classNames(
            'relative overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(61,149,255,0.16),_transparent_42%)] bg-white dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_40%)] dark:bg-neutral-800',
            draggingId !== null ? 'cursor-grabbing' : 'cursor-default',
          )}
          style={{ width: boardWidth, height: boardHeight }}
        >
          {stickers.length === 0 && (
            <p className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm dark:bg-neutral-950/60 dark:text-neutral-100">
              {emptyMessage}
            </p>
          )}

          {stickers.map((sticker) => (
            <div
              key={sticker.instanceId}
              className="group absolute touch-none select-none"
              style={{
                left: sticker.x,
                top: sticker.y,
                width: sticker.width,
              }}
            >
              <button
                type="button"
                aria-label={`Move ${sticker.label || sticker.alt || 'sticker'}`}
                className={classNames(
                  'relative block w-full cursor-grab active:cursor-grabbing',
                  draggingId === sticker.instanceId && 'cursor-grabbing',
                )}
                onPointerDown={(event) => {
                  const target = event.currentTarget.getBoundingClientRect();

                  dragRef.current = {
                    instanceId: sticker.instanceId,
                    offsetX: event.clientX - target.left,
                    offsetY: event.clientY - target.top,
                  };
                  setDraggingId(sticker.instanceId);
                }}
              >
                <img
                  src={sticker.src}
                  alt={sticker.alt || sticker.label || 'Sticker'}
                  draggable={false}
                  className="pointer-events-none w-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.28)]"
                />
              </button>

              <button
                type="button"
                aria-label={`Remove ${sticker.label || sticker.alt || 'sticker'}`}
                onClick={() => removeSticker(sticker.instanceId)}
                className="absolute -right-2 -top-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white/95 text-neutral-700 opacity-0 shadow-md transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 dark:bg-neutral-950/85 dark:text-neutral-100"
              >
                <LuX size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full shrink-0 flex-col gap-4 lg:w-[220px]">
        <div className="grid grid-cols-3 gap-2 lg:grid-cols-2">
          {enabledOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => addSticker(option)}
              className="flex aspect-square cursor-pointer items-center justify-center rounded-2xl border border-neutral-200 bg-white p-3 transition hover:bg-neutral-50 active:scale-[0.98] dark:border-neutral-100/15 dark:bg-neutral-900/60 dark:hover:bg-neutral-100/10"
            >
              <img
                src={option.src}
                alt={option.alt || option.label || 'Sticker option'}
                className="max-h-full max-w-full object-contain"
              />
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          color="neutral"
          classes="w-full"
          icon={<LuTrash2 size={15} />}
          onClick={() => setStickers([])}
          disabled={stickers.length === 0}
        >
          Clear All
        </Button>
      </div>
    </div>
  );
};

export default Sticker;
