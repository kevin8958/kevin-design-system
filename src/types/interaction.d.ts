namespace Interaction {
  interface CountUpProps {
    to: number;
    from?: number;
    direction?: 'up' | 'down';
    delay?: number;
    duration?: number;
    className?: string;
    startWhen?: boolean;
    separator?: string;
    onStart?: () => void;
    onEnd?: () => void;
    repeat?: boolean;
  }

  type SplitTextVariant = 'H1' | 'H2' | 'H3' | 'B1' | 'B2' | 'C1';

  interface SplitTextProps {
    text: string;
    classes?: string;
    variant?: SplitTextVariant;
    delay?: number;
    repeat?: boolean;
  }

  interface StickerOption {
    id: string | number;
    src: string;
    alt?: string;
    label?: string;
  }

  interface StickerProps {
    options?: StickerOption[];
    boardWidth?: number;
    boardHeight?: number;
    emptyMessage?: string;
    classes?: string;
  }
}
