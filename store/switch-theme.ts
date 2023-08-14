import { AvailableThemes } from 'features/ui/theme/theme';
import { create, type StoreApi, type UseBoundStore } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface Theme {
  theme: AvailableThemes
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: AvailableThemes) => void
}

const useTheme: UseBoundStore<StoreApi<Theme>> = create(persist((set) => ({
  theme: 'arch',
  setTheme: (theme) => { set({ theme }); },
}), {
  name: 'theme',
  storage: createJSONStorage(() => sessionStorage),
}));

export { useTheme };
