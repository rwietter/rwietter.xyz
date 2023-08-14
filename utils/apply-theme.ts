import {
  archTheme, blueberryLight, catppuccinDark, chaosTheory,
} from 'features/ui/theme';

const choiceTheme = (currentTheme: any) => {
  switch (currentTheme) {
    case 'blueberry-light':
      return blueberryLight;
    case 'arch':
      return archTheme;
    case 'catppuccin':
      return catppuccinDark;
    case 'chaos-theory':
      return chaosTheory;
    default:
      return blueberryLight;
  }
};

export const applyTheme = (currentTheme: any) => {
  const theme = choiceTheme(currentTheme);
  const classTheme = document.querySelector('body') as HTMLBodyElement;
  classTheme.className = theme;
  classTheme.classList.toggle('dark', currentTheme === 'light');
};
