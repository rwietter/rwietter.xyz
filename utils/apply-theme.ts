import { EnvTheme } from 'features/ui/theme/ts';
import { globalStyles } from 'styles/global';
import { getThemeProps } from './get-theme';

export const applyTheme = (currentTheme: EnvTheme) => {
  globalStyles();
  const theme = getThemeProps(currentTheme);
  const classTheme = document.querySelector('body') as HTMLBodyElement;
  classTheme.className = theme;
};
