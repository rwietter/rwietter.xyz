// import { create, type StoreApi, type UseBoundStore } from 'zustand'
// import { createJSONStorage, persist } from 'zustand/middleware'

// interface Theme {
//   theme: AvailableThemes
//   setTheme: (theme: AvailableThemes) => void
// }

// const useTheme: UseBoundStore<StoreApi<Theme>> = create(
//   persist(
//     (set) => ({
//       theme: 'dark',
//       setTheme: (theme) => {
//         set({ theme })
//       },
//     }),
//     {
//       name: 'theme',
//       storage: createJSONStorage(() => localStorage),
//     },
//   ),
// )

// export { useTheme }
