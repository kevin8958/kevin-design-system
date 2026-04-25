import { useResolvedAppScheme } from '@/components/app/appUtils';

export const feedbackPalette = {
  light: {
    surface: '#FFFFFF',
    border: '#E5E5E5',
    muted: '#737373',
    text: '#171717',
    skeletonBase: '#E5E5E5',
    skeletonHighlight: '#F5F5F5',
    track: '#E5E5E5',
    info: {
      background: '#E0F2FE',
      border: '#BAE6FD',
      foreground: '#0C4A6E',
    },
    success: {
      background: '#E8F7F0',
      border: '#BDE5D7',
      foreground: '#1D6B52',
    },
    warning: {
      background: '#FFF7E8',
      border: '#FCDFA8',
      foreground: '#9A5B00',
    },
    danger: {
      background: '#FDECEC',
      border: '#F6C2C2',
      foreground: '#A61E1E',
    },
  },
  dark: {
    surface: '#171717',
    border: '#262626',
    muted: '#A3A3A3',
    text: '#FAFAFA',
    skeletonBase: '#262626',
    skeletonHighlight: '#404040',
    track: '#262626',
    info: {
      background: 'rgba(179, 229, 252, 0.12)',
      border: 'rgba(125, 211, 252, 0.24)',
      foreground: '#B3E5FC',
    },
    success: {
      background: 'rgba(196, 230, 219, 0.12)',
      border: 'rgba(122, 215, 188, 0.24)',
      foreground: '#C4E6DB',
    },
    warning: {
      background: 'rgba(253, 230, 138, 0.12)',
      border: 'rgba(251, 191, 36, 0.24)',
      foreground: '#FDE68A',
    },
    danger: {
      background: 'rgba(248, 113, 113, 0.12)',
      border: 'rgba(248, 113, 113, 0.24)',
      foreground: '#FCA5A5',
    },
  },
} satisfies Record<
  'light' | 'dark',
  {
    surface: string;
    border: string;
    muted: string;
    text: string;
    skeletonBase: string;
    skeletonHighlight: string;
    track: string;
    info: { background: string; border: string; foreground: string };
    success: { background: string; border: string; foreground: string };
    warning: { background: string; border: string; foreground: string };
    danger: { background: string; border: string; foreground: string };
  }
>;

export const progressHeights = {
  sm: 6,
  md: 8,
  lg: 10,
} satisfies Record<App.AppProgressSize, number>;

export const useAppFeedbackTheme = () => {
  const scheme = useResolvedAppScheme();

  return {
    scheme,
    colors: feedbackPalette[scheme],
  };
};

export const variantIcons: Record<App.AppFeedbackVariant, string> = {
  info: 'i',
  success: '✓',
  warning: '!',
  danger: '✕',
};
