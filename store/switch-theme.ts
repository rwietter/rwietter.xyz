import { create, type StoreApi, type UseBoundStore } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface Theme {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
}

const useTheme: UseBoundStore<StoreApi<Theme>> = create(persist((set) => ({
  theme: 'light',
  setTheme: (theme) => { set({ theme }); }
}), {
  name: 'theme',
  storage: createJSONStorage(() => sessionStorage)
}));

export { useTheme };
