// import React from 'react';
// import { AvailableThemes, themeList } from 'features/ui/theme';
// import { TfiClose } from 'react-icons/tfi';
// import { useTheme } from 'store/switch-theme';

// import { useModalTheme } from 'store/modal-theme';
// import * as S from './styles';

// const ModalTheme: React.FC = () => {
//   const { isVisible, setIsVisible } = useModalTheme();

//   const { setTheme, theme } = useTheme();

//   const handleSetModalInvisible = () => setIsVisible(false);

//   const themes = {
//     'blueberry-light': () => setTheme('blueberry-light'),
//     arch: () => setTheme('arch'),
//     catppuccin: () => setTheme('catppuccin'),
//     'chaos-theory': () => setTheme('chaos-theory'),
//   };

//   const handleSwitchTheme = (selectedTheme: AvailableThemes) => {
//     themes[selectedTheme]();
//   };

//   React.useEffect(() => {
//     const handleKeyDownCloseModal = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') handleSetModalInvisible();
//     };

//     if (isVisible) {
//       document.addEventListener('keydown', handleKeyDownCloseModal);
//       document.addEventListener('mousedown', handleSetModalInvisible);
//     }

//     return () => {
//       document.removeEventListener('keydown', handleKeyDownCloseModal);
//       document.removeEventListener('mousedown', handleSetModalInvisible);
//     };
//   }, [isVisible]);

//   if (!isVisible) return <span />;

//   return (
//     <S.ModalSwitchTheme>
//       <S.ModalList>
//         {themeList.map(({ name, background, colors }) => (
//           <S.ModalContent
//             key={name}
//             data-active={theme === name}
//             onClick={() => {
//               handleSwitchTheme(name);
//               handleSetModalInvisible();
//             }}
//             onMouseEnter={() => handleSwitchTheme(name)}
//           >
//             <S.ModalItem>{name}</S.ModalItem>
//             <S.ModalColors style={{ background }}>
//               {colors.map((color) => (
//                 <S.ModalColor key={color} style={{ background: color }} />
//               ))}
//             </S.ModalColors>
//           </S.ModalContent>
//         ))}
//       </S.ModalList>
//       <S.ModalItemButton type="button" onClick={handleSetModalInvisible}>
//         <TfiClose size={15} />
//       </S.ModalItemButton>
//     </S.ModalSwitchTheme>
//   );
// };

// export { ModalTheme };
