namespace Layout {
  /** Box */
  interface BoxProps {
    id?: string;
    classes?: string;
    type?: 'default' | 'card' | 'code';
    title?: string;
    maxWidth?: number;
    children?: React.ReactNode;
  }

  /** FlexWrapper */
  interface FlexWrapperProps {
    direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
    justify?: 'start' | 'end' | 'center' | 'between' | 'around';
    items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;
    classes?: string;
    children?: React.ReactNode;
  }

  /** GuideSection */
  interface GuideSectionProps {
    title: string;
    description: string | React.ReactNode;
    example: React.ReactNode;
  }
}
