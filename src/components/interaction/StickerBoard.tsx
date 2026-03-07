'use client';

import { Stage, Layer, Image as KonvaImage, Group, Rect, Text } from 'react-konva';
import useImage from 'use-image';
import { useState } from 'react';
import FlexWrapper from '../layout/FlexWrapper';
import Button from '../components/Button';
import Typography from '../foundation/Typography';

// ... (Sticker 인터페이스 및 Sticker 컴포넌트 로직은 기존과 완전히 동일)
interface Sticker {
  id: number;
  src: string;
  x: number;
  y: number;
  width: number;
}

interface StickerProps extends Sticker {
  onRemove: (id: number) => void;
}

const Sticker = ({ id, src, x, y, width, onRemove }: StickerProps) => {
  const [image] = useImage(src);
  const [isHovered, setIsHovered] = useState(false);

  if (!image) return null;

  const aspectRatio = image.height / image.width;
  const height = width * aspectRatio;

  // 모바일 터치 편의를 위해 버튼 크기를 18 -> 22로 살짝 키움
  const buttonSize = 22;

  return (
    <Group
      x={x}
      y={y}
      draggable
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // ✅ 추가: 클릭이나 탭을 했을 때 X버튼 상태를 토글함 (모바일 대응)
      onClick={() => setIsHovered(!isHovered)}
      onTap={() => setIsHovered(!isHovered)}
    >
      {/* Sticker image */}
      <KonvaImage image={image} width={width} height={height} />

      {/* X button background */}
      {isHovered && (
        <Group
          x={width - buttonSize / 2}
          y={-buttonSize / 2}
          // ✅ 중요: X버튼 클릭 시 스티커 클릭 이벤트가 또 발생하지 않도록 전파 방지
          onClick={(e) => {
            e.cancelBubble = true;
            onRemove(id);
          }}
          onTap={(e) => {
            e.cancelBubble = true;
            onRemove(id);
          }}
        >
          <Rect
            width={buttonSize}
            height={buttonSize}
            fill="rgba(0,0,0,0.7)" // 모바일에서 더 잘 보이게 투명도 조정
            cornerRadius={4}
          />
          <Text
            text="✕"
            fontSize={14}
            fill="white"
            width={buttonSize}
            height={buttonSize}
            align="center"
            verticalAlign="middle"
          />
        </Group>
      )}
    </Group>
  );
};

const stickerOptions = [
  { id: 1, src: '/sticker/sticker1.png' },
  { id: 2, src: '/sticker/sticker2.png' },
  { id: 3, src: '/sticker/alice.png' },
  { id: 4, src: '/sticker/bob.png' },
  { id: 5, src: '/sticker/charlie.png' },
  { id: 6, src: '/sticker/dana.png' },
  { id: 7, src: '' },
  { id: 8, src: '' },
  { id: 9, src: '' },
  { id: 10, src: '' },
];

export default function StickerBoard() {
  const [stickers, setStickers] = useState<Sticker[]>([]);

  const handleAddSticker = (src: string) => {
    const hasImage = src !== '';
    if (!hasImage) return;

    const newSticker: Sticker = {
      id: Date.now(),
      src,
      x: Math.random() * 400 + 50,
      y: Math.random() * 250 + 50,
      width: 80,
    };
    setStickers((prev) => [...prev, newSticker]);
  };

  const handleRemoveSticker = (id: number) => {
    setStickers((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    /* 1. min-w 제거, w-full 추가 및 화면 크기에 따라 가로/세로 정렬 변경 */
    <FlexWrapper
      classes="w-full bg-neutral-900 rounded-2xl p-4 overflow-hidden sm:flex-row"
      direction="col"
      gap={4}
    >
      {/* 2. 보드 영역: 모바일에서 화면보다 클 경우 가로 스크롤 가능하게 함 */}
      <div className="w-full overflow-x-auto rounded-xl bg-neutral-800">
        <div className="relative h-[400px] w-[600px]">
          {stickers.length === 0 && (
            <Typography
              variant="B2"
              classes="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-2 !text-neutral-100 !font-semibold z-10"
            >
              Add some stickers to get started
            </Typography>
          )}
          <Stage width={600} height={400}>
            <Layer>
              {stickers.map((sticker) => (
                <Sticker key={sticker.id} {...sticker} onRemove={handleRemoveSticker} />
              ))}
            </Layer>
          </Stage>
        </div>
      </div>

      {/* 3. 스티커 선택 영역: 모바일에서는 아래로 배치됨 */}
      <FlexWrapper classes="w-full lg:w-auto shrink-0" direction="col" justify="between" gap={4}>
        <div className="grid grid-cols-12 gap-2">
          {stickerOptions.map((sticker) => {
            const hasImage = sticker.src !== '';
            return (
              <button
                key={sticker.id}
                onClick={() => handleAddSticker(sticker.src)}
                disabled={!hasImage}
                className={`col-span-3 flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-neutral-100/20 p-2 transition lg:col-span-6 ${
                  hasImage
                    ? 'cursor-pointer hover:bg-neutral-100/10 active:scale-95'
                    : 'cursor-not-allowed opacity-30'
                }`}
              >
                {hasImage ? (
                  <img src={sticker.src} alt="" className="h-[40px] object-contain" />
                ) : (
                  <span className="text-[10px] text-neutral-300">Empty</span>
                )}
              </button>
            );
          })}
        </div>
        <Button variant="outline" onClick={() => setStickers([])} classes="w-full">
          CLEAR ALL
        </Button>
      </FlexWrapper>
    </FlexWrapper>
  );
}
