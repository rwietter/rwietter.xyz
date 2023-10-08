/* eslint-disable no-unused-vars */
import { AvailableThemes } from 'features/ui/theme/theme';
import { create, type StoreApi, type UseBoundStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface Theme {
  theme: AvailableThemes;
  setTheme: (theme: AvailableThemes) => void;
}

const useTheme: UseBoundStore<StoreApi<Theme>> = create(persist((set) => ({
  theme: 'arch',
  setTheme: (theme) => { set({ theme }); },
}), {
  name: 'theme',
  storage: createJSONStorage(() => localStorage),
}));

export { useTheme };
