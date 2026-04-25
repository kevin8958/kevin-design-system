import { useResolvedAppScheme } from '@/components/app/appUtils';

export const semanticSurfacePalette = {
  light: {
    neutral: {
      background: '#F5F5F5',
      foreground: '#262626',
      border: '#E5E5E5',
    },
    primary: {
      background: '#E8F1FF',
      foreground: '#0057C2',
      border: '#BBD5FF',
    },
    info: {
      background: '#E0F2FE',
      foreground: '#0C4A6E',
      border: '#BAE6FD',
    },
    success: {
      background: '#E8F7F0',
      foreground: '#1D6B52',
      border: '#BDE5D7',
    },
    warning: {
      background: '#FFF7E8',
      foreground: '#9A5B00',
      border: '#FCDFA8',
    },
    danger: {
      background: '#FDECEC',
      foreground: '#A61E1E',
      border: '#F6C2C2',
    },
  },
  dark: {
    neutral: {
      background: '#262626',
      foreground: '#F5F5F5',
      border: '#404040',
    },
    primary: {
      background: 'rgba(255, 183, 77, 0.14)',
      foreground: '#FFD089',
      border: 'rgba(255, 183, 77, 0.26)',
    },
    info: {
      background: 'rgba(125, 211, 252, 0.12)',
      foreground: '#B3E5FC',
      border: 'rgba(125, 211, 252, 0.24)',
    },
    success: {
      background: 'rgba(122, 215, 188, 0.12)',
      foreground: '#C4E6DB',
      border: 'rgba(122, 215, 188, 0.24)',
    },
    warning: {
      background: 'rgba(251, 191, 36, 0.12)',
      foreground: '#FDE68A',
      border: 'rgba(251, 191, 36, 0.24)',
    },
    danger: {
      background: 'rgba(248, 113, 113, 0.12)',
      foreground: '#FCA5A5',
      border: 'rgba(248, 113, 113, 0.24)',
    },
  },
} satisfies Record<
  'light' | 'dark',
  Record<
    App.AppSemanticColor,
    { background: string; foreground: string; border: string }
  >
>;

export const appDataPalette = {
  light: {
    surface: '#FFFFFF',
    surfaceMuted: '#F8F8F8',
    border: '#E5E5E5',
    borderStrong: '#D4D4D4',
    title: '#171717',
    text: '#262626',
    muted: '#737373',
    placeholder: '#A3A3A3',
    shadow: '#000000',
  },
  dark: {
    surface: '#171717',
    surfaceMuted: '#0A0A0A',
    border: '#262626',
    borderStrong: '#404040',
    title: '#FAFAFA',
    text: '#F5F5F5',
    muted: '#A3A3A3',
    placeholder: '#737373',
    shadow: '#000000',
  },
};

export const appAvatarSizes = {
  sm: {
    size: 32,
    textSize: 12,
    statusSize: 8,
  },
  md: {
    size: 44,
    textSize: 15,
    statusSize: 10,
  },
  lg: {
    size: 56,
    textSize: 18,
    statusSize: 12,
  },
} satisfies Record<
  App.AppAvatarSize,
  { size: number; textSize: number; statusSize: number }
>;

export const appLabelSizes = {
  sm: {
    height: 24,
    horizontalPadding: 8,
    fontSize: 11,
    radius: 12,
  },
  md: {
    height: 28,
    horizontalPadding: 10,
    fontSize: 12,
    radius: 14,
  },
  lg: {
    height: 34,
    horizontalPadding: 12,
    fontSize: 13,
    radius: 17,
  },
} satisfies Record<
  App.AppLabelSize,
  { height: number; horizontalPadding: number; fontSize: number; radius: number }
>;

export const appCardSizes = {
  sm: {
    padding: 14,
    titleSize: 12,
    bodySize: 13,
    valueSize: 24,
    radius: 18,
  },
  md: {
    padding: 16,
    titleSize: 13,
    bodySize: 14,
    valueSize: 30,
    radius: 20,
  },
  lg: {
    padding: 20,
    titleSize: 14,
    bodySize: 15,
    valueSize: 36,
    radius: 22,
  },
} satisfies Record<
  App.AppCardSize,
  { padding: number; titleSize: number; bodySize: number; valueSize: number; radius: number }
>;

export const useAppDataTheme = () => {
  const scheme = useResolvedAppScheme();

  return {
    scheme,
    colors: appDataPalette[scheme],
    semantic: semanticSurfacePalette[scheme],
  };
};

export const getInitials = (name?: string) => {
  if (!name) return '?';

  const parts = name
    .split(' ')
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();

  return `${parts[0][0] ?? ''}${parts[1][0] ?? ''}`.toUpperCase();
};

export const formatMetric = (value: number, decimals = 0) =>
  value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
