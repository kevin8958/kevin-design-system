import { useEffect, useState } from 'react';
import {
  Text,
  type StyleProp,
  type TextStyle,
  useColorScheme,
} from 'react-native';

export const useResolvedAppScheme = (): 'light' | 'dark' => {
  const systemScheme = useColorScheme();
  const [webScheme, setWebScheme] = useState<'light' | 'dark' | null>(() => {
    if (typeof document === 'undefined') return null;

    return document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    if (typeof document === 'undefined') return undefined;

    const root = document.documentElement;
    const syncScheme = () => {
      setWebScheme(root.classList.contains('dark') ? 'dark' : 'light');
    };

    syncScheme();

    const observer = new MutationObserver(syncScheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return webScheme ?? (systemScheme === 'dark' ? 'dark' : 'light');
};

export const isPrimitiveAppNode = (
  node: React.ReactNode,
): node is string | number => typeof node === 'string' || typeof node === 'number';

export const renderAppTextNode = (
  node: React.ReactNode,
  style: StyleProp<TextStyle>,
) => {
  if (node === undefined || node === null) return null;

  if (isPrimitiveAppNode(node)) {
    return <Text style={style}>{node}</Text>;
  }

  return node;
};
