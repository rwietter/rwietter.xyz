/* eslint-disable no-unused-vars */
import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface ColorStore {
  colors: string[];
  setColors: (colors: string[]) => void;
}

export const useColorStore = create(
  persist(
    (set) => ({
      colors: ['#2A78E5', '#3AD0E0'],
      setColors: (newColors: ColorStore) => set({ colors: newColors }),
    }),
    {
      name: 'colors',
      getStorage: () => localStorage,
    },
  ),
);
