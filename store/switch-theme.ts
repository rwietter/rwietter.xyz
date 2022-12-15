/* eslint-disable no-unused-vars */
import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface ThemeStore {
  theme: 'dark' | 'light';
  setTheme?: (theme: 'dark' | 'light') => void;
}

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (newTheme: ThemeStore) => set({ theme: newTheme }),
    }),
    {
      name: 'theme',
      getStorage: () => localStorage,
    },
  ),
);
