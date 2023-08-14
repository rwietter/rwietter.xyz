import { create, type StoreApi, type UseBoundStore } from 'zustand';

interface Theme {
  isVisible: boolean,
  // eslint-disable-next-line no-unused-vars
  setIsVisible: (isVisible: boolean) => void,
}

const useModalTheme: UseBoundStore<StoreApi<Theme>> = create((set) => ({
  isVisible: false,
  setIsVisible: (isVisible) => set(() => ({ isVisible })),
}));

export { useModalTheme };
