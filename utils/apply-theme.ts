import { EnvTheme } from 'features/ui/theme/ts';
import { getThemeProps } from './get-theme';

export const applyTheme = (currentTheme: EnvTheme) => {
  const theme = getThemeProps(currentTheme);
  const element = document.querySelector('body') as HTMLBodyElement;
  element.className = theme;

  element.classList.toggle(currentTheme === 'dark' ? 'light' : 'dark');
};
