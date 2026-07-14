namespace Foundation {
  /** Typography */
  type TypographyColor = 'primary' | 'secondary' | 'neutral';
  type TypographyVariant = 'H1' | 'H2' | 'H3' | 'H4' | 'B1' | 'B2' | 'C1';
  interface TypographyProps {
    classes?: string;
    color?: TypographyColor;
    variant: TypographyVariant;
    /** true면 모바일 뷰포트에서 H1을 H2 크기로 축소해 렌더링합니다. */
    responsive?: boolean;
    children?: React.ReactNode | string;
  }
}
