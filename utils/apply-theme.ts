import { EnvTheme } from 'features/ui/theme/ts';
import { getThemeProps } from './get-theme';

export const applyTheme = (currentTheme: EnvTheme) => {
  const theme = getThemeProps(currentTheme);
  const classTheme = document.querySelector('body') as HTMLBodyElement;
  classTheme.className = theme;
  classTheme.classList.toggle('dark', currentTheme === 'light');
};
