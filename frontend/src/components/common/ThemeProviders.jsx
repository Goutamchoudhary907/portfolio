import { useEffect } from 'react';

/**
 * ThemeProvider
 * Replaces next-themes ThemeProvider.
 * Reads theme from localStorage and applies dark class to <html>.
 */
export function ThemeProvider({ children, defaultTheme = 'system', storageKey = 'theme' }) {
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : (defaultTheme === 'dark' || (defaultTheme === 'system' && prefersDark));
    document.documentElement.classList.toggle('dark', isDark);
  }, [defaultTheme, storageKey]);

  return children;
}